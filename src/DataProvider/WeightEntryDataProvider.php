<?php

declare(strict_types=1);

namespace App\DataProvider;

use App\Entity\User;
use App\Entity\WeightEntry;
use App\Repository\WeightEntryRepository;
use App\Factory\PaginationMetadataFactory;
use DateTimeImmutable;

class WeightEntryDataProvider
{
    public function __construct(
        private readonly WeightEntryRepository $weightEntryRepository,
        private readonly PaginationMetadataFactory $paginationFactory
    ) {
    }

    /**
     * Get paginated weight entries for a user
     */
    public function getPaginatedEntriesForUser(User $user, int $page, int $limit): array
    {
        $entries = $this->weightEntryRepository->findByUser($user);
        $totalEntries = count($entries);
        $offset = ($page - 1) * $limit;
        $paginatedEntries = array_slice($entries, $offset, $limit);

        $metadata = $this->paginationFactory->create($page, $limit, $totalEntries);

        return [
            'data' => $paginatedEntries,
            'metadata' => $metadata,
        ];
    }

    /**
     * Get latest weight entry for a user
     */
    public function getLatestEntryForUser(User $user): ?WeightEntry
    {
        return $this->weightEntryRepository->findLatestByUser($user);
    }

    /**
     * Get weight entry by ID for a specific user
     */
    public function getEntryByIdForUser(int $id, User $user): ?WeightEntry
    {
        $entry = $this->weightEntryRepository->find($id);
        
        if (!$entry || $entry->getUser()?->getId() !== $user->getId()) {
            return null;
        }

        return $entry;
    }

    /**
     * Get weight entries for progress tracking
     */
    public function getEntriesForProgress(User $user, int $days): array
    {
        $startDate = new DateTimeImmutable(sprintf('-%d days', $days));
        $endDate = new DateTimeImmutable();

        return $this->weightEntryRepository->findByUserAndDateRange($user, $startDate, $endDate);
    }

    /**
     * Calculate total weight loss for a user
     */
    public function getTotalWeightLoss(User $user): float
    {
        return $this->weightEntryRepository->calculateTotalWeightLoss($user);
    }

    /**
     * Check if user owns the weight entry
     */
    public function userOwnsEntry(User $user, WeightEntry $entry): bool
    {
        return $entry->getUser()?->getId() === $user->getId();
    }

    /**
     * Save a weight entry
     */
    public function saveEntry(WeightEntry $entry): void
    {
        $this->weightEntryRepository->save($entry, true);
    }

    /**
     * Delete a weight entry
     */
    public function deleteEntry(WeightEntry $entry): void
    {
        $this->weightEntryRepository->remove($entry, true);
    }
} 