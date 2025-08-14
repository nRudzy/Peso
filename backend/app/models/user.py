from sqlalchemy import Column, Integer, String, Boolean, Float, DateTime, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.core.database import Base
from app.core.enums import GenderEnum, WeightUnitEnum, HeightUnitEnum


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    first_name = Column(String, nullable=True)
    last_name = Column(String, nullable=True)
    avatar = Column(String, nullable=True)  # URL de l'avatar
    gender = Column(Enum(GenderEnum), nullable=True)
    age = Column(Integer, nullable=True)
    height = Column(Float, nullable=True)
    initial_weight = Column(Float, nullable=True)
    target_weight = Column(Float, nullable=True)
    weight_unit = Column(Enum(WeightUnitEnum), default=WeightUnitEnum.KG)
    height_unit = Column(Enum(HeightUnitEnum), default=HeightUnitEnum.CM)
    profile_visibility = Column(Boolean, default=True)
    email_verified = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())

    # Relationships
    weight_entries = relationship("WeightEntry", back_populates="user", cascade="all, delete-orphan")

    def __repr__(self):
        return f"<User(id={self.id}, email='{self.email}')>" 