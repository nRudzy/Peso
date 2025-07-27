from sqlalchemy.orm import Session
from typing import Optional, List
from datetime import datetime, timedelta
from app.models.weight_entry import WeightEntry
from app.schemas.weight_entry import WeightEntryCreate, WeightEntryUpdate
from app.repositories.weight_entry_repository import WeightEntryRepository
from app.core.exceptions import WeightEntryNotFoundException


class WeightEntryService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = WeightEntryRepository(db)

    def get_weight_entry_by_id(self, entry_id: int, user_id: int) -> Optional[WeightEntry]:
        """Get weight entry by ID for specific user"""
        return self.repository.get_by_user_and_id(user_id, entry_id)

    def create_weight_entry(self, user_id: int, entry_data: WeightEntryCreate) -> WeightEntry:
        """Create a new weight entry"""
        entry_dict = entry_data.dict()
        entry_dict['user_id'] = user_id
        return self.repository.create(WeightEntryCreate(**entry_dict))

    def update_weight_entry(self, entry_id: int, user_id: int, entry_data: WeightEntryUpdate) -> WeightEntry:
        """Update weight entry"""
        entry = self.get_weight_entry_by_id(entry_id, user_id)
        if not entry:
            raise WeightEntryNotFoundException(entry_id)
        
        return self.repository.update(entry, entry_data)

    def delete_weight_entry(self, entry_id: int, user_id: int) -> bool:
        """Delete weight entry"""
        return self.repository.delete_by_user_and_id(user_id, entry_id)

    def get_user_weight_entries(self, user_id: int, skip: int = 0, limit: int = 100) -> List[WeightEntry]:
        """Get paginated weight entries for a user"""
        return self.repository.get_by_user_id(user_id, skip, limit)

    def get_weight_entries_by_date_range(self, user_id: int, start_date: datetime, end_date: datetime, skip: int = 0, limit: int = 100) -> List[WeightEntry]:
        """Get weight entries within a date range"""
        return self.repository.get_by_date_range(user_id, start_date, end_date, skip, limit)

    def get_latest_weight_entry(self, user_id: int) -> Optional[WeightEntry]:
        """Get the most recent weight entry for a user"""
        return self.repository.get_latest_by_user(user_id)

    def get_weight_progress(self, user_id: int, days: int = 30) -> dict:
        """Get weight progress over a period"""
        end_date = datetime.utcnow()
        start_date = end_date - timedelta(days=days)
        
        entries = self.get_weight_entries_by_date_range(user_id, start_date, end_date, skip=0, limit=1000)
        
        if not entries:
            return {
                "total_entries": 0,
                "average_weight": 0,
                "weight_change": 0,
                "entries": []
            }

        weights = [entry.weight for entry in entries]
        average_weight = sum(weights) / len(weights)
        
        # Calculate weight change (first entry vs last entry in period)
        sorted_entries = sorted(entries, key=lambda x: x.date)
        weight_change = sorted_entries[-1].weight - sorted_entries[0].weight if len(sorted_entries) > 1 else 0

        return {
            "total_entries": len(entries),
            "average_weight": round(average_weight, 2),
            "weight_change": round(weight_change, 2),
            "entries": sorted_entries
        }

    def get_weight_statistics(self, user_id: int) -> dict:
        """Get weight statistics for a user"""
        entries = self.get_user_weight_entries(user_id, skip=0, limit=1000)
        
        if not entries:
            return {
                "total_entries": 0,
                "current_weight": None,
                "initial_weight": None,
                "min_weight": None,
                "max_weight": None,
                "average_weight": None
            }

        weights = [entry.weight for entry in entries]
        
        return {
            "total_entries": len(entries),
            "current_weight": entries[0].weight if entries else None,
            "initial_weight": entries[-1].weight if entries else None,
            "min_weight": min(weights),
            "max_weight": max(weights),
            "average_weight": round(sum(weights) / len(weights), 2)
        } 