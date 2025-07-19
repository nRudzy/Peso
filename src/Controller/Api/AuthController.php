<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use App\DataProvider\UserDataProvider;
use App\Transformer\UserTransformer;
use App\Response\ApiResponseWrapper;
use App\Service\LocaleService;
use App\Service\UserService;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use InvalidArgumentException;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

#[Route('/api/auth')]
class AuthController extends AbstractController
{
    public function __construct(
        private readonly UserService $userService,
        private readonly UserDataProvider $userDataProvider,
        private readonly UserTransformer $userTransformer,
        private readonly EntityManagerInterface $entityManager,
        private readonly UserPasswordHasherInterface $passwordHasher,
        private readonly LocaleService $localeService,
        private readonly JWTTokenManagerInterface $jwtManager
    ) {
    }

    #[Route('/register', name: 'api_register', methods: ['POST'])]
    public function register(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        if (!$data) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.invalid_json', [], 'messages'),
                Response::HTTP_BAD_REQUEST
            );
        }

        // Validation of required fields
        $requiredFields = ['email', 'password', 'gender', 'age', 'height', 'initialWeight', 'targetWeight'];
        foreach ($requiredFields as $field) {
            if (empty($data[$field])) {
                return ApiResponseWrapper::error(
                    $this->localeService->trans('required_field', ['field' => $field], 'validators'),
                    Response::HTTP_BAD_REQUEST
                );
            }
        }

        try {
            $user = $this->userService->createUser($data);
            $transformedData = $this->userTransformer->transformOwn($user);

            return ApiResponseWrapper::created([
                'message' => $this->localeService->trans('endpoints.register.success', [], 'api'),
                'user' => $transformedData,
            ]);
        } catch (InvalidArgumentException $e) {
            return ApiResponseWrapper::error($e->getMessage(), Response::HTTP_CONFLICT);
        } catch (Exception $e) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.server.internal_error', [], 'api'),
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }

    #[Route('/login', name: 'api_login', methods: ['POST'])]
    public function login(Request $request): Response
    {
        $data = json_decode($request->getContent(), true);

        if (!$data || empty($data['email']) || empty($data['password'])) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('endpoints.register.error.required_fields', [], 'api'),
                Response::HTTP_BAD_REQUEST
            );
        }

        $user = $this->userDataProvider->getUserByEmail($data['email']);

        if (!$user || !$this->passwordHasher->isPasswordValid($user, $data['password'])) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('endpoints.login.error.invalid_credentials', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        // Generate JWT token
        $token = $this->jwtManager->create($user);
        $transformedData = $this->userTransformer->transformOwn($user);

        return ApiResponseWrapper::success([
            'message' => $this->localeService->trans('endpoints.login.success', [], 'api'),
            'token' => $token,
            'user' => $transformedData,
        ]);
    }

    #[Route('/profile', name: 'api_profile', methods: ['GET'])]
    public function profile(#[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $stats = $this->userService->getUserStats($user);
        $transformedData = $this->userTransformer->transformOwn($user);

        return ApiResponseWrapper::success([
            'user' => $transformedData,
            'stats' => $stats,
        ]);
    }

    #[Route('/change-password', name: 'api_change_password', methods: ['POST'])]
    public function changePassword(Request $request, #[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $data = json_decode($request->getContent(), true);

        if (!$data || empty($data['currentPassword']) || empty($data['newPassword'])) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('endpoints.register.error.required_fields', [], 'api'),
                Response::HTTP_BAD_REQUEST
            );
        }

        try {
            $this->userService->changePassword($user, $data['currentPassword'], $data['newPassword']);

            return ApiResponseWrapper::success([
                'message' => $this->localeService->trans('user.profile_updated', [], 'messages'),
            ]);
        } catch (Exception $exception) {
            return ApiResponseWrapper::error($exception->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    #[Route('/update-profile', name: 'api_update_profile', methods: ['PUT'])]
    public function updateProfile(Request $request, #[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $data = json_decode($request->getContent(), true);

        if (!$data) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.invalid_json', [], 'messages'),
                Response::HTTP_BAD_REQUEST
            );
        }

        try {
            $updatedUser = $this->userService->updateUser($user, $data);
            $transformedData = $this->userTransformer->transformOwn($updatedUser);

            return ApiResponseWrapper::success([
                'message' => $this->localeService->trans('user.profile_updated', [], 'messages'),
                'user' => $transformedData,
            ]);
        } catch (InvalidArgumentException $e) {
            return ApiResponseWrapper::error($e->getMessage(), Response::HTTP_BAD_REQUEST);
        } catch (Exception $e) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.server.internal_error', [], 'api'),
                Response::HTTP_INTERNAL_SERVER_ERROR
            );
        }
    }
}
