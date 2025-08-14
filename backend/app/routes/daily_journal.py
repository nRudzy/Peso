from fastapi import APIRouter, Depends, HTTPException, Query, Response
from sqlalchemy.orm import Session
from typing import List, Optional
from datetime import datetime, timedelta
import csv
import io
import json

from app.core.database import get_db
from app.core.dependencies import get_current_verified_user
from app.models.user import User
from app.schemas.daily_journal import (
    DailyJournalCreate, 
    DailyJournalUpdate, 
    DailyJournalResponse,
    DailyJournalWithWeightResponse
)
from app.services.daily_journal_service import DailyJournalService
from app.core.exceptions import NotFoundException, ValidationException

router = APIRouter()


@router.post("/daily-journal", response_model=DailyJournalResponse, status_code=201)
async def create_journal_entry(
    journal_data: DailyJournalCreate,
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Create a new daily journal entry"""
    try:
        service = DailyJournalService(db)
        entry = service.create_journal_entry(current_user.id, journal_data)
        return entry
    except ValidationException as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.get("/daily-journal", response_model=List[DailyJournalResponse])
async def get_journal_entries(
    start_date: Optional[datetime] = Query(None, description="Start date for filtering"),
    end_date: Optional[datetime] = Query(None, description="End date for filtering"),
    limit: int = Query(100, ge=1, le=1000, description="Maximum number of entries to return"),
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Get journal entries with optional date filtering"""
    service = DailyJournalService(db)
    entries = service.get_journal_entries(
        current_user.id, 
        start_date=start_date, 
        end_date=end_date, 
        limit=limit
    )
    return entries


@router.get("/daily-journal/today", response_model=Optional[DailyJournalResponse])
async def get_today_journal_entry(
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Get today's journal entry if it exists"""
    service = DailyJournalService(db)
    entry = service.get_journal_entry_by_date(current_user.id, datetime.now())
    return entry


@router.get("/daily-journal/{entry_id}", response_model=DailyJournalResponse)
async def get_journal_entry(
    entry_id: int,
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Get a specific journal entry by ID"""
    try:
        service = DailyJournalService(db)
        entry = service.get_journal_entry(current_user.id, entry_id)
        return entry
    except NotFoundException as e:
        raise HTTPException(status_code=404, detail=str(e))


@router.put("/daily-journal/{entry_id}", response_model=DailyJournalResponse)
async def update_journal_entry(
    entry_id: int,
    journal_data: DailyJournalUpdate,
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Update a journal entry"""
    try:
        service = DailyJournalService(db)
        entry = service.update_journal_entry(current_user.id, entry_id, journal_data)
        return entry
    except NotFoundException as e:
        raise HTTPException(status_code=404, detail=str(e))


@router.delete("/daily-journal/{entry_id}", status_code=204)
async def delete_journal_entry(
    entry_id: int,
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Delete a journal entry"""
    try:
        service = DailyJournalService(db)
        service.delete_journal_entry(current_user.id, entry_id)
    except NotFoundException as e:
        raise HTTPException(status_code=404, detail=str(e))


@router.get("/daily-journal/statistics/summary")
async def get_journal_statistics(
    days: int = Query(30, ge=1, le=365, description="Number of days to analyze"),
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Get journal statistics over the last N days"""
    service = DailyJournalService(db)
    stats = service.get_journal_statistics(current_user.id, days)
    return stats


@router.get("/daily-journal/export/csv")
async def export_journal_csv(
    start_date: Optional[datetime] = Query(None, description="Start date for export"),
    end_date: Optional[datetime] = Query(None, description="End date for export"),
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Export journal entries as CSV"""
    service = DailyJournalService(db)
    entries = service.get_journal_with_weight_entries(
        current_user.id, 
        start_date=start_date, 
        end_date=end_date
    )
    
    # Create CSV content
    output = io.StringIO()
    writer = csv.writer(output)
    
    # Write header
    writer.writerow([
        "Date", "Sleep Quality (1-5)", "Energy Level (1-5)", 
        "Notes", "Weight", "Weight Unit"
    ])
    
    # Write data
    for entry in entries:
        writer.writerow([
            entry["date"].strftime("%Y-%m-%d"),
            entry["sleep_quality"] or "",
            entry["energy_level"] or "",
            entry["notes"] or "",
            entry["weight"] or "",
            entry["weight_unit"] or ""
        ])
    
    # Prepare response
    csv_content = output.getvalue()
    output.close()
    
    filename = f"journal_export_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
    
    return Response(
        content=csv_content,
        media_type="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )


@router.get("/daily-journal/export/json")
async def export_journal_json(
    start_date: Optional[datetime] = Query(None, description="Start date for export"),
    end_date: Optional[datetime] = Query(None, description="End date for export"),
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Export journal entries as JSON"""
    service = DailyJournalService(db)
    entries = service.get_journal_with_weight_entries(
        current_user.id, 
        start_date=start_date, 
        end_date=end_date
    )
    
    # Convert datetime objects to strings for JSON serialization
    for entry in entries:
        entry["date"] = entry["date"].isoformat()
    
    filename = f"journal_export_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    
    return Response(
        content=json.dumps(entries, indent=2, ensure_ascii=False),
        media_type="application/json",
        headers={"Content-Disposition": f"attachment; filename={filename}"}
    )
