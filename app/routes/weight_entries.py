from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime
from app.core.database import get_db
from app.core.dependencies import get_current_verified_user
from app.schemas.weight_entry import (
    WeightEntryResponse, WeightEntryCreate, WeightEntryUpdate
)
from app.schemas.common import BaseResponse, PaginatedResponse, PaginationMetadata
from app.services.weight_entry_service import WeightEntryService
from app.utils.pagination import validate_pagination_params, calculate_skip, get_pagination_metadata

router = APIRouter()


@router.post("/weight-entries", response_model=WeightEntryResponse)
async def create_weight_entry(
    entry_data: WeightEntryCreate,
    current_user = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Create a new weight entry"""
    weight_service = WeightEntryService(db)
    entry = weight_service.create_weight_entry(current_user.id, entry_data)
    return entry


@router.get("/weight-entries", response_model=PaginatedResponse[WeightEntryResponse])
async def get_weight_entries(
    page: int = Query(1, ge=1, description="Page number"),
    limit: int = Query(20, ge=1, le=100, description="Items per page"),
    start_date: datetime = Query(None, description="Start date filter"),
    end_date: datetime = Query(None, description="End date filter"),
    current_user = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Get paginated weight entries for current user"""
    page, limit = validate_pagination_params(page, limit)
    skip = calculate_skip(page, limit)
    
    weight_service = WeightEntryService(db)
    
    if start_date and end_date:
        entries = weight_service.get_weight_entries_by_date_range(
            current_user.id, start_date, end_date, skip, limit
        )
    else:
        entries = weight_service.get_user_weight_entries(current_user.id, skip, limit)
    
    total = len(entries)  # In a real app, you'd get total count separately
    metadata = get_pagination_metadata(total, page, limit)
    
    return PaginatedResponse(
        data=entries,
        metadata=PaginationMetadata(**metadata)
    )


@router.get("/weight-entries/{entry_id}", response_model=WeightEntryResponse)
async def get_weight_entry(
    entry_id: int,
    current_user = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Get a specific weight entry"""
    weight_service = WeightEntryService(db)
    entry = weight_service.get_weight_entry_by_id(entry_id, current_user.id)
    
    if not entry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Weight entry not found"
        )
    
    return entry


@router.put("/weight-entries/{entry_id}", response_model=WeightEntryResponse)
async def update_weight_entry(
    entry_id: int,
    entry_data: WeightEntryUpdate,
    current_user = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Update a weight entry"""
    weight_service = WeightEntryService(db)
    entry = weight_service.update_weight_entry(entry_id, current_user.id, entry_data)
    
    if not entry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Weight entry not found"
        )
    
    return entry


@router.delete("/weight-entries/{entry_id}", response_model=BaseResponse)
async def delete_weight_entry(
    entry_id: int,
    current_user = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Delete a weight entry"""
    weight_service = WeightEntryService(db)
    success = weight_service.delete_weight_entry(entry_id, current_user.id)
    
    if not success:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Weight entry not found"
        )
    
    return BaseResponse(message="Weight entry deleted successfully")


@router.get("/weight-entries/latest", response_model=WeightEntryResponse)
async def get_latest_weight_entry(
    current_user = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Get the most recent weight entry"""
    weight_service = WeightEntryService(db)
    entry = weight_service.get_latest_weight_entry(current_user.id)
    
    if not entry:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="No weight entries found"
        )
    
    return entry


@router.get("/weight-entries/progress/{days}", response_model=dict)
async def get_weight_progress(
    days: int,
    current_user = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Get weight progress over a period"""
    weight_service = WeightEntryService(db)
    progress = weight_service.get_weight_progress(current_user.id, days)
    return progress


@router.get("/weight-entries/statistics", response_model=dict)
async def get_weight_statistics(
    current_user = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Get weight statistics for current user"""
    weight_service = WeightEntryService(db)
    statistics = weight_service.get_weight_statistics(current_user.id)
    return statistics 