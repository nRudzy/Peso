from sqlalchemy.orm import Session
from typing import Optional, Tuple
from datetime import datetime, timedelta
from jose import JWTError, jwt
from app.models.user import User
from app.schemas.auth import LoginRequest, RegisterRequest
from app.core.security import verify_password, create_access_token, create_refresh_token, verify_token
from app.core.config import settings
from app.services.user_service import UserService
from app.services.email_service import EmailService
from app.utils.token_generator import generate_verification_token


class AuthService:
    def __init__(self, db: Session):
        self.db = db
        self.user_service = UserService(db)
        self.email_service = EmailService()

    def authenticate_user(self, login_data: LoginRequest) -> Optional[User]:
        """Authenticate user with email and password"""
        user = self.user_service.get_user_by_email(login_data.email)
        if not user:
            return None
        if not verify_password(login_data.password, user.hashed_password):
            return None
        return user

    def login(self, login_data: LoginRequest) -> Optional[Tuple[str, str]]:
        """Login user and return tokens"""
        user = self.authenticate_user(login_data)
        if not user:
            return None

        if not user.is_active:
            raise ValueError("User account is deactivated")

        # Create tokens
        access_token = create_access_token(data={"sub": str(user.id)})
        refresh_token = create_refresh_token(data={"sub": str(user.id)})

        return access_token, refresh_token

    def register(self, register_data: RegisterRequest) -> User:
        """Register a new user"""
        # Check if user already exists
        existing_user = self.user_service.get_user_by_email(register_data.email)
        if existing_user:
            raise ValueError("User with this email already exists")

        # Create user
        user = self.user_service.create_user(register_data)

        # Send verification email
        verification_token = generate_verification_token()
        self.email_service.send_verification_email(user.email, verification_token)

        return user

    def refresh_token(self, refresh_token: str) -> Optional[str]:
        """Refresh access token using refresh token"""
        try:
            payload = verify_token(refresh_token)
            if payload is None or payload.get("type") != "refresh":
                return None

            user_id = payload.get("sub")
            if user_id is None:
                return None

            user = self.user_service.get_user_by_id(int(user_id))
            if user is None or not user.is_active:
                return None

            # Create new access token
            access_token = create_access_token(data={"sub": str(user.id)})
            return access_token

        except JWTError:
            return None

    def verify_email_token(self, token: str) -> bool:
        """Verify email verification token"""
        try:
            payload = verify_token(token)
            if payload is None or payload.get("type") != "email_verification":
                return False

            user_id = payload.get("sub")
            if user_id is None:
                return False

            return self.user_service.verify_email(int(user_id))

        except JWTError:
            return False

    def forgot_password(self, email: str) -> bool:
        """Send password reset email"""
        user = self.user_service.get_user_by_email(email)
        if not user:
            return False

        reset_token = generate_verification_token()
        return self.email_service.send_password_reset_email(email, reset_token)

    def reset_password(self, token: str, new_password: str) -> bool:
        """Reset password using token"""
        try:
            payload = verify_token(token)
            if payload is None or payload.get("type") != "password_reset":
                return False

            user_id = payload.get("sub")
            if user_id is None:
                return False

            return self.user_service.change_password(int(user_id), new_password)

        except JWTError:
            return False

    def logout(self, user_id: int) -> bool:
        """Logout user (invalidate tokens)"""
        # In a real application, you would add tokens to a blacklist
        # For now, we'll just return True as JWT tokens are stateless
        return True 