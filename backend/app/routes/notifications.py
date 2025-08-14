from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.dependencies import get_current_verified_user
from app.models.user import User
from app.services.notification_service import NotificationService

router = APIRouter()


@router.post("/notifications/send-weekly-progress")
async def send_weekly_progress_notifications(
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Send weekly progress notifications to all users (admin only)"""
    # For now, allow any authenticated user to trigger notifications
    # In production, you might want to restrict this to admin users only
    
    try:
        notification_service = NotificationService(db)
        results = await notification_service.send_weekly_progress_notifications()
        
        return {
            "message": "Weekly notifications sent successfully",
            "results": results
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send notifications: {str(e)}")


@router.post("/notifications/send-test-notification/{user_id}")
async def send_test_weekly_notification(
    user_id: int,
    current_user: User = Depends(get_current_verified_user),
    db: Session = Depends(get_db)
):
    """Send a test weekly notification to a specific user"""
    try:
        notification_service = NotificationService(db)
        success = await notification_service.send_test_weekly_notification(user_id)
        
        if success:
            return {"message": f"Test notification sent successfully to user {user_id}"}
        else:
            raise HTTPException(status_code=500, detail="Failed to send test notification")
            
    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send test notification: {str(e)}")
