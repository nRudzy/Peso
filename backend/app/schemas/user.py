from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from app.core.enums import GenderEnum, WeightUnitEnum, HeightUnitEnum
from app.schemas.common import TimestampMixin


class UserBase(BaseModel):
    """Base user schema"""
    email: EmailStr
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    gender: Optional[GenderEnum] = None
    age: Optional[int] = Field(None, ge=0, le=150)
    height: Optional[float] = Field(None, ge=0)
    initial_weight: Optional[float] = Field(None, ge=0)
    target_weight: Optional[float] = Field(None, ge=0)
    weight_unit: WeightUnitEnum = WeightUnitEnum.KG
    height_unit: HeightUnitEnum = HeightUnitEnum.CM
    profile_visibility: bool = True


class UserCreate(UserBase):
    """Schema for user creation"""
    password: str = Field(..., min_length=8)


class UserCreateDB(UserBase):
    """Schema for user creation in database (with hashed password)"""
    hashed_password: str


class UserUpdate(BaseModel):
    """Schema for user updates"""
    first_name: Optional[str] = None
    last_name: Optional[str] = None
    gender: Optional[GenderEnum] = None
    age: Optional[int] = Field(None, ge=0, le=150)
    height: Optional[float] = Field(None, ge=0)
    initial_weight: Optional[float] = Field(None, ge=0)
    target_weight: Optional[float] = Field(None, ge=0)
    weight_unit: Optional[WeightUnitEnum] = None
    height_unit: Optional[HeightUnitEnum] = None
    profile_visibility: Optional[bool] = None


class UserInDB(UserBase, TimestampMixin):
    """Schema for user in database"""
    id: int
    email_verified: bool
    is_active: bool

    class Config:
        from_attributes = True


class UserResponse(UserInDB):
    """Schema for user response (excludes sensitive data)"""
    pass


class UserProfile(UserBase):
    """Schema for user profile (public data)"""
    id: int
    profile_visibility: bool

    class Config:
        from_attributes = True


class PasswordChange(BaseModel):
    """Schema for password change"""
    current_password: str
    new_password: str = Field(..., min_length=8) 