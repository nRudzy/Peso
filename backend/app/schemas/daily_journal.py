from pydantic import BaseModel, Field, validator
from datetime import datetime
from typing import Optional


class DailyJournalBase(BaseModel):
    sleep_quality: Optional[int] = Field(None, ge=1, le=5, description="Sleep quality on a scale of 1-5")
    energy_level: Optional[int] = Field(None, ge=1, le=5, description="Energy level on a scale of 1-5")
    notes: Optional[str] = Field(None, max_length=1000, description="Free text notes for the day")


class DailyJournalCreate(DailyJournalBase):
    date: Optional[datetime] = None  # If not provided, will use current date


class DailyJournalUpdate(BaseModel):
    sleep_quality: Optional[int] = Field(None, ge=1, le=5)
    energy_level: Optional[int] = Field(None, ge=1, le=5)
    notes: Optional[str] = Field(None, max_length=1000)


class DailyJournalResponse(DailyJournalBase):
    id: int
    date: datetime
    user_id: int
    created_at: datetime
    updated_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class DailyJournalWithWeightResponse(DailyJournalResponse):
    weight: Optional[float] = None
    weight_unit: Optional[str] = None
