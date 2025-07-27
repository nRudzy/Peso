import factory
from datetime import datetime, timedelta
from app.models.user import User
from app.models.weight_entry import WeightEntry
from app.core.enums import GenderEnum, WeightUnitEnum, HeightUnitEnum
from app.core.security import get_password_hash


class UserFactory(factory.Factory):
    """Factory for creating test users"""
    
    class Meta:
        model = User
    
    email = factory.Sequence(lambda n: f"user{n}@example.com")
    hashed_password = factory.LazyFunction(lambda: get_password_hash("testpassword123"))
    first_name = factory.Faker("first_name")
    last_name = factory.Faker("last_name")
    gender = factory.Iterator([GenderEnum.MALE, GenderEnum.FEMALE, GenderEnum.OTHER])
    age = factory.Faker("random_int", min=18, max=80)
    height = factory.Faker("random_float", min=150, max=200)
    initial_weight = factory.Faker("random_float", min=50, max=120)
    target_weight = factory.Faker("random_float", min=50, max=120)
    weight_unit = WeightUnitEnum.KG
    height_unit = HeightUnitEnum.CM
    profile_visibility = True
    email_verified = True
    is_active = True


class WeightEntryFactory(factory.Factory):
    """Factory for creating test weight entries"""
    
    class Meta:
        model = WeightEntry
    
    weight = factory.Faker("random_float", min=50, max=120)
    date = factory.Faker("date_time_between", start_date="-30d", end_date="now")
    comment = factory.Faker("sentence", nb_words=5)
    user_id = factory.SubFactory(UserFactory).id


class UnverifiedUserFactory(UserFactory):
    """Factory for creating unverified users"""
    email_verified = False


class InactiveUserFactory(UserFactory):
    """Factory for creating inactive users"""
    is_active = False


class PrivateUserFactory(UserFactory):
    """Factory for creating users with private profiles"""
    profile_visibility = False 