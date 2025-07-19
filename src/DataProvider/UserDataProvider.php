<?php

declare(strict_types=1);

namespace App\DataProvider;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Factory\PaginationMetadataFactory;

class UserDataProvider
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly PaginationMetadataFactory $paginationFactory
    ) {
    }

    /**
     * Get paginated list of all users (admin only)
     */
    public function getPaginatedUsers(int $page, int $limit): array
    {
        $users = $this->userRepository->findAll();
        $totalUsers = count($users);
        $offset = ($page - 1) * $limit;
        $paginatedUsers = array_slice($users, $offset, $limit);

        $metadata = $this->paginationFactory->create($page, $limit, $totalUsers);

        return [
            'data' => $paginatedUsers,
            'metadata' => $metadata,
        ];
    }

    /**
     * Get paginated list of public profiles
     */
    public function getPaginatedPublicProfiles(int $page, int $limit): array
    {
        $users = $this->userRepository->findPublicProfiles();
        $totalUsers = count($users);
        $offset = ($page - 1) * $limit;
        $paginatedUsers = array_slice($users, $offset, $limit);

        $metadata = $this->paginationFactory->create($page, $limit, $totalUsers);

        return [
            'data' => $paginatedUsers,
            'metadata' => $metadata,
        ];
    }

    /**
     * Get user by ID
     */
    public function getUserById(int $id): ?User
    {
        return $this->userRepository->find($id);
    }

    /**
     * Get user by email
     */
    public function getUserByEmail(string $email): ?User
    {
        return $this->userRepository->findByEmail($email);
    }

    /**
     * Check if user can view another user's profile
     */
    public function canViewProfile(User $viewer, User $target): bool
    {
        // User can always view their own profile
        if ($viewer->getId() === $target->getId()) {
            return true;
        }

        // Admin can view any profile
        if (in_array('ROLE_ADMIN', $viewer->getRoles())) {
            return true;
        }

        // Public profiles can be viewed by anyone
        return $target->isProfilePublic();
    }
} 