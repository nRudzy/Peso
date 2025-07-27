from sqlalchemy.orm import Session
from typing import Optional, List
from app.models.user import User
from app.schemas.user import UserCreate, UserUpdate, UserCreateDB
from app.core.security import get_password_hash, verify_password
from app.repositories.user_repository import UserRepository
from app.core.exceptions import UserNotFoundException, UserAlreadyExistsException


class UserService:
    def __init__(self, db: Session):
        self.db = db
        self.repository = UserRepository(db)

    def get_user_by_id(self, user_id: int) -> Optional[User]:
        """Get user by ID"""
        return self.repository.get(user_id)

    def get_user_by_email(self, email: str) -> Optional[User]:
        """Get user by email"""
        return self.repository.get_by_email(email)

    def create_user(self, user_data: UserCreate) -> User:
        """Create a new user"""
        # Check if user already exists
        if self.repository.get_by_email(user_data.email):
            raise UserAlreadyExistsException(user_data.email)
        
        # Create user data with hashed password
        user_dict = user_data.dict()
        user_dict['hashed_password'] = get_password_hash(user_data.password)
        del user_dict['password']
        
        return self.repository.create(UserCreateDB(**user_dict))

    def update_user(self, user_id: int, user_data: UserUpdate) -> User:
        """Update user information"""
        user = self.get_user_by_id(user_id)
        if not user:
            raise UserNotFoundException(user_id)
        
        return self.repository.update(user, user_data)

    def verify_password(self, user_id: int, password: str) -> bool:
        """Verify user password"""
        user = self.get_user_by_id(user_id)
        if not user:
            return False
        return verify_password(password, user.hashed_password)

    def change_password(self, user_id: int, new_password: str) -> bool:
        """Change user password"""
        return self.repository.change_password(user_id, get_password_hash(new_password))

    def verify_email(self, user_id: int) -> bool:
        """Verify user email"""
        return self.repository.verify_email(user_id)

    def deactivate_user(self, user_id: int) -> bool:
        """Deactivate user account"""
        return self.repository.deactivate_user(user_id)

    def get_users(self, skip: int = 0, limit: int = 100) -> List[User]:
        """Get paginated list of users"""
        return self.repository.get_active_users(skip, limit)

    def search_users(self, search_term: str, skip: int = 0, limit: int = 100) -> List[User]:
        """Search users by name or email"""
        return self.repository.search_users(search_term, skip, limit) 