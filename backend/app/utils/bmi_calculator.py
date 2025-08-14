from typing import Tuple


def calculate_bmi(weight_kg: float, height_cm: float) -> float:
    """Calculate BMI (Body Mass Index)"""
    if height_cm <= 0 or weight_kg <= 0:
        raise ValueError("Weight and height must be positive values")

    height_m = height_cm / 100
    bmi = weight_kg / (height_m**2)
    return round(bmi, 2)


def get_bmi_category(bmi: float) -> str:
    """Get BMI category based on BMI value"""
    if bmi < 18.5:
        return "Underweight"
    elif bmi < 25:
        return "Normal weight"
    elif bmi < 30:
        return "Overweight"
    else:
        return "Obese"


def get_healthy_weight_range(height_cm: float) -> Tuple[float, float]:
    """Get healthy weight range for a given height"""
    if height_cm <= 0:
        raise ValueError("Height must be a positive value")

    height_m = height_cm / 100

    # BMI range for healthy weight: 18.5 - 24.9
    min_weight = 18.5 * (height_m**2)
    max_weight = 24.9 * (height_m**2)

    return round(min_weight, 1), round(max_weight, 1)


def convert_weight(weight: float, from_unit: str, to_unit: str) -> float:
    """Convert weight between kg and lbs"""
    if from_unit == to_unit:
        return weight

    if from_unit == "kg" and to_unit == "lbs":
        return round(weight * 2.20462, 2)
    elif from_unit == "lbs" and to_unit == "kg":
        return round(weight / 2.20462, 2)
    else:
        raise ValueError("Invalid units. Use 'kg' or 'lbs'")


def convert_height(height: float, from_unit: str, to_unit: str) -> float:
    """Convert height between cm and inches"""
    if from_unit == to_unit:
        return height

    if from_unit == "cm" and to_unit == "inch":
        return round(height / 2.54, 2)
    elif from_unit == "inch" and to_unit == "cm":
        return round(height * 2.54, 2)
    else:
        raise ValueError("Invalid units. Use 'cm' or 'inch'")
