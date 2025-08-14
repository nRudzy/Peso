import pytest
from fastapi import status
from app.tests.factories import UserFactory, UnverifiedUserFactory, InactiveUserFactory
from app.schemas.user import UserCreate, UserUpdate


class TestUserEndpoints:
    """Test user-related endpoints"""

    def test_get_current_user_profile(self, client, auth_headers):
        """Test getting current user profile"""
        response = client.get("/api/v1/users/me", headers=auth_headers)
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert "data" in data
        assert data["data"]["email"] == "test@example.com"

    def test_get_current_user_profile_unauthorized(self, client):
        """Test getting current user profile without authentication"""
        response = client.get("/api/v1/users/me")
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

    def test_update_current_user_profile(self, client, auth_headers):
        """Test updating current user profile"""
        update_data = {"first_name": "Updated", "last_name": "Name", "age": 30}
        response = client.put(
            "/api/v1/users/me", json=update_data, headers=auth_headers
        )
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert "data" in data
        assert data["data"]["first_name"] == "Updated"

    def test_change_password_success(self, client, auth_headers):
        """Test successful password change"""
        password_data = {
            "current_password": "testpassword123",
            "new_password": "newpassword123",
        }
        response = client.post(
            "/api/v1/users/me/change-password", json=password_data, headers=auth_headers
        )
        assert response.status_code == status.HTTP_200_OK
        assert response.json()["message"] == "Password changed successfully"

    def test_change_password_wrong_current(self, client, auth_headers):
        """Test password change with wrong current password"""
        password_data = {
            "current_password": "wrongpassword",
            "new_password": "newpassword123",
        }
        response = client.post(
            "/api/v1/users/me/change-password", json=password_data, headers=auth_headers
        )
        assert response.status_code == status.HTTP_400_BAD_REQUEST

    def test_deactivate_account(self, client, auth_headers):
        """Test account deactivation"""
        response = client.delete("/api/v1/users/me", headers=auth_headers)
        assert response.status_code == status.HTTP_200_OK
        assert response.json()["message"] == "Account deactivated successfully"

    def test_get_users_list(self, client, db_session):
        """Test getting users list"""
        # Create some test users
        UserFactory.create_batch(3)

        response = client.get("/api/v1/users")
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert "data" in data
        assert "metadata" in data
        assert len(data["data"]) > 0

    def test_get_users_with_pagination(self, client, db_session):
        """Test users list with pagination"""
        # Create more users than default page size
        UserFactory.create_batch(25)

        response = client.get("/api/v1/users?page=1&limit=10")
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert len(data["data"]) <= 10
        assert data["metadata"]["page"] == 1
        assert data["metadata"]["limit"] == 10

    def test_search_users(self, client, db_session):
        """Test user search functionality"""
        # Create users with specific names
        UserFactory(first_name="John", last_name="Doe")
        UserFactory(first_name="Jane", last_name="Smith")

        response = client.get("/api/v1/users?search=John")
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert len(data["data"]) > 0
        # Check that returned users contain "John"
        assert any("John" in user["first_name"] for user in data["data"])

    def test_get_user_profile_public(self, client, db_session):
        """Test getting public user profile"""
        user = UserFactory(profile_visibility=True)

        response = client.get(f"/api/v1/users/{user.id}")
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert "data" in data
        assert data["data"]["id"] == user.id

    def test_get_user_profile_private(self, client, db_session):
        """Test getting private user profile"""
        user = UserFactory(profile_visibility=False)

        response = client.get(f"/api/v1/users/{user.id}")
        assert response.status_code == status.HTTP_404_NOT_FOUND

    def test_get_nonexistent_user(self, client):
        """Test getting non-existent user"""
        response = client.get("/api/v1/users/99999")
        assert response.status_code == status.HTTP_404_NOT_FOUND


class TestUserService:
    """Test user service methods"""

    def test_create_user_success(self, db_session):
        """Test successful user creation"""
        from app.services.user_service import UserService
        from app.schemas.user import UserCreate

        service = UserService(db_session)
        user_data = UserCreate(
            email="newuser@example.com",
            password="password123",
            first_name="New",
            last_name="User",
        )

        user = service.create_user(user_data)
        assert user.email == "newuser@example.com"
        assert user.first_name == "New"
        assert user.last_name == "User"

    def test_create_user_duplicate_email(self, db_session):
        """Test user creation with duplicate email"""
        from app.services.user_service import UserService
        from app.schemas.user import UserCreate
        from app.core.exceptions import UserAlreadyExistsException

        service = UserService(db_session)
        user_data = UserCreate(
            email="duplicate@example.com",
            password="password123",
            first_name="First",
            last_name="User",
        )

        # Create first user
        service.create_user(user_data)

        # Try to create second user with same email
        with pytest.raises(UserAlreadyExistsException):
            service.create_user(user_data)

    def test_get_user_by_email(self, db_session):
        """Test getting user by email"""
        from app.services.user_service import UserService

        service = UserService(db_session)
        user = UserFactory()
        db_session.add(user)
        db_session.commit()

        found_user = service.get_user_by_email(user.email)
        assert found_user is not None
        assert found_user.email == user.email

    def test_update_user(self, db_session):
        """Test user update"""
        from app.services.user_service import UserService
        from app.schemas.user import UserUpdate

        service = UserService(db_session)
        user = UserFactory()
        db_session.add(user)
        db_session.commit()

        update_data = UserUpdate(first_name="Updated", age=25)
        updated_user = service.update_user(user.id, update_data)

        assert updated_user.first_name == "Updated"
        assert updated_user.age == 25
