import pytest
from fastapi import status


def test_register_success(client):
    """Test successful user registration"""
    user_data = {
        "email": "newuser@example.com",
        "password": "newpassword123",
        "first_name": "New",
        "last_name": "User"
    }
    
    response = client.post("/api/v1/auth/register", json=user_data)
    assert response.status_code == status.HTTP_200_OK
    assert response.json()["message"] == "User registered successfully. Please check your email to verify your account."


def test_register_duplicate_email(client, test_user):
    """Test registration with duplicate email"""
    user_data = {
        "email": "test@example.com",
        "password": "newpassword123",
        "first_name": "New",
        "last_name": "User"
    }
    
    response = client.post("/api/v1/auth/register", json=user_data)
    assert response.status_code == status.HTTP_400_BAD_REQUEST
    assert "already exists" in response.json()["detail"]


def test_login_success(client, test_user):
    """Test successful login"""
    login_data = {
        "email": "test@example.com",
        "password": "testpassword123"
    }
    
    response = client.post("/api/v1/auth/login", json=login_data)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert "access_token" in data
    assert "refresh_token" in data
    assert data["token_type"] == "bearer"


def test_login_invalid_credentials(client):
    """Test login with invalid credentials"""
    login_data = {
        "email": "test@example.com",
        "password": "wrongpassword"
    }
    
    response = client.post("/api/v1/auth/login", json=login_data)
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
    assert "Invalid email or password" in response.json()["detail"]


def test_refresh_token_success(client, auth_headers):
    """Test successful token refresh"""
    # First get a refresh token
    login_data = {
        "email": "test@example.com",
        "password": "testpassword123"
    }
    login_response = client.post("/api/v1/auth/login", json=login_data)
    refresh_token = login_response.json()["refresh_token"]
    
    # Then refresh it
    refresh_data = {"refresh_token": refresh_token}
    response = client.post("/api/v1/auth/refresh", json=refresh_data)
    assert response.status_code == status.HTTP_200_OK
    data = response.json()
    assert "access_token" in data
    assert "refresh_token" in data


def test_refresh_token_invalid(client):
    """Test token refresh with invalid token"""
    refresh_data = {"refresh_token": "invalid_token"}
    response = client.post("/api/v1/auth/refresh", json=refresh_data)
    assert response.status_code == status.HTTP_401_UNAUTHORIZED
    assert "Invalid refresh token" in response.json()["detail"]


def test_forgot_password_success(client, test_user):
    """Test successful forgot password request"""
    forgot_data = {"email": "test@example.com"}
    response = client.post("/api/v1/auth/forgot-password", json=forgot_data)
    assert response.status_code == status.HTTP_200_OK
    assert "password reset link has been sent" in response.json()["message"]


def test_forgot_password_nonexistent_email(client):
    """Test forgot password with non-existent email"""
    forgot_data = {"email": "nonexistent@example.com"}
    response = client.post("/api/v1/auth/forgot-password", json=forgot_data)
    assert response.status_code == status.HTTP_200_OK
    # Should not reveal if email exists or not
    assert "password reset link has been sent" in response.json()["message"] 