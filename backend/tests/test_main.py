"""
Tests for the main application entry point.
"""
import pytest
from fastapi.testclient import TestClient


def test_app_health_check(client: TestClient):
    """Test that the health check endpoint works."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "healthy"}


def test_app_docs_available(client: TestClient):
    """Test that the API documentation is available."""
    response = client.get("/docs")
    assert response.status_code == 200


def test_app_openapi_schema(client: TestClient):
    """Test that the OpenAPI schema is available."""
    response = client.get("/openapi.json")
    assert response.status_code == 200
    assert "openapi" in response.json()


def test_app_root_redirect(client: TestClient):
    """Test that the root endpoint redirects to docs."""
    response = client.get("/", follow_redirects=False)
    assert response.status_code in [200, 307, 308]  # OK or redirect
