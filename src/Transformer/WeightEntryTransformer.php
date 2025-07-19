<?php

declare(strict_types=1);

namespace App\Transformer;

use App\Entity\WeightEntry;

class WeightEntryTransformer
{
    /**
     * Transform a single weight entry entity to array
     */
    public function transform(WeightEntry $entry): array
    {
        return [
            'id' => $entry->getId(),
            'weight' => $entry->getWeight(),
            'date' => $entry->getDate()?->format('Y-m-d'),
            'comment' => $entry->getComment(),
            'createdAt' => $entry->getCreatedAt()?->format('Y-m-d H:i:s'),
            'updatedAt' => $entry->getUpdatedAt()?->format('Y-m-d H:i:s'),
        ];
    }

    /**
     * Transform multiple weight entry entities to array
     */
    public function transformMultiple(array $entries): array
    {
        return array_map(
            fn(WeightEntry $entry) => $this->transform($entry),
            $entries
        );
    }

    /**
     * Transform weight entry with BMI calculation
     */
    public function transformWithBmi(WeightEntry $entry, ?float $bmi = null): array
    {
        $data = $this->transform($entry);
        
        if ($bmi !== null) {
            $data['bmi'] = $bmi;
        }

        return $data;
    }

    /**
     * Transform weight entry for progress tracking
     */
    public function transformForProgress(WeightEntry $entry, ?float $bmi = null): array
    {
        return [
            'date' => $entry->getDate()?->format('Y-m-d'),
            'weight' => $entry->getWeight(),
            'bmi' => $bmi,
        ];
    }
} 