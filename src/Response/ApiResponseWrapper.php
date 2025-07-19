<?php

declare(strict_types=1);

namespace App\Response;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class ApiResponseWrapper
{
    /**
     * Create a successful response with data and optional metadata
     */
    public static function success(
        mixed $data,
        ?array $metadata = null,
        int $statusCode = Response::HTTP_OK
    ): JsonResponse {
        $response = ['data' => $data];
        
        if ($metadata !== null) {
            $response['metadata'] = $metadata;
        }
        
        return new JsonResponse($response, $statusCode);
    }

    /**
     * Create an error response
     */
    public static function error(
        string $message,
        int $statusCode = Response::HTTP_BAD_REQUEST,
        ?array $errors = null
    ): JsonResponse {
        $response = ['error' => $message];
        
        if ($errors !== null) {
            $response['errors'] = $errors;
        }
        
        return new JsonResponse($response, $statusCode);
    }

    /**
     * Create a paginated response
     */
    public static function paginated(
        array $data,
        array $paginationMetadata,
        int $statusCode = Response::HTTP_OK
    ): JsonResponse {
        return self::success($data, $paginationMetadata, $statusCode);
    }

    /**
     * Create a created response (201)
     */
    public static function created(mixed $data): JsonResponse
    {
        return self::success($data, null, Response::HTTP_CREATED);
    }

    /**
     * Create a no content response (204)
     */
    public static function noContent(): JsonResponse
    {
        return new JsonResponse(null, Response::HTTP_NO_CONTENT);
    }
} 