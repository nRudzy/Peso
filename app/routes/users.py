from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from typing import List
from app.core.database import get_db
from app.core.dependencies import get_current_active_user, get_current_verified_user
from app.schemas.user import (
    UserResponse, UserUpdate, UserProfile, PasswordChange
)
from app.schemas.common import BaseResponse, PaginatedResponse, PaginationMetadata
from app.services.user_service import UserService
from app.utils.pagination import validate_pagination_params, calculate_skip, get_pagination_metadata

router = APIRouter()


@router.get("/users/me", response_model=UserResponse)
async def get_current_user_profile(
    current_user = Depends(get_current_active_user)
):
    """Get current user profile"""
    return current_user


@router.put("/users/me", response_model=UserResponse)
async def update_current_user_profile(
    user_data: UserUpdate,
    current_user = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Update current user profile"""
    user_service = UserService(db)
    updated_user = user_service.update_user(current_user.id, user_data)
    
    if not updated_user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    return updated_user


@router.post("/users/me/change-password", response_model=BaseResponse)
async def change_password(
    password_data: PasswordChange,
    current_user = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Change current user password"""
    user_service = UserService(db)
    
    # Verify current password
    if not user_service.verify_password(current_user.id, password_data.current_password):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Current password is incorrect"
        )
    
    # Change password
    success = user_service.change_password(current_user.id, password_data.new_password)
    
    if not success:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to change password"
        )
    
    return BaseResponse(message="Password changed successfully")


@router.delete("/users/me", response_model=BaseResponse)
async def deactivate_account(
    current_user = Depends(get_current_active_user),
    db: Session = Depends(get_db)
):
    """Deactivate current user account"""
    user_service = UserService(db)
    success = user_service.deactivate_user(current_user.id)
    
    if not success:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="Failed to deactivate account"
        )
    
    return BaseResponse(message="Account deactivated successfully")


@router.get("/users", response_model=PaginatedResponse[UserProfile])
async def get_users(
    page: int = Query(1, ge=1, description="Page number"),
    limit: int = Query(20, ge=1, le=100, description="Items per page"),
    search: str = Query(None, description="Search term"),
    db: Session = Depends(get_db)
):
    """Get paginated list of users"""
    page, limit = validate_pagination_params(page, limit)
    skip = calculate_skip(page, limit)
    
    user_service = UserService(db)
    
    if search:
        users = user_service.search_users(search, skip, limit)
        total = len(users)  # In a real app, you'd get total count separately
    else:
        users = user_service.get_users(skip, limit)
        total = len(users)  # In a real app, you'd get total count separately
    
    metadata = get_pagination_metadata(total, page, limit)
    
    return PaginatedResponse(
        data=users,
        metadata=PaginationMetadata(**metadata)
    )


@router.get("/users/{user_id}", response_model=UserProfile)
async def get_user_profile(
    user_id: int,
    db: Session = Depends(get_db)
):
    """Get public user profile"""
    user_service = UserService(db)
    user = user_service.get_user_by_id(user_id)
    
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )
    
    if not user.profile_visibility or not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User profile not found"
        )
    
    return user 