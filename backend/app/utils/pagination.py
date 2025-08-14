from sqlalchemy.orm import Query
from typing import List, Tuple
from app.core.config import settings


def paginate_query(query: Query, skip: int = 0, limit: int = None) -> List:
    """Paginate a SQLAlchemy query"""
    if limit is None:
        limit = settings.DEFAULT_PAGE_SIZE
    
    # Ensure limit doesn't exceed maximum
    limit = min(limit, settings.MAX_PAGE_SIZE)
    
    return query.offset(skip).limit(limit).all()


def get_pagination_metadata(total: int, page: int, limit: int) -> dict:
    """Get pagination metadata"""
    total_pages = (total + limit - 1) // limit if total > 0 else 0
    
    return {
        "page": page,
        "limit": limit,
        "total": total,
        "total_pages": total_pages
    }


def calculate_skip(page: int, limit: int) -> int:
    """Calculate skip value for pagination"""
    return (page - 1) * limit


def validate_pagination_params(page: int, limit: int) -> Tuple[int, int]:
    """Validate and normalize pagination parameters"""
    # Ensure page is at least 1
    page = max(1, page)
    
    # Ensure limit is within bounds
    limit = max(1, min(limit, settings.MAX_PAGE_SIZE))
    
    return page, limit 