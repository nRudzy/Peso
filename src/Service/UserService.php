<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Repository\WeightEntryRepository;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;

class UserService
{
    public function __construct(
        private UserRepository $userRepository,
        private WeightEntryRepository $weightEntryRepository,
        private UserPasswordHasherInterface $passwordHasher,
        private EmailService $emailService,
        private BmiCalculator $bmiCalculator
    ) {}

    /**
     * Crée un nouvel utilisateur
     */
    public function createUser(array $userData): User
    {
        // Vérifier si l'email existe déjà
        if ($this->userRepository->findByEmail($userData['email'])) {
            throw new \InvalidArgumentException('Un utilisateur avec cet email existe déjà.');
        }

        $user = new User();
        $user->setEmail($userData['email']);
        $user->setName($userData['name'] ?? null);
        $user->setGender($userData['gender']);
        $user->setAge($userData['age']);
        $user->setHeight($userData['height']);
        $user->setInitialWeight($userData['initialWeight']);
        $user->setTargetWeight($userData['targetWeight']);
        $user->setWeightUnit($userData['weightUnit'] ?? 'kg');
        $user->setHeightUnit($userData['heightUnit'] ?? 'cm');
        $user->setIsProfilePublic($userData['isProfilePublic'] ?? false);

        // Hasher le mot de passe
        $hashedPassword = $this->passwordHasher->hashPassword($user, $userData['password']);
        $user->setPassword($hashedPassword);

        // Sauvegarder l'utilisateur
        $this->userRepository->save($user, true);

        // Envoyer l'email de bienvenue
        $this->emailService->sendWelcomeEmail($user);

        return $user;
    }

    /**
     * Met à jour un utilisateur
     */
    public function updateUser(User $user, array $userData): User
    {
        if (isset($userData['email']) && $userData['email'] !== $user->getEmail()) {
            // Vérifier si le nouvel email existe déjà
            $existingUser = $this->userRepository->findByEmail($userData['email']);
            if ($existingUser && $existingUser->getId() !== $user->getId()) {
                throw new \InvalidArgumentException('Un utilisateur avec cet email existe déjà.');
            }
            $user->setEmail($userData['email']);
        }

        if (isset($userData['name'])) {
            $user->setName($userData['name']);
        }

        if (isset($userData['gender'])) {
            $user->setGender($userData['gender']);
        }

        if (isset($userData['age'])) {
            $user->setAge($userData['age']);
        }

        if (isset($userData['height'])) {
            $user->setHeight($userData['height']);
        }

        if (isset($userData['targetWeight'])) {
            $user->setTargetWeight($userData['targetWeight']);
        }

        if (isset($userData['weightUnit'])) {
            $user->setWeightUnit($userData['weightUnit']);
        }

        if (isset($userData['heightUnit'])) {
            $user->setHeightUnit($userData['heightUnit']);
        }

        if (isset($userData['isProfilePublic'])) {
            $user->setIsProfilePublic($userData['isProfilePublic']);
        }

        $this->userRepository->save($user, true);

        return $user;
    }

    /**
     * Change le mot de passe d'un utilisateur
     */
    public function changePassword(User $user, string $currentPassword, string $newPassword): bool
    {
        // Vérifier l'ancien mot de passe
        if (!$this->passwordHasher->isPasswordValid($user, $currentPassword)) {
            throw new AuthenticationException('Le mot de passe actuel est incorrect.');
        }

        // Hasher et sauvegarder le nouveau mot de passe
        $hashedPassword = $this->passwordHasher->hashPassword($user, $newPassword);
        $user->setPassword($hashedPassword);
        $this->userRepository->save($user, true);

        return true;
    }

    /**
     * Récupère les statistiques d'un utilisateur
     */
    public function getUserStats(User $user): array
    {
        $weightEntries = $this->weightEntryRepository->findByUser($user);
        $latestEntry = $this->weightEntryRepository->findLatestByUser($user);
        $totalWeightLoss = $this->weightEntryRepository->calculateTotalWeightLoss($user);

        $currentWeight = $latestEntry ? $latestEntry->getWeight() : $user->getInitialWeight();
        $bmi = $this->bmiCalculator->calculateBmiForUser($user);
        $bmiCategory = $this->bmiCalculator->getBmiCategory($bmi);
        $idealWeight = $this->bmiCalculator->calculateIdealWeight($user);
        $bodyFatPercentage = $this->bmiCalculator->calculateBodyFatPercentage($user);
        $bmr = $this->bmiCalculator->calculateBmr($user);

        return [
            'currentWeight' => $currentWeight,
            'initialWeight' => $user->getInitialWeight(),
            'targetWeight' => $user->getTargetWeight(),
            'totalWeightLoss' => $totalWeightLoss,
            'weightToLose' => $currentWeight - $user->getTargetWeight(),
            'progressPercentage' => $this->calculateProgressPercentage($user),
            'bmi' => $bmi,
            'bmiCategory' => $bmiCategory,
            'idealWeight' => $idealWeight,
            'bodyFatPercentage' => $bodyFatPercentage,
            'bmr' => $bmr,
            'totalEntries' => count($weightEntries),
            'lastEntryDate' => $latestEntry ? $latestEntry->getDate() : null,
            'daysSinceLastEntry' => $latestEntry ? (new \DateTimeImmutable())->diff($latestEntry->getDate())->days : null
        ];
    }

    /**
     * Calcule le pourcentage de progression vers l'objectif
     */
    private function calculateProgressPercentage(User $user): float
    {
        $initialWeight = $user->getInitialWeight();
        $targetWeight = $user->getTargetWeight();
        $currentWeight = $this->weightEntryRepository->findLatestByUser($user)?->getWeight() ?? $initialWeight;

        $totalWeightToLose = $initialWeight - $targetWeight;
        $weightLost = $initialWeight - $currentWeight;

        if ($totalWeightToLose <= 0) {
            return 0;
        }

        $percentage = ($weightLost / $totalWeightToLose) * 100;
        return round(min(100, max(0, $percentage)), 1);
    }

    /**
     * Récupère les utilisateurs avec un profil public
     */
    public function getPublicProfiles(): array
    {
        return $this->userRepository->findPublicProfiles();
    }

    /**
     * Vérifie si un utilisateur a atteint son objectif
     */
    public function hasReachedGoal(User $user): bool
    {
        $latestEntry = $this->weightEntryRepository->findLatestByUser($user);
        if (!$latestEntry) {
            return false;
        }

        return $latestEntry->getWeight() <= $user->getTargetWeight();
    }
} 