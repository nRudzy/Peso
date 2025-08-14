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


class WeightEntryCreateDB(WeightEntryBase):
    """Schema for weight entry creation in database (with user_id)"""
    user_id: int


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


class WeightStatistics(BaseModel):
    """Schema for weight statistics"""
    total_entries: int
    current_weight: Optional[float] = None
    initial_weight: Optional[float] = None
    min_weight: Optional[float] = None
    max_weight: Optional[float] = None
    average_weight: Optional[float] = None


class WeightProgress(BaseModel):
    """Schema for weight progress over time"""
    total_entries: int
    average_weight: float
    weight_change: float
    entries: list[WeightEntryResponse] 