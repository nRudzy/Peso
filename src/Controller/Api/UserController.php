<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use App\DataProvider\UserDataProvider;
use App\Transformer\UserTransformer;
use App\Response\ApiResponseWrapper;
use App\Service\LocaleService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/api/users')]
class UserController extends AbstractController
{
    public function __construct(
        private readonly UserDataProvider $userDataProvider,
        private readonly UserTransformer $userTransformer,
        private readonly LocaleService $localeService
    ) {
    }

    #[Route('', name: 'api_users_list', methods: ['GET'])]
    public function list(Request $request, #[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $page = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 20);

        $result = $this->userDataProvider->getPaginatedUsers($page, $limit);
        $transformedData = $this->userTransformer->transformMultiple($result['data'], true);

        return ApiResponseWrapper::paginated($transformedData, $result['metadata']);
    }

    #[Route('/public', name: 'api_users_public', methods: ['GET'])]
    public function publicProfiles(Request $request): Response
    {
        $page = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 20);

        $result = $this->userDataProvider->getPaginatedPublicProfiles($page, $limit);
        $transformedData = $this->userTransformer->transformMultiple($result['data'], false);

        return ApiResponseWrapper::paginated($transformedData, $result['metadata']);
    }

    #[Route('/{id}', name: 'api_users_show', methods: ['GET'])]
    public function show(int $id, #[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $userEntity = $this->userDataProvider->getUserById($id);

        if (!$userEntity) {
            return ApiResponseWrapper::error('User not found', Response::HTTP_NOT_FOUND);
        }

        if (!$this->userDataProvider->canViewProfile($user, $userEntity)) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authorization.insufficient_permissions', [], 'api'),
                Response::HTTP_FORBIDDEN
            );
        }

        $includePrivateData = $userEntity->getId() === $user->getId() || in_array('ROLE_ADMIN', $user->getRoles());
        $transformedData = $this->userTransformer->transform($userEntity, $includePrivateData);

        return ApiResponseWrapper::success($transformedData);
    }
} 