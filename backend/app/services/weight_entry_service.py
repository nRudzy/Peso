from sqlalchemy.orm import Session
from typing import Optional, List
from datetime import datetime, timedelta
from app.models.weight_entry import WeightEntry
from app.schemas.weight_entry import (
    WeightEntryCreate,
    WeightEntryUpdate,
    WeightEntryCreateDB,
)
from app.repositories.weight_entry_repository import WeightEntryRepository
from app.core.exceptions import WeightEntryNotFoundException


class WeightEntryService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = WeightEntryRepository(db)

    def get_weight_entry_by_id(
        self, entry_id: int, user_id: int
    ) -> Optional[WeightEntry]:
        """Get weight entry by ID for specific user"""
        return self.repository.get_by_user_and_id(user_id, entry_id)

    def create_weight_entry(
        self, user_id: int, entry_data: WeightEntryCreate
    ) -> WeightEntry:
        """Create a new weight entry"""
        entry_dict = entry_data.dict()
        entry_dict["user_id"] = user_id
        return self.repository.create(WeightEntryCreateDB(**entry_dict))

    def update_weight_entry(
        self, entry_id: int, user_id: int, entry_data: WeightEntryUpdate
    ) -> WeightEntry:
        """Update weight entry"""
        entry = self.get_weight_entry_by_id(entry_id, user_id)
        if not entry:
            raise WeightEntryNotFoundException(entry_id)

        return self.repository.update(entry, entry_data)

    def delete_weight_entry(self, entry_id: int, user_id: int) -> bool:
        """Delete weight entry"""
        return self.repository.delete_by_user_and_id(user_id, entry_id)

    def get_user_weight_entries(
        self, user_id: int, skip: int = 0, limit: int = 100
    ) -> List[WeightEntry]:
        """Get paginated weight entries for a user"""
        return self.repository.get_by_user_id(user_id, skip, limit)

    def get_weight_entries_by_date_range(
        self,
        user_id: int,
        start_date: datetime,
        end_date: datetime,
        skip: int = 0,
        limit: int = 100,
    ) -> List[WeightEntry]:
        """Get weight entries within a date range"""
        return self.repository.get_by_date_range(
            user_id, start_date, end_date, skip, limit
        )

    def get_latest_weight_entry(self, user_id: int) -> Optional[WeightEntry]:
        """Get the most recent weight entry for a user"""
        return self.repository.get_latest_by_user(user_id)

    def get_weight_progress(self, user_id: int, days: int = 30) -> dict:
        """Get weight progress over a period"""
        end_date = datetime.utcnow()
        start_date = end_date - timedelta(days=days)

        entries = self.get_weight_entries_by_date_range(
            user_id, start_date, end_date, skip=0, limit=1000
        )

        if not entries:
            return {
                "total_entries": 0,
                "average_weight": 0,
                "weight_change": 0,
                "entries": [],
            }

        weights = [entry.weight for entry in entries]
        average_weight = sum(weights) / len(weights)

        # Calculate weight change (first entry vs last entry in period)
        sorted_entries = sorted(entries, key=lambda x: x.date)
        weight_change = (
            sorted_entries[-1].weight - sorted_entries[0].weight
            if len(sorted_entries) > 1
            else 0
        )

        return {
            "total_entries": len(entries),
            "average_weight": round(average_weight, 2),
            "weight_change": round(weight_change, 2),
            "entries": sorted_entries,
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
                "average_weight": None,
                "goal_progression_percentage": None,
                "weight_to_goal": None,
            }

        weights = [entry.weight for entry in entries]
        current_weight = entries[0].weight if entries else None
        initial_weight = entries[-1].weight if entries else None

        # Get user's target weight from user profile
        from app.models.user import User
        user = self.db.query(User).filter(User.id == user_id).first()
        target_weight = user.target_weight if user else None

        # Calculate goal progression
        goal_progression_percentage = None
        weight_to_goal = None
        
        if target_weight and current_weight and initial_weight:
            total_weight_to_lose = abs(initial_weight - target_weight)
            current_progress = abs(current_weight - target_weight)
            
            if total_weight_to_lose > 0:
                goal_progression_percentage = min(100, max(0, 
                    ((total_weight_to_lose - current_progress) / total_weight_to_lose) * 100
                ))
            
            weight_to_goal = current_weight - target_weight

        return {
            "total_entries": len(entries),
            "current_weight": current_weight,
            "initial_weight": initial_weight,
            "min_weight": min(weights),
            "max_weight": max(weights),
            "average_weight": round(sum(weights) / len(weights), 2),
            "goal_progression_percentage": round(goal_progression_percentage, 1) if goal_progression_percentage is not None else None,
            "weight_to_goal": round(weight_to_goal, 1) if weight_to_goal is not None else None,
        }

    def get_weight_statistics_for_period(self, user_id: int, start_date: datetime, end_date: datetime) -> dict:
        """Get weight statistics for a specific period"""
        entries = self.get_weight_entries_by_date_range(
            user_id, start_date, end_date, skip=0, limit=1000
        )

        if not entries:
            return {
                "total_entries": 0,
                "current_weight": None,
                "average_weight": None,
                "weight_change": 0,
            }

        weights = [entry.weight for entry in entries]
        sorted_entries = sorted(entries, key=lambda x: x.date)
        
        # Calculate weight change (first entry vs last entry in period)
        weight_change = (
            sorted_entries[-1].weight - sorted_entries[0].weight
            if len(sorted_entries) > 1
            else 0
        )

        return {
            "total_entries": len(entries),
            "current_weight": sorted_entries[-1].weight if sorted_entries else None,
            "average_weight": round(sum(weights) / len(weights), 2),
            "weight_change": round(weight_change, 2),
        }
