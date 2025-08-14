from typing import Optional, List
from sqlalchemy.orm import Session
from sqlalchemy import and_
from app.repositories.base import BaseRepository
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate, UserCreateDB


class UserRepository(BaseRepository[User, UserCreateDB, UserUpdate]):
    """User repository with specific user operations"""
    
    def __init__(self, db: Session):
        super().__init__(User, db)

    def get_by_email(self, email: str) -> Optional[User]:
        """Get user by email"""
        return self.db.query(User).filter(User.email == email).first()

    def get_active_users(self, skip: int = 0, limit: int = 100) -> List[User]:
        """Get only active users"""
        return self.db.query(User).filter(
            User.is_active == True
        ).offset(skip).limit(limit).all()

    def search_users(
        self, 
        search_term: str, 
        skip: int = 0, 
        limit: int = 100
    ) -> List[User]:
        """Search users by name or email"""
        return self.db.query(User).filter(
            and_(
                User.is_active == True,
                User.profile_visibility == True,
                (User.first_name.ilike(f"%{search_term}%") |
                 User.last_name.ilike(f"%{search_term}%") |
                 User.email.ilike(f"%{search_term}%"))
            )
        ).offset(skip).limit(limit).all()

    def verify_email(self, user_id: int) -> bool:
        """Verify user email"""
        user = self.get(user_id)
        if user:
            user.email_verified = True
            self.db.commit()
            return True
        return False

    def deactivate_user(self, user_id: int) -> bool:
        """Deactivate user account"""
        user = self.get(user_id)
        if user:
            user.is_active = False
            self.db.commit()
            return True
        return False

    def change_password(self, user_id: int, hashed_password: str) -> bool:
        """Change user password"""
        user = self.get(user_id)
        if user:
            user.hashed_password = hashed_password
            self.db.commit()
            return True
        return False 