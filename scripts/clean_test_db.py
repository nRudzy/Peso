#!/usr/bin/env python3
"""
Script to clean test database manually
Useful for development when tests leave data behind
"""

import sys
import os
from pathlib import Path

# Add the app directory to the Python path
sys.path.append(str(Path(__file__).parent.parent))

from sqlalchemy import create_engine
from app.core.database import Base


def clean_test_database():
    """Clean the test database manually"""
    # Use the same test database URL as in conftest.py
    SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"
    
    engine = create_engine(
        SQLALCHEMY_DATABASE_URL,
        connect_args={"check_same_thread": False},
    )
    
    print("🧹 Cleaning test database...")
    
    with engine.begin() as conn:
        # Disable foreign key constraints for SQLite
        conn.execute("PRAGMA foreign_keys=OFF")
        
        # Get all table names
        tables = Base.metadata.tables.keys()
        
        # Delete all data from all tables
        for table_name in tables:
            conn.execute(f"DELETE FROM {table_name}")
            print(f"  ✅ Cleaned table: {table_name}")
        
        # Reset auto-increment counters
        for table_name in tables:
            conn.execute(f"DELETE FROM sqlite_sequence WHERE name='{table_name}'")
        
        # Re-enable foreign key constraints
        conn.execute("PRAGMA foreign_keys=ON")
    
    print("✅ Test database cleaned successfully!")


if __name__ == "__main__":
    clean_test_database() 