<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use App\Repository\UserRepository;
use App\Service\LocaleService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/api/users')]
class UserController extends AbstractController
{
    public function __construct(
        private readonly UserRepository $userRepository,
        private readonly LocaleService $localeService
    ) {
    }

    #[Route('', name: 'api_users_list', methods: ['GET'])]
    public function list(Request $request, #[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user instanceof \App\Entity\User) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api'),
            ], Response::HTTP_UNAUTHORIZED);
        }

        $page = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 20);
        $offset = ($page - 1) * $limit;

        $users = $this->userRepository->findAll();
        $totalUsers = count($users);
        $paginatedUsers = array_slice($users, $offset, $limit);

        $result = [];
        foreach ($paginatedUsers as $userEntity) {
            $result[] = [
                'id' => $userEntity->getId(),
                'email' => $userEntity->getEmail(),
                'name' => $userEntity->getName(),
                'gender' => $userEntity->getGender(),
                'age' => $userEntity->getAge(),
                'height' => $userEntity->getHeight(),
                'initialWeight' => $userEntity->getInitialWeight(),
                'targetWeight' => $userEntity->getTargetWeight(),
                'weightUnit' => $userEntity->getWeightUnit(),
                'heightUnit' => $userEntity->getHeightUnit(),
                'isProfilePublic' => $userEntity->isProfilePublic(),
                'isEmailVerified' => $userEntity->isEmailVerified(),
                'createdAt' => $userEntity->getCreatedAt()?->format('Y-m-d H:i:s'),
                'updatedAt' => $userEntity->getUpdatedAt()?->format('Y-m-d H:i:s'),
            ];
        }

        return new JsonResponse([
            'users' => $result,
            'pagination' => [
                'page' => $page,
                'limit' => $limit,
                'total' => $totalUsers,
                'pages' => ceil($totalUsers / $limit),
            ],
        ]);
    }

    #[Route('/public', name: 'api_users_public', methods: ['GET'])]
    public function publicProfiles(Request $request): JsonResponse
    {
        $page = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 20);
        $offset = ($page - 1) * $limit;

        $users = $this->userRepository->findPublicProfiles();
        $totalUsers = count($users);
        $paginatedUsers = array_slice($users, $offset, $limit);

        $result = [];
        foreach ($paginatedUsers as $userEntity) {
            $result[] = [
                'id' => $userEntity->getId(),
                'name' => $userEntity->getName(),
                'gender' => $userEntity->getGender(),
                'age' => $userEntity->getAge(),
                'height' => $userEntity->getHeight(),
                'initialWeight' => $userEntity->getInitialWeight(),
                'targetWeight' => $userEntity->getTargetWeight(),
                'weightUnit' => $userEntity->getWeightUnit(),
                'heightUnit' => $userEntity->getHeightUnit(),
                'createdAt' => $userEntity->getCreatedAt()?->format('Y-m-d H:i:s'),
            ];
        }

        return new JsonResponse([
            'users' => $result,
            'pagination' => [
                'page' => $page,
                'limit' => $limit,
                'total' => $totalUsers,
                'pages' => ceil($totalUsers / $limit),
            ],
        ]);
    }

    #[Route('/{id}', name: 'api_users_show', methods: ['GET'])]
    public function show(int $id, #[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user instanceof \App\Entity\User) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api'),
            ], Response::HTTP_UNAUTHORIZED);
        }

        $userEntity = $this->userRepository->find($id);

        if (!$userEntity) {
            return new JsonResponse([
                'error' => 'User not found',
            ], Response::HTTP_NOT_FOUND);
        }

        // Check if user can view this profile
        if ($userEntity->getId() !== $user->getId() && !$userEntity->isProfilePublic()) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authorization.insufficient_permissions', [], 'api'),
            ], Response::HTTP_FORBIDDEN);
        }

        $userData = [
            'id' => $userEntity->getId(),
            'name' => $userEntity->getName(),
            'gender' => $userEntity->getGender(),
            'age' => $userEntity->getAge(),
            'height' => $userEntity->getHeight(),
            'initialWeight' => $userEntity->getInitialWeight(),
            'targetWeight' => $userEntity->getTargetWeight(),
            'weightUnit' => $userEntity->getWeightUnit(),
            'heightUnit' => $userEntity->getHeightUnit(),
            'isProfilePublic' => $userEntity->isProfilePublic(),
            'createdAt' => $userEntity->getCreatedAt()?->format('Y-m-d H:i:s'),
        ];

        // Include email only if user is viewing their own profile or is admin
        if ($userEntity->getId() === $user->getId() || in_array('ROLE_ADMIN', $user->getRoles())) {
            $userData['email'] = $userEntity->getEmail();
            $userData['isEmailVerified'] = $userEntity->isEmailVerified();
            $userData['updatedAt'] = $userEntity->getUpdatedAt()?->format('Y-m-d H:i:s');
        }

        return new JsonResponse(['user' => $userData]);
    }
} 