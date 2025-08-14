import pytest
from fastapi import status
from datetime import datetime, timedelta
from app.tests.factories import UserFactory, WeightEntryFactory


class TestIntegrationWorkflow:
    """Test complete user workflows"""

    def test_complete_user_registration_workflow(self, client, db_session):
        """Test complete user registration and profile setup"""
        # 1. Register new user
        register_data = {
            "email": "newuser@example.com",
            "password": "securepassword123",
            "first_name": "John",
            "last_name": "Doe",
        }

        response = client.post("/api/v1/auth/register", json=register_data)
        assert response.status_code == status.HTTP_200_OK

        # 2. Login
        login_data = {"email": "newuser@example.com", "password": "securepassword123"}

        response = client.post("/api/v1/auth/login", json=login_data)
        assert response.status_code == status.HTTP_200_OK
        tokens = response.json()
        assert "access_token" in tokens

        headers = {"Authorization": f"Bearer {tokens['access_token']}"}

        # 3. Update profile
        profile_data = {
            "age": 30,
            "height": 175.5,
            "initial_weight": 80.0,
            "target_weight": 70.0,
        }

        response = client.put("/api/v1/users/me", json=profile_data, headers=headers)
        assert response.status_code == status.HTTP_200_OK

        # 4. Add weight entries
        weight_data = {
            "weight": 80.0,
            "date": datetime.now().isoformat(),
            "comment": "Initial weight",
        }

        response = client.post(
            "/api/v1/weight-entries", json=weight_data, headers=headers
        )
        assert response.status_code == status.HTTP_200_OK

        # 5. Get weight statistics
        response = client.get("/api/v1/weight-entries/statistics", headers=headers)
        assert response.status_code == status.HTTP_200_OK
        stats = response.json()
        assert "data" in stats
        assert stats["data"]["total_entries"] == 1

    def test_weight_tracking_workflow(self, client, auth_headers):
        """Test complete weight tracking workflow"""
        # 1. Add multiple weight entries
        weights = [80.0, 79.5, 79.0, 78.5, 78.0]
        dates = [
            (datetime.now() - timedelta(days=i)).isoformat()
            for i in range(len(weights))
        ]

        for weight, date in zip(weights, dates):
            weight_data = {
                "weight": weight,
                "date": date,
                "comment": f"Weight entry {weight}kg",
            }
            response = client.post(
                "/api/v1/weight-entries", json=weight_data, headers=auth_headers
            )
            assert response.status_code == status.HTTP_200_OK

        # 2. Get weight entries with pagination
        response = client.get(
            "/api/v1/weight-entries?page=1&limit=3", headers=auth_headers
        )
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert len(data["data"]) <= 3
        assert "metadata" in data

        # 3. Get latest weight entry
        response = client.get("/api/v1/weight-entries/latest", headers=auth_headers)
        assert response.status_code == status.HTTP_200_OK
        latest = response.json()
        assert latest["data"]["weight"] == 78.0

        # 4. Get weight progress
        response = client.get(
            "/api/v1/weight-entries/progress/30", headers=auth_headers
        )
        assert response.status_code == status.HTTP_200_OK
        progress = response.json()
        assert "data" in progress
        assert progress["data"]["total_entries"] == 5

        # 5. Get weight statistics
        response = client.get("/api/v1/weight-entries/statistics", headers=auth_headers)
        assert response.status_code == status.HTTP_200_OK
        stats = response.json()
        assert stats["data"]["total_entries"] == 5
        assert stats["data"]["min_weight"] == 78.0
        assert stats["data"]["max_weight"] == 80.0

    def test_user_search_and_discovery(self, client, db_session):
        """Test user search and discovery features"""
        # Create users with different profiles
        UserFactory(first_name="John", last_name="Doe", profile_visibility=True)
        UserFactory(first_name="Jane", last_name="Smith", profile_visibility=True)
        UserFactory(first_name="Bob", last_name="Johnson", profile_visibility=False)

        # Search for public users
        response = client.get("/api/v1/users?search=John")
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert len(data["data"]) > 0

        # Verify private users are not returned
        response = client.get("/api/v1/users?search=Bob")
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        # Bob should not be in results due to private profile
        assert not any("Bob" in user["first_name"] for user in data["data"])

    def test_error_handling_workflow(self, client, auth_headers):
        """Test error handling in various scenarios"""
        # 1. Try to access non-existent resource
        response = client.get("/api/v1/weight-entries/99999", headers=auth_headers)
        assert response.status_code == status.HTTP_404_NOT_FOUND

        # 2. Try to update non-existent resource
        update_data = {"weight": 75.0}
        response = client.put(
            "/api/v1/weight-entries/99999", json=update_data, headers=auth_headers
        )
        assert response.status_code == status.HTTP_404_NOT_FOUND

        # 3. Try to delete non-existent resource
        response = client.delete("/api/v1/weight-entries/99999", headers=auth_headers)
        assert response.status_code == status.HTTP_404_NOT_FOUND

        # 4. Try to access without authentication
        response = client.get("/api/v1/users/me")
        assert response.status_code == status.HTTP_401_UNAUTHORIZED

        # 5. Try to create weight entry with invalid data
        invalid_data = {"weight": -10.0}  # Negative weight
        response = client.post(
            "/api/v1/weight-entries", json=invalid_data, headers=auth_headers
        )
        assert response.status_code == status.HTTP_422_UNPROCESSABLE_ENTITY

    def test_pagination_workflow(self, client, db_session, auth_headers):
        """Test pagination across different endpoints"""
        # Create many weight entries
        for i in range(25):
            weight_data = {
                "weight": 80.0 - i * 0.1,
                "date": (datetime.now() - timedelta(days=i)).isoformat(),
                "comment": f"Entry {i+1}",
            }
            response = client.post(
                "/api/v1/weight-entries", json=weight_data, headers=auth_headers
            )
            assert response.status_code == status.HTTP_200_OK

        # Test pagination
        response = client.get(
            "/api/v1/weight-entries?page=1&limit=10", headers=auth_headers
        )
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert len(data["data"]) == 10
        assert data["metadata"]["page"] == 1
        assert data["metadata"]["limit"] == 10
        assert data["metadata"]["total"] >= 25

        # Test second page
        response = client.get(
            "/api/v1/weight-entries?page=2&limit=10", headers=auth_headers
        )
        assert response.status_code == status.HTTP_200_OK
        data = response.json()
        assert len(data["data"]) == 10
        assert data["metadata"]["page"] == 2
