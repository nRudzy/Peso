from typing import Optional, List
from sqlalchemy.orm import Session
from sqlalchemy import and_, desc
from datetime import datetime
from app.repositories.base import BaseRepository
from app.models.weight_entry import WeightEntry
from app.schemas.weight_entry import WeightEntryCreate, WeightEntryUpdate, WeightEntryCreateDB


class WeightEntryRepository(BaseRepository[WeightEntry, WeightEntryCreateDB, WeightEntryUpdate]):
    """Weight entry repository with specific weight operations"""
    
    def __init__(self, db: Session):
        super().__init__(WeightEntry, db)

    def get_by_user_id(self, user_id: int, skip: int = 0, limit: int = 100) -> List[WeightEntry]:
        """Get weight entries for a specific user"""
        return self.db.query(WeightEntry).filter(
            WeightEntry.user_id == user_id
        ).order_by(desc(WeightEntry.date)).offset(skip).limit(limit).all()

    def get_by_date_range(
        self, 
        user_id: int, 
        start_date: datetime, 
        end_date: datetime,
        skip: int = 0, 
        limit: int = 100
    ) -> List[WeightEntry]:
        """Get weight entries within a date range for a user"""
        return self.db.query(WeightEntry).filter(
            and_(
                WeightEntry.user_id == user_id,
                WeightEntry.date >= start_date,
                WeightEntry.date <= end_date
            )
        ).order_by(desc(WeightEntry.date)).offset(skip).limit(limit).all()

    def get_latest_by_user(self, user_id: int) -> Optional[WeightEntry]:
        """Get the most recent weight entry for a user"""
        return self.db.query(WeightEntry).filter(
            WeightEntry.user_id == user_id
        ).order_by(desc(WeightEntry.date)).first()

    def get_by_user_and_id(self, user_id: int, entry_id: int) -> Optional[WeightEntry]:
        """Get a specific weight entry for a user"""
        return self.db.query(WeightEntry).filter(
            and_(
                WeightEntry.user_id == user_id,
                WeightEntry.id == entry_id
            )
        ).first()

    def delete_by_user_and_id(self, user_id: int, entry_id: int) -> bool:
        """Delete a specific weight entry for a user"""
        entry = self.get_by_user_and_id(user_id, entry_id)
        if entry:
            self.db.delete(entry)
            self.db.commit()
            return True
        return False

    def count_by_user(self, user_id: int) -> int:
        """Count weight entries for a user"""
        return self.db.query(WeightEntry).filter(
            WeightEntry.user_id == user_id
        ).count() 