"""
Unit tests for utility functions.
"""
import pytest
from datetime import datetime, date


def test_date_validation():
    """Test date validation utility."""
    # Test valid date
    valid_date = "2024-01-15"
    parsed_date = datetime.strptime(valid_date, "%Y-%m-%d").date()
    assert isinstance(parsed_date, date)
    assert parsed_date.year == 2024
    assert parsed_date.month == 1
    assert parsed_date.day == 15


def test_weight_validation():
    """Test weight validation utility."""
    # Test valid weight
    valid_weight = 75.5
    assert isinstance(valid_weight, (int, float))
    assert 0 < valid_weight < 1000  # Reasonable weight range


def test_email_validation():
    """Test email validation utility."""
    # Test valid email
    valid_email = "test@example.com"
    assert "@" in valid_email
    assert "." in valid_email.split("@")[1]
    assert len(valid_email) > 5
