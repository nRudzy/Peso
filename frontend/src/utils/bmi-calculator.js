/**
 * BMI Calculator utility functions for frontend
 */

/**
 * Calculate BMI (Body Mass Index)
 * @param {number} weightKg - Weight in kilograms
 * @param {number} heightCm - Height in centimeters
 * @returns {number} BMI value rounded to 2 decimal places
 */
export function calculate_bmi(weightKg, heightCm) {
  if (heightCm <= 0 || weightKg <= 0) {
    throw new Error("Weight and height must be positive values")
  }
  
  const heightM = heightCm / 100
  const bmi = weightKg / (heightM ** 2)
  return Math.round(bmi * 100) / 100
}

/**
 * Get BMI category based on BMI value
 * @param {number} bmi - BMI value
 * @returns {string} BMI category
 */
export function get_bmi_category(bmi) {
  if (bmi < 18.5) {
    return "Underweight"
  } else if (bmi < 25) {
    return "Normal weight"
  } else if (bmi < 30) {
    return "Overweight"
  } else {
    return "Obese"
  }
}

/**
 * Get healthy weight range for a given height
 * @param {number} heightCm - Height in centimeters
 * @returns {Array} [minWeight, maxWeight] in kg
 */
export function get_healthy_weight_range(heightCm) {
  if (heightCm <= 0) {
    throw new Error("Height must be a positive value")
  }
  
  const heightM = heightCm / 100
  
  // BMI range for healthy weight: 18.5 - 24.9
  const minWeight = 18.5 * (heightM ** 2)
  const maxWeight = 24.9 * (heightM ** 2)
  
  return [
    Math.round(minWeight * 10) / 10,
    Math.round(maxWeight * 10) / 10
  ]
}

/**
 * Convert weight between kg and lbs
 * @param {number} weight - Weight value
 * @param {string} fromUnit - Source unit ('kg' or 'lbs')
 * @param {string} toUnit - Target unit ('kg' or 'lbs')
 * @returns {number} Converted weight
 */
export function convert_weight(weight, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    return weight
  }
  
  if (fromUnit === "kg" && toUnit === "lbs") {
    return Math.round(weight * 2.20462 * 100) / 100
  } else if (fromUnit === "lbs" && toUnit === "kg") {
    return Math.round(weight / 2.20462 * 100) / 100
  } else {
    throw new Error("Invalid units. Use 'kg' or 'lbs'")
  }
}

/**
 * Convert height between cm and inches
 * @param {number} height - Height value
 * @param {string} fromUnit - Source unit ('cm' or 'inch')
 * @param {string} toUnit - Target unit ('cm' or 'inch')
 * @returns {number} Converted height
 */
export function convert_height(height, fromUnit, toUnit) {
  if (fromUnit === toUnit) {
    return height
  }
  
  if (fromUnit === "cm" && toUnit === "inch") {
    return Math.round(height / 2.54 * 100) / 100
  } else if (fromUnit === "inch" && toUnit === "cm") {
    return Math.round(height * 2.54 * 100) / 100
  } else {
    throw new Error("Invalid units. Use 'cm' or 'inch'")
  }
}

/**
 * Get BMI category with French translation
 * @param {number} bmi - BMI value
 * @returns {string} French BMI category
 */
export function get_bmi_category_fr(bmi) {
  const categories = {
    "Underweight": "Insuffisance pondérale",
    "Normal weight": "Poids normal",
    "Overweight": "Surpoids",
    "Obese": "Obésité"
  }
  
  const category = get_bmi_category(bmi)
  return categories[category] || category
}

/**
 * Get BMI category color class for styling
 * @param {number} bmi - BMI value
 * @returns {string} CSS color class
 */
export function get_bmi_color_class(bmi) {
  if (bmi < 18.5) {
    return "text-yellow-600"
  } else if (bmi < 25) {
    return "text-green-600"
  } else if (bmi < 30) {
    return "text-orange-600"
  } else {
    return "text-red-600"
  }
}
