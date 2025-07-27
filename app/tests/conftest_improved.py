import pytest
import tempfile
import os
from unittest.mock import AsyncMock, patch
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
from app.main import app
from app.core.database import get_db, Base
from app.core.config import settings
from app.services.user_service import UserService
from app.schemas.user import UserCreate


# Create temporary SQLite database for testing
@pytest.fixture(scope="session")
def test_db_path():
    """Create a temporary database file for testing"""
    with tempfile.NamedTemporaryFile(suffix=".db", delete=False) as tmp:
        return tmp.name


@pytest.fixture(scope="session")
def engine(test_db_path):
    """Create database engine for testing"""
    SQLALCHEMY_DATABASE_URL = f"sqlite:///{test_db_path}"
    
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL,
        connect_args={"check_same_thread": False},
        poolclass=StaticPool,
    )
    
    # Create all tables
    Base.metadata.create_all(bind=engine)
    
    yield engine
    
    # Clean up
    engine.dispose()
    if os.path.exists(test_db_path):
        os.unlink(test_db_path)


@pytest.fixture(scope="session")
def TestingSessionLocal(engine):
    """Create session factory for testing"""
    return sessionmaker(autocommit=False, autoflush=False, bind=engine)


def override_get_db(TestingSessionLocal):
    """Override database dependency for testing"""
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()


@pytest.fixture(scope="session")
def app_with_db(TestingSessionLocal):
    """Override app dependencies with test database"""
    app.dependency_overrides[get_db] = lambda: override_get_db(TestingSessionLocal)
    yield app
    app.dependency_overrides.clear()


@pytest.fixture(autouse=True)
def clean_database(engine):
    """Clean database before each test"""
    with engine.begin() as conn:
        # Disable foreign key constraints for SQLite
        conn.execute("PRAGMA foreign_keys=OFF")
        
        # Get all table names
        tables = Base.metadata.tables.keys()
        
        # Delete all data from all tables
        for table_name in tables:
            conn.execute(f"DELETE FROM {table_name}")
        
        # Reset auto-increment counters
        for table_name in tables:
            conn.execute(f"DELETE FROM sqlite_sequence WHERE name='{table_name}'")
        
        # Re-enable foreign key constraints
        conn.execute("PRAGMA foreign_keys=ON")
    
    yield


@pytest.fixture
def client(app_with_db):
    """Test client fixture"""
    with TestClient(app_with_db) as c:
        yield c


@pytest.fixture
def db_session(TestingSessionLocal):
    """Database session fixture"""
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()


@pytest.fixture
def test_user(db_session):
    """Test user fixture"""
    user_service = UserService(db_session)
    user_data = UserCreate(
        email="test@example.com",
        password="testpassword123",
        first_name="Test",
        last_name="User"
    )
    user = user_service.create_user(user_data)
    return user


@pytest.fixture
def auth_headers(client, test_user):
    """Authentication headers fixture"""
    login_data = {
        "email": "test@example.com",
        "password": "testpassword123"
    }
    response = client.post("/api/v1/auth/login", json=login_data)
    token = response.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}


@pytest.fixture(autouse=True)
def mock_email_service():
    """Mock email service to prevent real emails during tests"""
    with patch('app.services.auth_service.EmailService') as mock_email:
        # Mock the send_verification_email method
        mock_email.return_value.send_verification_email = AsyncMock(return_value=True)
        # Mock the send_password_reset_email method
        mock_email.return_value.send_password_reset_email = AsyncMock(return_value=True)
        # Mock the send_welcome_email method
        mock_email.return_value.send_welcome_email = AsyncMock(return_value=True)
        yield mock_email 