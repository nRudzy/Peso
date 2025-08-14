import pytest
from sqlalchemy.orm import Session
from app.models.user import User
from app.models.weight_entry import WeightEntry
from app.tests.factories import UserFactory, WeightEntryFactory


class TestDatabaseCleanup:
    """Test that database cleanup works correctly between tests"""

    def test_cleanup_between_tests(self, db_session: Session):
        """Test that data is cleaned between tests"""
        # Create some test data
        user = UserFactory()
        weight_entry = WeightEntryFactory(user=user)

        # Verify data exists
        assert db_session.query(User).count() == 1
        assert db_session.query(WeightEntry).count() == 1

        # This test should end here, and cleanup should happen automatically

    def test_cleanup_verification(self, db_session: Session):
        """Test that previous test data is cleaned up"""
        # This test should start with a clean database
        user_count = db_session.query(User).count()
        weight_entry_count = db_session.query(WeightEntry).count()

        # Should be clean (0 records) if cleanup works
        assert user_count == 0, f"Expected 0 users, got {user_count}"
        assert (
            weight_entry_count == 0
        ), f"Expected 0 weight entries, got {weight_entry_count}"

    def test_multiple_cleanups(self, db_session: Session):
        """Test multiple cleanups work correctly"""
        # Create data
        users = UserFactory.create_batch(3)
        for user in users:
            WeightEntryFactory.create_batch(2, user=user)

        # Verify data exists
        assert db_session.query(User).count() == 3
        assert db_session.query(WeightEntry).count() == 6

        # Test should end here, cleanup should happen

    def test_cleanup_after_multiple_creations(self, db_session: Session):
        """Test cleanup after multiple data creations"""
        # This test should start clean
        user_count = db_session.query(User).count()
        weight_entry_count = db_session.query(WeightEntry).count()

        assert user_count == 0, f"Expected 0 users, got {user_count}"
        assert (
            weight_entry_count == 0
        ), f"Expected 0 weight entries, got {weight_entry_count}"

        # Create some new data
        user = UserFactory()
        WeightEntryFactory.create_batch(3, user=user)

        # Verify new data exists
        assert db_session.query(User).count() == 1
        assert db_session.query(WeightEntry).count() == 3


class TestTransactionIsolation:
    """Test that transactions are properly isolated"""

    def test_transaction_isolation_1(self, db_session: Session):
        """First test in transaction isolation series"""
        user = UserFactory()
        assert db_session.query(User).count() == 1
        # Transaction should be rolled back after this test

    def test_transaction_isolation_2(self, db_session: Session):
        """Second test in transaction isolation series"""
        # Should start with clean database
        user_count = db_session.query(User).count()
        assert user_count == 0, f"Expected 0 users, got {user_count}"

        # Create new data
        user = UserFactory()
        assert db_session.query(User).count() == 1
        # Transaction should be rolled back after this test

    def test_transaction_isolation_3(self, db_session: Session):
        """Third test in transaction isolation series"""
        # Should start with clean database
        user_count = db_session.query(User).count()
        assert user_count == 0, f"Expected 0 users, got {user_count}"

        # Create different data
        users = UserFactory.create_batch(2)
        assert db_session.query(User).count() == 2
        # Transaction should be rolled back after this test
