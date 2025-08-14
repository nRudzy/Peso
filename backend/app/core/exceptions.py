from fastapi import HTTPException, status
from app.core.enums import ErrorCodeEnum


class PesoException(HTTPException):
    """Base exception for Peso application"""
    
    def __init__(
        self,
        status_code: int,
        message: str,
        error_code: ErrorCodeEnum,
        details: dict = None
    ):
        super().__init__(status_code=status_code, detail=message)
        self.error_code = error_code
        self.details = details or {}


class ValidationException(PesoException):
    """Validation error exception"""
    
    def __init__(self, message: str, details: dict = None):
        super().__init__(
            status_code=status.HTTP_400_BAD_REQUEST,
            message=message,
            error_code=ErrorCodeEnum.VALIDATION_ERROR,
            details=details
        )


class AuthenticationException(PesoException):
    """Authentication error exception"""
    
    def __init__(self, message: str = "Authentication failed"):
        super().__init__(
            status_code=status.HTTP_401_UNAUTHORIZED,
            message=message,
            error_code=ErrorCodeEnum.AUTHENTICATION_ERROR
        )


class AuthorizationException(PesoException):
    """Authorization error exception"""
    
    def __init__(self, message: str = "Access denied"):
        super().__init__(
            status_code=status.HTTP_403_FORBIDDEN,
            message=message,
            error_code=ErrorCodeEnum.AUTHORIZATION_ERROR
        )


class NotFoundException(PesoException):
    """Resource not found exception"""
    
    def __init__(self, message: str = "Resource not found"):
        super().__init__(
            status_code=status.HTTP_404_NOT_FOUND,
            message=message,
            error_code=ErrorCodeEnum.NOT_FOUND_ERROR
        )


class ConflictException(PesoException):
    """Resource conflict exception"""
    
    def __init__(self, message: str = "Resource conflict"):
        super().__init__(
            status_code=status.HTTP_409_CONFLICT,
            message=message,
            error_code=ErrorCodeEnum.CONFLICT_ERROR
        )


class InternalException(PesoException):
    """Internal server error exception"""
    
    def __init__(self, message: str = "Internal server error"):
        super().__init__(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            message=message,
            error_code=ErrorCodeEnum.INTERNAL_ERROR
        )


# Specific business exceptions
class UserNotFoundException(NotFoundException):
    """User not found exception"""
    
    def __init__(self, user_id: int = None):
        message = f"User not found"
        if user_id:
            message = f"User with ID {user_id} not found"
        super().__init__(message)


class UserAlreadyExistsException(ConflictException):
    """User already exists exception"""
    
    def __init__(self, email: str):
        super().__init__(f"User with email {email} already exists")


class InvalidCredentialsException(AuthenticationException):
    """Invalid credentials exception"""
    
    def __init__(self):
        super().__init__("Invalid email or password")


class EmailNotVerifiedException(AuthorizationException):
    """Email not verified exception"""
    
    def __init__(self):
        super().__init__("Email not verified")


class WeightEntryNotFoundException(NotFoundException):
    """Weight entry not found exception"""
    
    def __init__(self, entry_id: int = None):
        message = "Weight entry not found"
        if entry_id:
            message = f"Weight entry with ID {entry_id} not found"
        super().__init__(message)


class TokenExpiredException(AuthenticationException):
    """Token expired exception"""
    
    def __init__(self):
        super().__init__("Token has expired")


class InvalidTokenException(AuthenticationException):
    """Invalid token exception"""
    
    def __init__(self):
        super().__init__("Invalid token") 