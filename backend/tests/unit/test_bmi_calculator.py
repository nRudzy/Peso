import pytest
from app.utils.bmi_calculator import (
    calculate_bmi,
    get_bmi_category,
    get_healthy_weight_range,
    convert_weight,
    convert_height,
)


class TestBMICalculator:
    """Test cases for BMI calculator utility functions"""

    def test_calculate_bmi_success(self):
        """Test successful BMI calculation"""
        # Arrange
        weight_kg = 70.0
        height_cm = 175.0

        # Act
        bmi = calculate_bmi(weight_kg, height_cm)

        # Assert
        expected_bmi = 70.0 / ((175.0 / 100) ** 2)  # 22.86
        assert bmi == round(expected_bmi, 2)
        assert bmi == 22.86

    def test_calculate_bmi_zero_weight(self):
        """Test BMI calculation with zero weight"""
        # Arrange
        weight_kg = 0
        height_cm = 175.0

        # Act & Assert
        with pytest.raises(
            ValueError, match="Weight and height must be positive values"
        ):
            calculate_bmi(weight_kg, height_cm)

    def test_calculate_bmi_zero_height(self):
        """Test BMI calculation with zero height"""
        # Arrange
        weight_kg = 70.0
        height_cm = 0

        # Act & Assert
        with pytest.raises(
            ValueError, match="Weight and height must be positive values"
        ):
            calculate_bmi(weight_kg, height_cm)

    def test_calculate_bmi_negative_weight(self):
        """Test BMI calculation with negative weight"""
        # Arrange
        weight_kg = -70.0
        height_cm = 175.0

        # Act & Assert
        with pytest.raises(
            ValueError, match="Weight and height must be positive values"
        ):
            calculate_bmi(weight_kg, height_cm)

    def test_calculate_bmi_negative_height(self):
        """Test BMI calculation with negative height"""
        # Arrange
        weight_kg = 70.0
        height_cm = -175.0

        # Act & Assert
        with pytest.raises(
            ValueError, match="Weight and height must be positive values"
        ):
            calculate_bmi(weight_kg, height_cm)

    def test_get_bmi_category_underweight(self):
        """Test BMI category for underweight"""
        # Arrange
        bmi = 17.0

        # Act
        category = get_bmi_category(bmi)

        # Assert
        assert category == "Underweight"

    def test_get_bmi_category_normal_weight(self):
        """Test BMI category for normal weight"""
        # Arrange
        bmi = 22.0

        # Act
        category = get_bmi_category(bmi)

        # Assert
        assert category == "Normal weight"

    def test_get_bmi_category_overweight(self):
        """Test BMI category for overweight"""
        # Arrange
        bmi = 27.0

        # Act
        category = get_bmi_category(bmi)

        # Assert
        assert category == "Overweight"

    def test_get_bmi_category_obese(self):
        """Test BMI category for obese"""
        # Arrange
        bmi = 32.0

        # Act
        category = get_bmi_category(bmi)

        # Assert
        assert category == "Obese"

    def test_get_bmi_category_boundary_values(self):
        """Test BMI category boundary values"""
        # Test boundary between underweight and normal
        assert get_bmi_category(18.4) == "Underweight"
        assert get_bmi_category(18.5) == "Normal weight"

        # Test boundary between normal and overweight
        assert get_bmi_category(24.9) == "Normal weight"
        assert get_bmi_category(25.0) == "Overweight"

        # Test boundary between overweight and obese
        assert get_bmi_category(29.9) == "Overweight"
        assert get_bmi_category(30.0) == "Obese"

    def test_get_healthy_weight_range_success(self):
        """Test healthy weight range calculation"""
        # Arrange
        height_cm = 175.0

        # Act
        min_weight, max_weight = get_healthy_weight_range(height_cm)

        # Assert
        height_m = height_cm / 100
        expected_min = 18.5 * (height_m**2)  # 56.66 kg
        expected_max = 24.9 * (height_m**2)  # 76.26 kg

        assert min_weight == round(expected_min, 1)
        assert max_weight == round(expected_max, 1)
        assert min_weight == 56.7
        assert max_weight == 76.3

    def test_get_healthy_weight_range_zero_height(self):
        """Test healthy weight range with zero height"""
        # Arrange
        height_cm = 0

        # Act & Assert
        with pytest.raises(ValueError, match="Height must be a positive value"):
            get_healthy_weight_range(height_cm)

    def test_get_healthy_weight_range_negative_height(self):
        """Test healthy weight range with negative height"""
        # Arrange
        height_cm = -175.0

        # Act & Assert
        with pytest.raises(ValueError, match="Height must be a positive value"):
            get_healthy_weight_range(height_cm)


class TestWeightConversion:
    """Test cases for weight conversion functions"""

    def test_convert_weight_kg_to_lbs(self):
        """Test weight conversion from kg to lbs"""
        # Arrange
        weight = 70.0
        from_unit = "kg"
        to_unit = "lbs"

        # Act
        result = convert_weight(weight, from_unit, to_unit)

        # Assert
        expected = 70.0 * 2.20462  # 154.32 lbs
        assert result == round(expected, 2)
        assert result == 154.32

    def test_convert_weight_lbs_to_kg(self):
        """Test weight conversion from lbs to kg"""
        # Arrange
        weight = 154.32
        from_unit = "lbs"
        to_unit = "kg"

        # Act
        result = convert_weight(weight, from_unit, to_unit)

        # Assert
        expected = 154.32 / 2.20462  # 70.0 kg
        assert result == round(expected, 2)
        assert result == 70.0

    def test_convert_weight_same_unit(self):
        """Test weight conversion with same unit"""
        # Arrange
        weight = 70.0
        from_unit = "kg"
        to_unit = "kg"

        # Act
        result = convert_weight(weight, from_unit, to_unit)

        # Assert
        assert result == weight

    def test_convert_weight_invalid_units(self):
        """Test weight conversion with invalid units"""
        # Arrange
        weight = 70.0
        from_unit = "kg"
        to_unit = "invalid"

        # Act & Assert
        with pytest.raises(ValueError, match="Invalid units. Use 'kg' or 'lbs'"):
            convert_weight(weight, from_unit, to_unit)


class TestHeightConversion:
    """Test cases for height conversion functions"""

    def test_convert_height_cm_to_inch(self):
        """Test height conversion from cm to inches"""
        # Arrange
        height = 175.0
        from_unit = "cm"
        to_unit = "inch"

        # Act
        result = convert_height(height, from_unit, to_unit)

        # Assert
        expected = 175.0 / 2.54  # 68.90 inches
        assert result == round(expected, 2)
        assert result == 68.90

    def test_convert_height_inch_to_cm(self):
        """Test height conversion from inches to cm"""
        # Arrange
        height = 68.90
        from_unit = "inch"
        to_unit = "cm"

        # Act
        result = convert_height(height, from_unit, to_unit)

        # Assert
        expected = 68.90 * 2.54  # 175.01 cm
        assert result == round(expected, 2)
        assert result == 175.01

    def test_convert_height_same_unit(self):
        """Test height conversion with same unit"""
        # Arrange
        height = 175.0
        from_unit = "cm"
        to_unit = "cm"

        # Act
        result = convert_height(height, from_unit, to_unit)

        # Assert
        assert result == height

    def test_convert_height_invalid_units(self):
        """Test height conversion with invalid units"""
        # Arrange
        height = 175.0
        from_unit = "cm"
        to_unit = "invalid"

        # Act & Assert
        with pytest.raises(ValueError, match="Invalid units. Use 'cm' or 'inch'"):
            convert_height(height, from_unit, to_unit)
