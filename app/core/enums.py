from enum import Enum


class GenderEnum(str, Enum):
    """User gender options"""
    MALE = "male"
    FEMALE = "female"
    OTHER = "other"


class WeightUnitEnum(str, Enum):
    """Weight unit options"""
    KG = "kg"
    LBS = "lbs"


class HeightUnitEnum(str, Enum):
    """Height unit options"""
    CM = "cm"
    INCH = "inch"


class TokenTypeEnum(str, Enum):
    """JWT token types"""
    ACCESS = "access"
    REFRESH = "refresh"
    EMAIL_VERIFICATION = "email_verification"
    PASSWORD_RESET = "password_reset"


class RouteTagsEnum(str, Enum):
    """API route tags for Swagger documentation"""
    AUTHENTICATION = "Authentication"
    USERS = "Users"
    WEIGHT_ENTRIES = "Weight Entries"


class ErrorCodeEnum(str, Enum):
    """Standard error codes"""
    VALIDATION_ERROR = "VALIDATION_ERROR"
    AUTHENTICATION_ERROR = "AUTHENTICATION_ERROR"
    AUTHORIZATION_ERROR = "AUTHORIZATION_ERROR"
    NOT_FOUND_ERROR = "NOT_FOUND_ERROR"
    CONFLICT_ERROR = "CONFLICT_ERROR"
    INTERNAL_ERROR = "INTERNAL_ERROR"


class PaginationDefaultsEnum(int, Enum):
    """Default pagination values"""
    DEFAULT_PAGE_SIZE = 20
    MAX_PAGE_SIZE = 100
    DEFAULT_PAGE = 1


class BMIThresholdsEnum(float, Enum):
    """BMI category thresholds"""
    UNDERWEIGHT = 18.5
    NORMAL_WEIGHT = 25.0
    OVERWEIGHT = 30.0 