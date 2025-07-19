<?php

declare(strict_types=1);

namespace App\Factory;

class PaginationMetadataFactory
{
    /**
     * Create pagination metadata from pagination parameters
     */
    public function create(
        int $page,
        int $limit,
        int $total,
        ?string $baseUrl = null
    ): array {
        $totalPages = (int) ceil($total / $limit);
        
        $metadata = [
            'page' => $page,
            'limit' => $limit,
            'total' => $total,
            'pages' => $totalPages,
            'hasNext' => $page < $totalPages,
            'hasPrevious' => $page > 1,
        ];

        if ($baseUrl !== null) {
            $metadata['links'] = $this->createLinks($baseUrl, $page, $totalPages);
        }

        return $metadata;
    }

    /**
     * Create pagination links
     */
    private function createLinks(string $baseUrl, int $currentPage, int $totalPages): array
    {
        $links = [
            'self' => $this->buildUrl($baseUrl, $currentPage),
            'first' => $this->buildUrl($baseUrl, 1),
            'last' => $this->buildUrl($baseUrl, $totalPages),
        ];

        if ($currentPage > 1) {
            $links['previous'] = $this->buildUrl($baseUrl, $currentPage - 1);
        }

        if ($currentPage < $totalPages) {
            $links['next'] = $this->buildUrl($baseUrl, $currentPage + 1);
        }

        return $links;
    }

    /**
     * Build URL with pagination parameters
     */
    private function buildUrl(string $baseUrl, int $page): string
    {
        $separator = str_contains($baseUrl, '?') ? '&' : '?';
        return $baseUrl . $separator . 'page=' . $page;
    }
} 