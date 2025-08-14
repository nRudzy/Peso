import pytest
from unittest.mock import Mock, patch
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session
from app.main import app
from app.services.auth_service import AuthService
from app.schemas.auth import RegisterRequest, LoginRequest, EmailVerificationRequest, ForgotPasswordRequest, ResetPasswordRequest
from app.core.exceptions import InvalidCredentialsException, UserAlreadyExistsException, InvalidTokenException


class TestAuthService:
    """Test cases for AuthService"""
    
    def setup_method(self):
        """Setup test method"""
        self.mock_db = Mock(spec=Session)
        self.auth_service = AuthService(self.mock_db)
    
    def test_register_user_success(self):
        """Test successful user registration"""
        # Arrange
        register_data = RegisterRequest(
            email="test@example.com",
            password="password123",
            first_name="John",
            last_name="Doe"
        )
        
        mock_user = Mock(id=1, email="test@example.com")
        
        with patch.object(self.auth_service.user_service, 'get_user_by_email', return_value=None):
            with patch.object(self.auth_service.user_service, 'create_user', return_value=mock_user):
                # Act
                result = self.auth_service.register(register_data)
                
                # Assert
                assert result is not None
                assert result.id == 1
    
    def test_register_user_already_exists(self):
        """Test registration with existing email"""
        # Arrange
        register_data = RegisterRequest(
            email="existing@example.com",
            password="password123"
        )
        
        existing_user = Mock(id=1, email="existing@example.com")
        
        with patch.object(self.auth_service.user_service, 'get_user_by_email', return_value=existing_user):
            # Act & Assert
            with pytest.raises(ValueError, match="User with this email already exists"):
                self.auth_service.register(register_data)
    
    def test_login_success(self):
        """Test successful login"""
        # Arrange
        login_data = LoginRequest(
            email="test@example.com",
            password="password123"
        )
        
        mock_user = Mock(
            id=1,
            email="test@example.com",
            email_verified=True,
            is_active=True
        )
        
        with patch.object(self.auth_service, 'authenticate_user', return_value=mock_user):
            with patch('app.services.auth_service.create_access_token', return_value="access_token"):
                with patch('app.services.auth_service.create_refresh_token', return_value="refresh_token"):
                    # Act
                    result = self.auth_service.login(login_data)
                    
                    # Assert
                    assert result is not None
                    assert result[0] == "access_token"
                    assert result[1] == "refresh_token"
    
    def test_login_invalid_credentials(self):
        """Test login with invalid credentials"""
        # Arrange
        login_data = LoginRequest(
            email="test@example.com",
            password="wrongpassword"
        )
        
        with patch.object(self.auth_service, 'authenticate_user', return_value=None):
            # Act
            result = self.auth_service.login(login_data)
            
            # Assert
            assert result is None
    
    def test_login_unverified_email(self):
        """Test login with unverified email"""
        # Arrange
        login_data = LoginRequest(
            email="test@example.com",
            password="password123"
        )
        
        mock_user = Mock(
            id=1,
            email="test@example.com",
            email_verified=False,
            is_active=True
        )
        
        with patch.object(self.auth_service, 'authenticate_user', return_value=mock_user):
            with patch('app.services.auth_service.create_access_token', return_value="access_token"):
                with patch('app.services.auth_service.create_refresh_token', return_value="refresh_token"):
                    # Act
                    result = self.auth_service.login(login_data)
                    
                    # Assert
                    assert result is not None  # Login should still work even with unverified email
    
    def test_verify_email_success(self):
        """Test successful email verification"""
        # Arrange
        token = "valid_token"
        
        with patch('app.services.auth_service.verify_token', return_value={"sub": "1", "type": "email_verification"}):
            with patch.object(self.auth_service.user_service, 'verify_email', return_value=True):
                # Act
                result = self.auth_service.verify_email_token(token)
                
                # Assert
                assert result is True
    
    def test_verify_email_invalid_token(self):
        """Test email verification with invalid token"""
        # Arrange
        token = "invalid_token"
        
        with patch('app.services.auth_service.verify_token', return_value=None):
            # Act
            result = self.auth_service.verify_email_token(token)
            
            # Assert
            assert result is False
    
    def test_forgot_password_success(self):
        """Test successful forgot password request"""
        # Arrange
        email = "test@example.com"
        mock_user = Mock(id=1, email=email)
        
        with patch.object(self.auth_service.user_service, 'get_user_by_email', return_value=mock_user):
            with patch.object(self.auth_service.email_service, 'send_password_reset_email', return_value=True):
                # Act
                result = self.auth_service.forgot_password(email)
                
                # Assert
                assert result is True
    
    def test_forgot_password_user_not_found(self):
        """Test forgot password with non-existent user"""
        # Arrange
        email = "nonexistent@example.com"
        
        with patch.object(self.auth_service.user_service, 'get_user_by_email', return_value=None):
            # Act
            result = self.auth_service.forgot_password(email)
            
            # Assert
            assert result is False
    
    def test_reset_password_success(self):
        """Test successful password reset"""
        # Arrange
        token = "valid_token"
        new_password = "newpassword123"
        
        with patch('app.services.auth_service.verify_token', return_value={"sub": "1", "type": "password_reset"}):
            with patch.object(self.auth_service.user_service, 'change_password', return_value=True):
                # Act
                result = self.auth_service.reset_password(token, new_password)
                
                # Assert
                assert result is True
    
    def test_reset_password_invalid_token(self):
        """Test password reset with invalid token"""
        # Arrange
        token = "invalid_token"
        new_password = "newpassword123"
        
        with patch('app.services.auth_service.verify_token', return_value=None):
            # Act
            result = self.auth_service.reset_password(token, new_password)
            
            # Assert
            assert result is False


class TestAuthAPI:
    """Test cases for Auth API endpoints"""
    
    def setup_method(self):
        """Setup test method"""
        self.client = TestClient(app)
    
    def test_register_endpoint_success(self):
        """Test successful registration endpoint"""
        # Arrange
        register_data = {
            "email": "newuser@example.com",
            "password": "password123",
            "first_name": "John",
            "last_name": "Doe"
        }
        
        with patch('app.routes.auth.AuthService') as mock_auth_service:
            mock_service_instance = Mock()
            mock_service_instance.register.return_value = Mock(id=1)
            mock_auth_service.return_value = mock_service_instance
            
            # Act
            response = self.client.post("/api/v1/auth/register", json=register_data)
            
            # Assert
            assert response.status_code == 200
            assert "message" in response.json()
    
    def test_login_endpoint_success(self):
        """Test successful login endpoint"""
        # Arrange
        login_data = {
            "email": "test@example.com",
            "password": "password123"
        }
        
        with patch('app.routes.auth.AuthService') as mock_auth_service:
            mock_service_instance = Mock()
            mock_service_instance.login.return_value = ("access_token", "refresh_token")
            mock_auth_service.return_value = mock_service_instance
            
            # Act
            response = self.client.post("/api/v1/auth/login", json=login_data)
            
            # Assert
            assert response.status_code == 200
            assert "access_token" in response.json()
            assert "refresh_token" in response.json()
    
    def test_verify_email_endpoint_success(self):
        """Test successful email verification endpoint"""
        # Arrange
        verification_data = {
            "token": "valid_token"
        }
        
        with patch('app.routes.auth.AuthService') as mock_auth_service:
            mock_service_instance = Mock()
            mock_service_instance.verify_email_token.return_value = True
            mock_auth_service.return_value = mock_service_instance
            
            # Act
            response = self.client.post("/api/v1/auth/verify-email", json=verification_data)
            
            # Assert
            assert response.status_code == 200
            assert "message" in response.json()
    
    def test_forgot_password_endpoint_success(self):
        """Test successful forgot password endpoint"""
        # Arrange
        forgot_data = {
            "email": "test@example.com"
        }
        
        with patch('app.routes.auth.AuthService') as mock_auth_service:
            mock_service_instance = Mock()
            mock_service_instance.forgot_password.return_value = True
            mock_auth_service.return_value = mock_service_instance
            
            # Act
            response = self.client.post("/api/v1/auth/forgot-password", json=forgot_data)
            
            # Assert
            assert response.status_code == 200
            assert "message" in response.json()
    
    def test_reset_password_endpoint_success(self):
        """Test successful password reset endpoint"""
        # Arrange
        reset_data = {
            "token": "valid_token",
            "new_password": "newpassword123"
        }
        
        with patch('app.routes.auth.AuthService') as mock_auth_service:
            mock_service_instance = Mock()
            mock_service_instance.reset_password.return_value = True
            mock_auth_service.return_value = mock_service_instance
            
            # Act
            response = self.client.post("/api/v1/auth/reset-password", json=reset_data)
            
            # Assert
            assert response.status_code == 200
            assert "message" in response.json()
