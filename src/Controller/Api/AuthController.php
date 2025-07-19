<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Service\LocaleService;
use App\Service\UserService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/auth')]
class AuthController extends AbstractController
{
    public function __construct(
        private UserService $userService,
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $passwordHasher,
        private ValidatorInterface $validator,
        private LocaleService $localeService
    ) {}

    #[Route('/register', name: 'api_register', methods: ['POST'])]
    public function register(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!$data) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.invalid_json', [], 'messages')
            ], Response::HTTP_BAD_REQUEST);
        }

        // Validation of required fields
        $requiredFields = ['email', 'password', 'gender', 'age', 'height', 'initialWeight', 'targetWeight'];
        foreach ($requiredFields as $field) {
            if (empty($data[$field])) {
                return new JsonResponse([
                    'error' => $this->localeService->trans('required_field', ['field' => $field], 'validators')
                ], Response::HTTP_BAD_REQUEST);
            }
        }

        try {
            $user = $this->userService->createUser($data);

            return new JsonResponse([
                'message' => $this->localeService->trans('endpoints.register.success', [], 'api'),
                'user' => [
                    'id' => $user->getId(),
                    'email' => $user->getEmail(),
                    'name' => $user->getName()
                ]
            ], Response::HTTP_CREATED);

        } catch (\InvalidArgumentException $e) {
            return new JsonResponse(['error' => $e->getMessage()], Response::HTTP_CONFLICT);
        } catch (\Exception $e) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.server.internal_error', [], 'api')
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    #[Route('/login', name: 'api_login', methods: ['POST'])]
    public function login(Request $request): JsonResponse
    {
        $data = json_decode($request->getContent(), true);

        if (!$data || empty($data['email']) || empty($data['password'])) {
            return new JsonResponse([
                'error' => $this->localeService->trans('endpoints.register.error.required_fields', [], 'api')
            ], Response::HTTP_BAD_REQUEST);
        }

        $user = $this->entityManager->getRepository(User::class)->findByEmail($data['email']);

        if (!$user || !$this->passwordHasher->isPasswordValid($user, $data['password'])) {
            return new JsonResponse([
                'error' => $this->localeService->trans('endpoints.login.error.invalid_credentials', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        // Note: In a real application, generate a JWT token here
        return new JsonResponse([
            'message' => $this->localeService->trans('endpoints.login.success', [], 'api'),
            'user' => [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'name' => $user->getName()
            ]
        ]);
    }

    #[Route('/profile', name: 'api_profile', methods: ['GET'])]
    public function profile(#[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        $stats = $this->userService->getUserStats($user);

        return new JsonResponse([
            'user' => [
                'id' => $user->getId(),
                'email' => $user->getEmail(),
                'name' => $user->getName(),
                'gender' => $user->getGender(),
                'age' => $user->getAge(),
                'height' => $user->getHeight(),
                'initialWeight' => $user->getInitialWeight(),
                'targetWeight' => $user->getTargetWeight(),
                'weightUnit' => $user->getWeightUnit(),
                'heightUnit' => $user->getHeightUnit(),
                'isProfilePublic' => $user->isProfilePublic(),
                'isEmailVerified' => $user->isEmailVerified(),
                'createdAt' => $user->getCreatedAt()->format('Y-m-d H:i:s')
            ],
            'stats' => $stats
        ]);
    }

    #[Route('/change-password', name: 'api_change_password', methods: ['POST'])]
    public function changePassword(Request $request, #[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        $data = json_decode($request->getContent(), true);

        if (!$data || empty($data['currentPassword']) || empty($data['newPassword'])) {
            return new JsonResponse([
                'error' => $this->localeService->trans('endpoints.register.error.required_fields', [], 'api')
            ], Response::HTTP_BAD_REQUEST);
        }

        try {
            $this->userService->changePassword($user, $data['currentPassword'], $data['newPassword']);

            return new JsonResponse([
                'message' => $this->localeService->trans('user.profile_updated', [], 'messages')
            ]);

        } catch (\Exception $e) {
            return new JsonResponse(['error' => $e->getMessage()], Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/update-profile', name: 'api_update_profile', methods: ['PUT'])]
    public function updateProfile(Request $request, #[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        $data = json_decode($request->getContent(), true);

        if (!$data) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.invalid_json', [], 'messages')
            ], Response::HTTP_BAD_REQUEST);
        }

        try {
            $updatedUser = $this->userService->updateUser($user, $data);

            return new JsonResponse([
                'message' => $this->localeService->trans('user.profile_updated', [], 'messages'),
                'user' => [
                    'id' => $updatedUser->getId(),
                    'email' => $updatedUser->getEmail(),
                    'name' => $updatedUser->getName(),
                    'gender' => $updatedUser->getGender(),
                    'age' => $updatedUser->getAge(),
                    'height' => $updatedUser->getHeight(),
                    'targetWeight' => $updatedUser->getTargetWeight(),
                    'weightUnit' => $updatedUser->getWeightUnit(),
                    'heightUnit' => $updatedUser->getHeightUnit(),
                    'isProfilePublic' => $updatedUser->isProfilePublic()
                ]
            ]);

        } catch (\InvalidArgumentException $e) {
            return new JsonResponse(['error' => $e->getMessage()], Response::HTTP_CONFLICT);
        } catch (\Exception $e) {
            return new JsonResponse(['error' => 'Erreur lors de la mise à jour du profil'], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
} 