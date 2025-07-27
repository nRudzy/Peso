from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.schemas.auth import (
    LoginRequest, RegisterRequest, TokenResponse, RefreshTokenRequest,
    EmailVerificationRequest, ForgotPasswordRequest, ResetPasswordRequest
)
from app.schemas.common import BaseResponse
from app.services.auth_service import AuthService
from app.core.enums import RouteTagsEnum
from app.core.exceptions import (
    InvalidCredentialsException, UserAlreadyExistsException,
    InvalidTokenException, TokenExpiredException
)

router = APIRouter()


@router.post("/auth/register", response_model=BaseResponse, tags=[RouteTagsEnum.AUTHENTICATION])
async def register(
    register_data: RegisterRequest,
    db: Session = Depends(get_db)
):
    """Register a new user"""
    try:
        auth_service = AuthService(db)
        user = auth_service.register(register_data)
        
        return BaseResponse(
            message="User registered successfully. Please check your email to verify your account."
        )
    except UserAlreadyExistsException as e:
        raise e


@router.post("/auth/login", response_model=TokenResponse, tags=[RouteTagsEnum.AUTHENTICATION])
async def login(
    login_data: LoginRequest,
    db: Session = Depends(get_db)
):
    """Login user"""
    auth_service = AuthService(db)
    tokens = auth_service.login(login_data)
    
    if not tokens:
        raise InvalidCredentialsException()
    
    access_token, refresh_token = tokens
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
        expires_in=30 * 60  # 30 minutes
    )


@router.post("/auth/refresh", response_model=TokenResponse)
async def refresh_token(
    refresh_data: RefreshTokenRequest,
    db: Session = Depends(get_db)
):
    """Refresh access token"""
    auth_service = AuthService(db)
    access_token = auth_service.refresh_token(refresh_data.refresh_token)
    
    if not access_token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid refresh token"
        )
    
    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_data.refresh_token,
        expires_in=30 * 60  # 30 minutes
    )


@router.post("/auth/verify-email", response_model=BaseResponse)
async def verify_email(
    verification_data: EmailVerificationRequest,
    db: Session = Depends(get_db)
):
    """Verify email address"""
    auth_service = AuthService(db)
    success = auth_service.verify_email_token(verification_data.token)
    
    if not success:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired verification token"
        )
    
    return BaseResponse(message="Email verified successfully")


@router.post("/auth/forgot-password", response_model=BaseResponse)
async def forgot_password(
    forgot_data: ForgotPasswordRequest,
    db: Session = Depends(get_db)
):
    """Send password reset email"""
    auth_service = AuthService(db)
    success = auth_service.forgot_password(forgot_data.email)
    
    if not success:
        # Don't reveal if email exists or not for security
        pass
    
    return BaseResponse(
        message="If the email exists, a password reset link has been sent."
    )


@router.post("/auth/reset-password", response_model=BaseResponse)
async def reset_password(
    reset_data: ResetPasswordRequest,
    db: Session = Depends(get_db)
):
    """Reset password using token"""
    auth_service = AuthService(db)
    success = auth_service.reset_password(reset_data.token, reset_data.new_password)
    
    if not success:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid or expired reset token"
        )
    
    return BaseResponse(message="Password reset successfully") 