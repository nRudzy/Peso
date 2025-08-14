import pytest
from unittest.mock import AsyncMock, patch
from fastapi.testclient import TestClient
from sqlalchemy import create_engine, text
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool
from app.main import app
from app.core.database import get_db, Base
from app.core.config import settings
from app.services.user_service import UserService
from app.schemas.user import UserCreate


# Create in-memory SQLite database for testing
SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def override_get_db():
    """Override database dependency for testing"""
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()


# Override the database dependency
app.dependency_overrides[get_db] = override_get_db


@pytest.fixture(scope="session", autouse=True)
def setup_database():
    """Setup database once for all tests"""
    Base.metadata.create_all(bind=engine)
    yield
    Base.metadata.drop_all(bind=engine)


@pytest.fixture(autouse=True)
def clean_database():
    """Clean database before each test"""
    # Clean all tables before each test
    with engine.begin() as conn:
        # Get all table names
        tables = Base.metadata.tables.keys()
        
        # Delete all data from all tables
        for table_name in tables:
            conn.execute(text(f"DELETE FROM {table_name}"))
        
        # Reset auto-increment counters for SQLite
        for table_name in tables:
            conn.execute(text(f"DELETE FROM sqlite_sequence WHERE name='{table_name}'"))
    
    yield


@pytest.fixture
def client():
    """Test client fixture"""
    with TestClient(app) as c:
        yield c


@pytest.fixture
def db_session():
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