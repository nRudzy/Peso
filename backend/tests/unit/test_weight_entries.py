import pytest
from unittest.mock import Mock, patch
from datetime import datetime, timedelta
from fastapi.testclient import TestClient
from sqlalchemy.orm import Session
from app.main import app
from app.services.weight_entry_service import WeightEntryService
from app.schemas.weight_entry import WeightEntryCreate, WeightEntryUpdate
from app.models.weight_entry import WeightEntry
from app.core.exceptions import WeightEntryNotFoundException


class TestWeightEntryService:
    """Test cases for WeightEntryService"""
    
    def setup_method(self):
        """Setup test method"""
        self.mock_db = Mock(spec=Session)
        self.weight_service = WeightEntryService(self.mock_db)
    
    def test_create_weight_entry_success(self):
        """Test successful weight entry creation"""
        # Arrange
        entry_data = WeightEntryCreate(
            weight=70.5,
            date=datetime.utcnow(),
            comment="Morning weight"
        )
        user_id = 1
        
        mock_entry = Mock(
            id=1,
            weight=70.5,
            user_id=user_id,
            date=entry_data.date,
            comment=entry_data.comment
        )
        
        with patch.object(self.weight_service.repository, 'create', return_value=mock_entry):
            # Act
            result = self.weight_service.create_weight_entry(user_id, entry_data)
            
            # Assert
            assert result is not None
            assert result.id == 1
            assert result.weight == 70.5
            assert result.user_id == user_id
    
    def test_get_weight_entry_by_id_success(self):
        """Test successful weight entry retrieval by ID"""
        # Arrange
        entry_id = 1
        user_id = 1
        
        mock_entry = Mock(
            id=entry_id,
            weight=70.5,
            user_id=user_id,
            date=datetime.utcnow()
        )
        
        with patch.object(self.weight_service.repository, 'get_by_user_and_id', return_value=mock_entry):
            # Act
            result = self.weight_service.get_weight_entry_by_id(entry_id, user_id)
            
            # Assert
            assert result is not None
            assert result.id == entry_id
            assert result.user_id == user_id
    
    def test_get_weight_entry_by_id_not_found(self):
        """Test weight entry retrieval by ID when not found"""
        # Arrange
        entry_id = 999
        user_id = 1
        
        with patch.object(self.weight_service.repository, 'get_by_user_and_id', return_value=None):
            # Act
            result = self.weight_service.get_weight_entry_by_id(entry_id, user_id)
            
            # Assert
            assert result is None
    
    def test_update_weight_entry_success(self):
        """Test successful weight entry update"""
        # Arrange
        entry_id = 1
        user_id = 1
        update_data = WeightEntryUpdate(
            weight=71.0,
            comment="Updated weight"
        )
        
        mock_entry = Mock(
            id=entry_id,
            weight=70.5,
            user_id=user_id,
            date=datetime.utcnow()
        )
        
        with patch.object(self.weight_service, 'get_weight_entry_by_id', return_value=mock_entry):
            with patch.object(self.weight_service.repository, 'update', return_value=mock_entry):
                # Act
                result = self.weight_service.update_weight_entry(entry_id, user_id, update_data)
                
                # Assert
                assert result is not None
                assert result.id == entry_id
    
    def test_update_weight_entry_not_found(self):
        """Test weight entry update when entry not found"""
        # Arrange
        entry_id = 999
        user_id = 1
        update_data = WeightEntryUpdate(weight=71.0)
        
        with patch.object(self.weight_service, 'get_weight_entry_by_id', return_value=None):
            # Act & Assert
            with pytest.raises(WeightEntryNotFoundException):
                self.weight_service.update_weight_entry(entry_id, user_id, update_data)
    
    def test_delete_weight_entry_success(self):
        """Test successful weight entry deletion"""
        # Arrange
        entry_id = 1
        user_id = 1
        
        with patch.object(self.weight_service.repository, 'delete_by_user_and_id', return_value=True):
            # Act
            result = self.weight_service.delete_weight_entry(entry_id, user_id)
            
            # Assert
            assert result is True
    
    def test_delete_weight_entry_not_found(self):
        """Test weight entry deletion when entry not found"""
        # Arrange
        entry_id = 999
        user_id = 1
        
        with patch.object(self.weight_service.repository, 'delete_by_user_and_id', return_value=False):
            # Act
            result = self.weight_service.delete_weight_entry(entry_id, user_id)
            
            # Assert
            assert result is False
    
    def test_get_user_weight_entries_success(self):
        """Test successful retrieval of user weight entries"""
        # Arrange
        user_id = 1
        skip = 0
        limit = 10
        
        mock_entries = [
            Mock(id=1, weight=70.5, user_id=user_id, date=datetime.utcnow()),
            Mock(id=2, weight=70.2, user_id=user_id, date=datetime.utcnow() - timedelta(days=1))
        ]
        
        with patch.object(self.weight_service.repository, 'get_by_user_id', return_value=mock_entries):
            # Act
            result = self.weight_service.get_user_weight_entries(user_id, skip, limit)
            
            # Assert
            assert len(result) == 2
            assert result[0].id == 1
            assert result[1].id == 2
    
    def test_get_latest_weight_entry_success(self):
        """Test successful retrieval of latest weight entry"""
        # Arrange
        user_id = 1
        
        mock_entry = Mock(
            id=1,
            weight=70.5,
            user_id=user_id,
            date=datetime.utcnow()
        )
        
        with patch.object(self.weight_service.repository, 'get_latest_by_user', return_value=mock_entry):
            # Act
            result = self.weight_service.get_latest_weight_entry(user_id)
            
            # Assert
            assert result is not None
            assert result.id == 1
            assert result.weight == 70.5
    
    def test_get_latest_weight_entry_not_found(self):
        """Test latest weight entry retrieval when no entries exist"""
        # Arrange
        user_id = 1
        
        with patch.object(self.weight_service.repository, 'get_latest_by_user', return_value=None):
            # Act
            result = self.weight_service.get_latest_weight_entry(user_id)
            
            # Assert
            assert result is None
    
    def test_get_weight_statistics_success(self):
        """Test successful weight statistics calculation"""
        # Arrange
        user_id = 1
        
        mock_entries = [
            Mock(weight=70.5, date=datetime.utcnow()),
            Mock(weight=70.2, date=datetime.utcnow() - timedelta(days=1)),
            Mock(weight=70.8, date=datetime.utcnow() - timedelta(days=2))
        ]
        
        with patch.object(self.weight_service, 'get_user_weight_entries', return_value=mock_entries):
            # Act
            result = self.weight_service.get_weight_statistics(user_id)
            
            # Assert
            assert result['total_entries'] == 3
            assert result['current_weight'] == 70.5
            assert result['min_weight'] == 70.2
            assert result['max_weight'] == 70.8
            assert result['average_weight'] == 70.5
    
    def test_get_weight_statistics_no_entries(self):
        """Test weight statistics when no entries exist"""
        # Arrange
        user_id = 1
        
        with patch.object(self.weight_service, 'get_user_weight_entries', return_value=[]):
            # Act
            result = self.weight_service.get_weight_statistics(user_id)
            
            # Assert
            assert result['total_entries'] == 0
            assert result['current_weight'] is None
            assert result['min_weight'] is None
            assert result['max_weight'] is None
            assert result['average_weight'] is None
    
    def test_get_weight_progress_success(self):
        """Test successful weight progress calculation"""
        # Arrange
        user_id = 1
        days = 30
        
        mock_entries = [
            Mock(weight=70.5, date=datetime.utcnow()),
            Mock(weight=70.2, date=datetime.utcnow() - timedelta(days=1)),
            Mock(weight=70.8, date=datetime.utcnow() - timedelta(days=2))
        ]
        
        with patch.object(self.weight_service, 'get_weight_entries_by_date_range', return_value=mock_entries):
            # Act
            result = self.weight_service.get_weight_progress(user_id, days)
            
            # Assert
            assert result['total_entries'] == 3
            assert result['average_weight'] == 70.5
            assert result['weight_change'] == -0.3  # 70.5 - 70.8
            assert len(result['entries']) == 3
    
    def test_get_weight_progress_no_entries(self):
        """Test weight progress when no entries exist in date range"""
        # Arrange
        user_id = 1
        days = 30
        
        with patch.object(self.weight_service, 'get_weight_entries_by_date_range', return_value=[]):
            # Act
            result = self.weight_service.get_weight_progress(user_id, days)
            
            # Assert
            assert result['total_entries'] == 0
            assert result['average_weight'] == 0
            assert result['weight_change'] == 0
            assert len(result['entries']) == 0


class TestWeightEntryAPI:
    """Test cases for Weight Entry API endpoints"""
    
    def setup_method(self):
        """Setup test method"""
        self.client = TestClient(app)
    
    def test_create_weight_entry_endpoint_success(self):
        """Test successful weight entry creation endpoint"""
        # Arrange
        entry_data = {
            "weight": 70.5,
            "date": datetime.utcnow().isoformat(),
            "comment": "Morning weight"
        }
        
        mock_user = Mock(id=1, email="test@example.com", email_verified=True)
        
        with patch('app.routes.weight_entries.get_current_verified_user', return_value=mock_user):
            with patch('app.routes.weight_entries.WeightEntryService') as mock_service:
                mock_service_instance = Mock()
                mock_service_instance.create_weight_entry.return_value = Mock(
                    id=1,
                    weight=70.5,
                    user_id=1,
                    date=datetime.utcnow()
                )
                mock_service.return_value = mock_service_instance
                
                # Act
                response = self.client.post("/api/v1/weight-entries", json=entry_data)
                
                # Assert
                assert response.status_code == 200
                assert response.json()['weight'] == 70.5
    
    def test_get_weight_entries_endpoint_success(self):
        """Test successful weight entries retrieval endpoint"""
        # Arrange
        mock_user = Mock(id=1, email="test@example.com", email_verified=True)
        
        mock_entries = [
            Mock(id=1, weight=70.5, user_id=1, date=datetime.utcnow()),
            Mock(id=2, weight=70.2, user_id=1, date=datetime.utcnow() - timedelta(days=1))
        ]
        
        with patch('app.routes.weight_entries.get_current_verified_user', return_value=mock_user):
            with patch('app.routes.weight_entries.WeightEntryService') as mock_service:
                mock_service_instance = Mock()
                mock_service_instance.get_user_weight_entries.return_value = mock_entries
                mock_service.return_value = mock_service_instance
                
                # Act
                response = self.client.get("/api/v1/weight-entries")
                
                # Assert
                assert response.status_code == 200
                assert len(response.json()['data']) == 2
    
    def test_get_latest_weight_entry_endpoint_success(self):
        """Test successful latest weight entry retrieval endpoint"""
        # Arrange
        mock_user = Mock(id=1, email="test@example.com", email_verified=True)
        
        mock_entry = Mock(
            id=1,
            weight=70.5,
            user_id=1,
            date=datetime.utcnow()
        )
        
        with patch('app.routes.weight_entries.get_current_verified_user', return_value=mock_user):
            with patch('app.routes.weight_entries.WeightEntryService') as mock_service:
                mock_service_instance = Mock()
                mock_service_instance.get_latest_weight_entry.return_value = mock_entry
                mock_service.return_value = mock_service_instance
                
                # Act
                response = self.client.get("/api/v1/weight-entries/latest")
                
                # Assert
                assert response.status_code == 200
                assert response.json()['weight'] == 70.5
    
    def test_get_weight_statistics_endpoint_success(self):
        """Test successful weight statistics endpoint"""
        # Arrange
        mock_user = Mock(id=1, email="test@example.com", email_verified=True)
        
        mock_statistics = {
            "total_entries": 3,
            "current_weight": 70.5,
            "min_weight": 70.2,
            "max_weight": 70.8,
            "average_weight": 70.5
        }
        
        with patch('app.routes.weight_entries.get_current_verified_user', return_value=mock_user):
            with patch('app.routes.weight_entries.WeightEntryService') as mock_service:
                mock_service_instance = Mock()
                mock_service_instance.get_weight_statistics.return_value = mock_statistics
                mock_service.return_value = mock_service_instance
                
                # Act
                response = self.client.get("/api/v1/weight-entries/statistics")
                
                # Assert
                assert response.status_code == 200
                assert response.json()['total_entries'] == 3
                assert response.json()['current_weight'] == 70.5
    
    def test_update_weight_entry_endpoint_success(self):
        """Test successful weight entry update endpoint"""
        # Arrange
        entry_id = 1
        update_data = {
            "weight": 71.0,
            "comment": "Updated weight"
        }
        
        mock_user = Mock(id=1, email="test@example.com", email_verified=True)
        
        mock_entry = Mock(
            id=entry_id,
            weight=71.0,
            user_id=1,
            date=datetime.utcnow()
        )
        
        with patch('app.routes.weight_entries.get_current_verified_user', return_value=mock_user):
            with patch('app.routes.weight_entries.WeightEntryService') as mock_service:
                mock_service_instance = Mock()
                mock_service_instance.update_weight_entry.return_value = mock_entry
                mock_service.return_value = mock_service_instance
                
                # Act
                response = self.client.put(f"/api/v1/weight-entries/{entry_id}", json=update_data)
                
                # Assert
                assert response.status_code == 200
                assert response.json()['weight'] == 71.0
    
    def test_delete_weight_entry_endpoint_success(self):
        """Test successful weight entry deletion endpoint"""
        # Arrange
        entry_id = 1
        mock_user = Mock(id=1, email="test@example.com", email_verified=True)
        
        with patch('app.routes.weight_entries.get_current_verified_user', return_value=mock_user):
            with patch('app.routes.weight_entries.WeightEntryService') as mock_service:
                mock_service_instance = Mock()
                mock_service_instance.delete_weight_entry.return_value = True
                mock_service.return_value = mock_service_instance
                
                # Act
                response = self.client.delete(f"/api/v1/weight-entries/{entry_id}")
                
                # Assert
                assert response.status_code == 200
                assert "message" in response.json()
