from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from app.schemas.common import TimestampMixin


class WeightEntryBase(BaseModel):
    """Base weight entry schema"""
    weight: float = Field(..., ge=0)
    date: datetime
    comment: Optional[str] = None


class WeightEntryCreate(WeightEntryBase):
    """Schema for weight entry creation"""
    pass


class WeightEntryUpdate(BaseModel):
    """Schema for weight entry updates"""
    weight: Optional[float] = Field(None, ge=0)
    date: Optional[datetime] = None
    comment: Optional[str] = None


class WeightEntryInDB(WeightEntryBase, TimestampMixin):
    """Schema for weight entry in database"""
    id: int
    user_id: int

    class Config:
        from_attributes = True


class WeightEntryResponse(WeightEntryInDB):
    """Schema for weight entry response"""
    pass


class WeightEntryWithUser(WeightEntryResponse):
    """Schema for weight entry with user info"""
    user_email: str 