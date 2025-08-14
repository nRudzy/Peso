from sqlalchemy.orm import Session
from sqlalchemy import and_, func
from datetime import datetime, timedelta
from typing import List, Optional
from app.models.daily_journal import DailyJournal
from app.models.weight_entry import WeightEntry
from app.schemas.daily_journal import DailyJournalCreate, DailyJournalUpdate
from app.core.exceptions import NotFoundException, ValidationException


class DailyJournalService:
    def __init__(self, db: Session):
        self.db = db

    def create_journal_entry(self, user_id: int, journal_data: DailyJournalCreate) -> DailyJournal:
        """Create a new daily journal entry"""
        # Check if entry already exists for the given date
        target_date = journal_data.date or datetime.now()
        start_of_day = target_date.replace(hour=0, minute=0, second=0, microsecond=0)
        end_of_day = start_of_day + timedelta(days=1)
        
        existing_entry = self.db.query(DailyJournal).filter(
            and_(
                DailyJournal.user_id == user_id,
                DailyJournal.date >= start_of_day,
                DailyJournal.date < end_of_day
            )
        ).first()
        
        if existing_entry:
            raise ValidationException("A journal entry already exists for this date")
        
        journal_entry = DailyJournal(
            user_id=user_id,
            date=target_date,
            sleep_quality=journal_data.sleep_quality,
            energy_level=journal_data.energy_level,
            notes=journal_data.notes
        )
        
        self.db.add(journal_entry)
        self.db.commit()
        self.db.refresh(journal_entry)
        return journal_entry

    def get_journal_entry(self, user_id: int, entry_id: int) -> DailyJournal:
        """Get a specific journal entry by ID"""
        entry = self.db.query(DailyJournal).filter(
            and_(
                DailyJournal.id == entry_id,
                DailyJournal.user_id == user_id
            )
        ).first()
        
        if not entry:
            raise NotFoundException("Journal entry not found")
        
        return entry

    def get_journal_entry_by_date(self, user_id: int, date: datetime) -> Optional[DailyJournal]:
        """Get journal entry for a specific date"""
        start_of_day = date.replace(hour=0, minute=0, second=0, microsecond=0)
        end_of_day = start_of_day + timedelta(days=1)
        
        return self.db.query(DailyJournal).filter(
            and_(
                DailyJournal.user_id == user_id,
                DailyJournal.date >= start_of_day,
                DailyJournal.date < end_of_day
            )
        ).first()

    def get_journal_entries(
        self, 
        user_id: int, 
        start_date: Optional[datetime] = None,
        end_date: Optional[datetime] = None,
        limit: int = 100
    ) -> List[DailyJournal]:
        """Get journal entries with optional date filtering"""
        query = self.db.query(DailyJournal).filter(DailyJournal.user_id == user_id)
        
        if start_date:
            query = query.filter(DailyJournal.date >= start_date)
        
        if end_date:
            query = query.filter(DailyJournal.date <= end_date)
        
        return query.order_by(DailyJournal.date.desc()).limit(limit).all()

    def update_journal_entry(
        self, 
        user_id: int, 
        entry_id: int, 
        journal_data: DailyJournalUpdate
    ) -> DailyJournal:
        """Update a journal entry"""
        entry = self.get_journal_entry(user_id, entry_id)
        
        # Update only provided fields
        if journal_data.sleep_quality is not None:
            entry.sleep_quality = journal_data.sleep_quality
        if journal_data.energy_level is not None:
            entry.energy_level = journal_data.energy_level
        if journal_data.notes is not None:
            entry.notes = journal_data.notes
        
        self.db.commit()
        self.db.refresh(entry)
        return entry

    def delete_journal_entry(self, user_id: int, entry_id: int) -> bool:
        """Delete a journal entry"""
        entry = self.get_journal_entry(user_id, entry_id)
        self.db.delete(entry)
        self.db.commit()
        return True

    def get_journal_with_weight_entries(
        self, 
        user_id: int, 
        start_date: Optional[datetime] = None,
        end_date: Optional[datetime] = None
    ) -> List[dict]:
        """Get journal entries with corresponding weight entries for export"""
        # Get journal entries
        journal_entries = self.get_journal_entries(user_id, start_date, end_date)
        
        # Get weight entries for the same period
        weight_query = self.db.query(WeightEntry).filter(WeightEntry.user_id == user_id)
        if start_date:
            weight_query = weight_query.filter(WeightEntry.date >= start_date)
        if end_date:
            weight_query = weight_query.filter(WeightEntry.date <= end_date)
        
        weight_entries = weight_query.all()
        
        # Create a dictionary to map dates to weight entries
        weight_by_date = {}
        for weight_entry in weight_entries:
            date_key = weight_entry.date.date()
            weight_by_date[date_key] = weight_entry
        
        # Combine journal and weight data
        result = []
        for journal_entry in journal_entries:
            entry_data = {
                "date": journal_entry.date,
                "sleep_quality": journal_entry.sleep_quality,
                "energy_level": journal_entry.energy_level,
                "notes": journal_entry.notes,
                "weight": None,
                "weight_unit": None
            }
            
            # Add weight data if available for the same date
            date_key = journal_entry.date.date()
            if date_key in weight_by_date:
                weight_entry = weight_by_date[date_key]
                entry_data["weight"] = weight_entry.weight
                # Get weight unit from user profile (would need to be passed or fetched)
            
            result.append(entry_data)
        
        return result

    def get_journal_statistics(self, user_id: int, days: int = 30) -> dict:
        """Get statistics for journal entries over the last N days"""
        end_date = datetime.now()
        start_date = end_date - timedelta(days=days)
        
        entries = self.get_journal_entries(user_id, start_date, end_date)
        
        if not entries:
            return {
                "total_entries": 0,
                "average_sleep_quality": None,
                "average_energy_level": None,
                "most_common_sleep_quality": None,
                "most_common_energy_level": None
            }
        
        # Calculate statistics
        sleep_qualities = [e.sleep_quality for e in entries if e.sleep_quality is not None]
        energy_levels = [e.energy_level for e in entries if e.energy_level is not None]
        
        stats = {
            "total_entries": len(entries),
            "average_sleep_quality": sum(sleep_qualities) / len(sleep_qualities) if sleep_qualities else None,
            "average_energy_level": sum(energy_levels) / len(energy_levels) if energy_levels else None,
            "most_common_sleep_quality": max(set(sleep_qualities), key=sleep_qualities.count) if sleep_qualities else None,
            "most_common_energy_level": max(set(energy_levels), key=energy_levels.count) if energy_levels else None
        }
        
        return stats
