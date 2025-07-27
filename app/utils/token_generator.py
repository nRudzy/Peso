import secrets
import string
from datetime import datetime, timedelta
from jose import jwt
from app.core.config import settings


def generate_verification_token() -> str:
    """Generate a random verification token"""
    return secrets.token_urlsafe(32)


def generate_email_verification_token(user_id: int) -> str:
    """Generate JWT token for email verification"""
    expire = datetime.utcnow() + timedelta(hours=24)
    to_encode = {
        "sub": str(user_id),
        "type": "email_verification",
        "exp": expire
    }
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)


def generate_password_reset_token(user_id: int) -> str:
    """Generate JWT token for password reset"""
    expire = datetime.utcnow() + timedelta(hours=1)
    to_encode = {
        "sub": str(user_id),
        "type": "password_reset",
        "exp": expire
    }
    return jwt.encode(to_encode, settings.SECRET_KEY, algorithm=settings.ALGORITHM)


def generate_random_password(length: int = 12) -> str:
    """Generate a random password"""
    characters = string.ascii_letters + string.digits + "!@#$%^&*"
    return ''.join(secrets.choice(characters) for _ in range(length)) 