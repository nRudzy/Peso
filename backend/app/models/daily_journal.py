from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, Text
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base


class DailyJournal(Base):
    __tablename__ = "daily_journals"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(DateTime(timezone=True), nullable=False, default=func.now())
    sleep_quality = Column(Integer, nullable=True)  # 1-5 scale
    energy_level = Column(Integer, nullable=True)   # 1-5 scale
    notes = Column(Text, nullable=True)             # Free text notes
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    user = relationship("User", back_populates="daily_journals")

    def __repr__(self):
        return f"<DailyJournal(id={self.id}, date='{self.date}', user_id={self.user_id})>"
