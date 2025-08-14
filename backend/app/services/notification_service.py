from sqlalchemy.orm import Session
from sqlalchemy import and_, func
from datetime import datetime, timedelta
from typing import List
from app.models.user import User
from app.models.weight_entry import WeightEntry
from app.services.daily_journal_service import DailyJournalService
from app.services.email_service import EmailService
from app.services.weight_entry_service import WeightEntryService
import logging

logger = logging.getLogger(__name__)


class NotificationService:
    def __init__(self, db: Session):
        self.db = db
        self.email_service = EmailService()
        self.journal_service = DailyJournalService(db)
        self.weight_service = WeightEntryService(db)

    async def send_weekly_progress_notifications(self) -> dict:
        """Send weekly progress notifications to all active users"""
        try:
            # Get all active users
            active_users = self.db.query(User).filter(
                and_(
                    User.is_active == True,
                    User.email_verified == True
                )
            ).all()

            results = {
                "total_users": len(active_users),
                "emails_sent": 0,
                "emails_failed": 0,
                "errors": []
            }

            for user in active_users:
                try:
                    success = await self._send_weekly_progress_to_user(user)
                    if success:
                        results["emails_sent"] += 1
                    else:
                        results["emails_failed"] += 1
                except Exception as e:
                    results["emails_failed"] += 1
                    results["errors"].append(f"User {user.id}: {str(e)}")
                    logger.error(f"Failed to send weekly progress to user {user.id}: {str(e)}")

            logger.info(f"Weekly notifications completed: {results}")
            return results

        except Exception as e:
            logger.error(f"Failed to send weekly notifications: {str(e)}")
            raise

    async def _send_weekly_progress_to_user(self, user: User) -> bool:
        """Send weekly progress notification to a specific user"""
        try:
            # Calculate date range for the last week
            end_date = datetime.now()
            start_date = end_date - timedelta(days=7)

            # Get weight statistics for the week
            weight_stats = self.weight_service.get_weight_statistics_for_period(
                user.id, start_date, end_date
            )

            # Get journal statistics for the week
            journal_stats = self.journal_service.get_journal_statistics(user.id, 7)

            # Get current weight and target weight
            current_weight = weight_stats.get("current_weight", 0)
            target_weight = user.target_weight or 0

            # Calculate weight change for the week
            weight_change = weight_stats.get("weight_change", 0)

            # Send email
            success = await self.email_service.send_weekly_progress_email(
                email=user.email,
                first_name=user.first_name or "Utilisateur",
                weight_stats=weight_stats,
                journal_stats=journal_stats,
                weight_change=weight_change,
                target_weight=target_weight,
                current_weight=current_weight
            )

            return success

        except Exception as e:
            logger.error(f"Failed to send weekly progress to user {user.id}: {str(e)}")
            return False

    def get_users_due_for_weekly_notification(self) -> List[User]:
        """Get users who should receive weekly notifications"""
        # This could be enhanced to track when users last received notifications
        # For now, we'll send to all active users
        return self.db.query(User).filter(
            and_(
                User.is_active == True,
                User.email_verified == True
            )
        ).all()

    async def send_test_weekly_notification(self, user_id: int) -> bool:
        """Send a test weekly notification to a specific user (for testing)"""
        user = self.db.query(User).filter(User.id == user_id).first()
        if not user:
            raise ValueError(f"User {user_id} not found")

        return await self._send_weekly_progress_to_user(user)
