<?php

namespace App\Service;

use App\Entity\User;

class BmiCalculator
{
    /**
     * Calcule l'IMC (Indice de Masse Corporelle)
     */
    public function calculateBmi(float $weight, float $height, string $weightUnit = 'kg', string $heightUnit = 'cm'): float
    {
        // Conversion en kg et cm si nécessaire
        $weightKg = $this->convertWeightToKg($weight, $weightUnit);
        $heightCm = $this->convertHeightToCm($height, $heightUnit);
        
        // Conversion en mètres
        $heightM = $heightCm / 100;
        
        // Calcul de l'IMC : poids (kg) / taille (m)²
        $bmi = $weightKg / ($heightM * $heightM);
        
        return round($bmi, 2);
    }

    /**
     * Calcule l'IMC pour un utilisateur
     */
    public function calculateBmiForUser(User $user): float
    {
        $latestWeight = $this->getLatestWeight($user);
        if (!$latestWeight) {
            return $this->calculateBmi(
                $user->getInitialWeight(),
                $user->getHeight(),
                $user->getWeightUnit(),
                $user->getHeightUnit()
            );
        }

        return $this->calculateBmi(
            $latestWeight,
            $user->getHeight(),
            $user->getWeightUnit(),
            $user->getHeightUnit()
        );
    }

    /**
     * Détermine la catégorie d'IMC
     */
    public function getBmiCategory(float $bmi): string
    {
        if ($bmi < 18.5) {
            return 'insuffisance pondérale';
        } elseif ($bmi < 25) {
            return 'poids normal';
        } elseif ($bmi < 30) {
            return 'surpoids';
        } elseif ($bmi < 35) {
            return 'obésité modérée';
        } elseif ($bmi < 40) {
            return 'obésité sévère';
        } else {
            return 'obésité morbide';
        }
    }

    /**
     * Calcule le poids idéal selon la formule de Lorentz
     */
    public function calculateIdealWeight(User $user): float
    {
        $heightCm = $this->convertHeightToCm($user->getHeight(), $user->getHeightUnit());
        
        if ($user->getGender() === 'male') {
            $idealWeight = ($heightCm - 100) - (($heightCm - 150) / 4);
        } else {
            $idealWeight = ($heightCm - 100) - (($heightCm - 150) / 2);
        }
        
        return $this->convertWeightFromKg($idealWeight, $user->getWeightUnit());
    }

    /**
     * Calcule le pourcentage de graisse corporelle estimé
     */
    public function calculateBodyFatPercentage(User $user): float
    {
        $bmi = $this->calculateBmiForUser($user);
        $age = $user->getAge();
        
        if ($user->getGender() === 'male') {
            $bodyFat = (1.20 * $bmi) + (0.23 * $age) - 16.2;
        } else {
            $bodyFat = (1.20 * $bmi) + (0.23 * $age) - 5.4;
        }
        
        return round(max(0, min(100, $bodyFat)), 1);
    }

    /**
     * Calcule le métabolisme de base (BMR) selon la formule de Mifflin-St Jeor
     */
    public function calculateBmr(User $user): float
    {
        $weightKg = $this->convertWeightToKg($this->getLatestWeight($user) ?? $user->getInitialWeight(), $user->getWeightUnit());
        $heightCm = $this->convertHeightToCm($user->getHeight(), $user->getHeightUnit());
        $age = $user->getAge();
        
        if ($user->getGender() === 'male') {
            $bmr = (10 * $weightKg) + (6.25 * $heightCm) - (5 * $age) + 5;
        } else {
            $bmr = (10 * $weightKg) + (6.25 * $heightCm) - (5 * $age) - 161;
        }
        
        return round($bmr);
    }

    /**
     * Calcule le déficit calorique nécessaire pour perdre du poids
     */
    public function calculateCalorieDeficit(User $user, float $weeklyWeightLossGoal = 0.5): float
    {
        // 1 kg de graisse = 7700 calories
        $dailyDeficit = ($weeklyWeightLossGoal * 7700) / 7;
        return round($dailyDeficit);
    }

    /**
     * Convertit le poids en kg
     */
    private function convertWeightToKg(float $weight, string $unit): float
    {
        return $unit === 'lbs' ? $weight * 0.453592 : $weight;
    }

    /**
     * Convertit le poids de kg vers l'unité spécifiée
     */
    private function convertWeightFromKg(float $weightKg, string $unit): float
    {
        return $unit === 'lbs' ? $weightKg * 2.20462 : $weightKg;
    }

    /**
     * Convertit la taille en cm
     */
    private function convertHeightToCm(float $height, string $unit): float
    {
        return $unit === 'inch' ? $height * 2.54 : $height;
    }

    /**
     * Récupère le poids le plus récent d'un utilisateur
     */
    private function getLatestWeight(User $user): ?float
    {
        $weightEntries = $user->getWeightEntries();
        if ($weightEntries->isEmpty()) {
            return null;
        }

        $latestEntry = null;
        foreach ($weightEntries as $entry) {
            if (!$latestEntry || $entry->getDate() > $latestEntry->getDate()) {
                $latestEntry = $entry;
            }
        }

        return $latestEntry ? $latestEntry->getWeight() : null;
    }
} 