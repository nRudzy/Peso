#!/usr/bin/env python3
"""
Script to send weekly progress notifications to all users.
This script can be run manually or scheduled with a cron job.
"""

import asyncio
import sys
import os
from datetime import datetime

# Add the backend directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.core.database import SessionLocal
from app.services.notification_service import NotificationService
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


async def send_weekly_notifications():
    """Send weekly progress notifications to all users"""
    db = SessionLocal()
    
    try:
        logger.info("Starting weekly notification process...")
        
        notification_service = NotificationService(db)
        results = await notification_service.send_weekly_progress_notifications()
        
        logger.info(f"Weekly notifications completed:")
        logger.info(f"  - Total users: {results['total_users']}")
        logger.info(f"  - Emails sent: {results['emails_sent']}")
        logger.info(f"  - Emails failed: {results['emails_failed']}")
        
        if results['errors']:
            logger.warning(f"  - Errors: {len(results['errors'])}")
            for error in results['errors']:
                logger.warning(f"    {error}")
        
        return results
        
    except Exception as e:
        logger.error(f"Failed to send weekly notifications: {str(e)}")
        raise
    finally:
        db.close()


async def send_test_notification(user_id: int):
    """Send a test notification to a specific user"""
    db = SessionLocal()
    
    try:
        logger.info(f"Sending test notification to user {user_id}...")
        
        notification_service = NotificationService(db)
        success = await notification_service.send_test_weekly_notification(user_id)
        
        if success:
            logger.info(f"Test notification sent successfully to user {user_id}")
        else:
            logger.error(f"Failed to send test notification to user {user_id}")
        
        return success
        
    except Exception as e:
        logger.error(f"Failed to send test notification: {str(e)}")
        raise
    finally:
        db.close()


def main():
    """Main function to handle command line arguments"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Send weekly progress notifications')
    parser.add_argument(
        '--test-user', 
        type=int, 
        help='Send test notification to specific user ID'
    )
    parser.add_argument(
        '--dry-run', 
        action='store_true', 
        help='Show what would be done without actually sending emails'
    )
    
    args = parser.parse_args()
    
    if args.test_user:
        # Send test notification to specific user
        asyncio.run(send_test_notification(args.test_user))
    else:
        # Send weekly notifications to all users
        if args.dry_run:
            logger.info("DRY RUN: Would send weekly notifications to all users")
            logger.info("Use --test-user <user_id> to send a test notification")
        else:
            asyncio.run(send_weekly_notifications())


if __name__ == "__main__":
    main()
