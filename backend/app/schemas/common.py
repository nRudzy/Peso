from pydantic import BaseModel
from typing import Generic, TypeVar, List, Optional
from datetime import datetime

T = TypeVar('T')


class PaginationMetadata(BaseModel):
    """Pagination metadata"""
    page: int
    limit: int
    total: int
    total_pages: int


class PaginatedResponse(BaseModel, Generic[T]):
    """Standard paginated response wrapper"""
    data: List[T]
    metadata: PaginationMetadata


class BaseResponse(BaseModel):
    """Base response model"""
    message: str
    success: bool = True


class ErrorResponse(BaseModel):
    """Error response model"""
    message: str
    success: bool = False
    error_code: Optional[str] = None
    details: Optional[dict] = None


class TimestampMixin(BaseModel):
    """Mixin for timestamp fields"""
    created_at: datetime
    updated_at: Optional[datetime] = None 