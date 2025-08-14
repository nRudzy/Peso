import pytest
from unittest.mock import AsyncMock, patch
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, session
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


@pytest.fixture(scope="session", autouse=True)
def setup_database():
    """Setup database once for all tests"""
    Base.metadata.create_all(bind=engine)
    yield
    Base.metadata.drop_all(bind=engine)


@pytest.fixture(autouse=True)
def db_transaction():
    """Use database transaction for automatic rollback after each test"""
    connection = engine.connect()
    transaction = connection.begin()

    # Create session bound to the transaction
    session_factory = sessionmaker(bind=connection)
    db_session = session_factory()

    # Override the database dependency for this test
    original_get_db = app.dependency_overrides.get(get_db)

    def override_get_db():
        try:
            yield db_session
        finally:
            pass  # Don't close here, we'll handle it in cleanup

    app.dependency_overrides[get_db] = override_get_db

    yield db_session

    # Cleanup: rollback transaction and close connections
    db_session.close()
    transaction.rollback()
    connection.close()

    # Restore original dependency
    if original_get_db:
        app.dependency_overrides[get_db] = original_get_db
    else:
        app.dependency_overrides.pop(get_db, None)


@pytest.fixture
def client():
    """Test client fixture"""
    with TestClient(app) as c:
        yield c


@pytest.fixture
def db_session(db_transaction):
    """Database session fixture (uses transaction)"""
    return db_transaction


@pytest.fixture
def test_user(db_session):
    """Test user fixture"""
    user_service = UserService(db_session)
    user_data = UserCreate(
        email="test@example.com",
        password="testpassword123",
        first_name="Test",
        last_name="User",
    )
    user = user_service.create_user(user_data)
    return user


@pytest.fixture
def auth_headers(client, test_user):
    """Authentication headers fixture"""
    login_data = {"email": "test@example.com", "password": "testpassword123"}
    response = client.post("/api/v1/auth/login", json=login_data)
    token = response.json()["access_token"]
    return {"Authorization": f"Bearer {token}"}


@pytest.fixture(autouse=True)
def mock_email_service():
    """Mock email service to prevent real emails during tests"""
    with patch("app.services.auth_service.EmailService") as mock_email:
        # Mock the send_verification_email method
        mock_email.return_value.send_verification_email = AsyncMock(return_value=True)
        # Mock the send_password_reset_email method
        mock_email.return_value.send_password_reset_email = AsyncMock(return_value=True)
        # Mock the send_welcome_email method
        mock_email.return_value.send_welcome_email = AsyncMock(return_value=True)
        yield mock_email
