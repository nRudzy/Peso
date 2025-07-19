<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\WeightEntry;
use App\DataProvider\WeightEntryDataProvider;
use App\Transformer\WeightEntryTransformer;
use App\Response\ApiResponseWrapper;
use App\Service\LocaleService;
use App\Service\BmiCalculator;
use DateTimeImmutable;
use Exception;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/weight-entries')]
class WeightEntryController extends AbstractController
{
    public function __construct(
        private readonly WeightEntryDataProvider $weightEntryDataProvider,
        private readonly WeightEntryTransformer $weightEntryTransformer,
        private readonly LocaleService $localeService,
        private readonly BmiCalculator $bmiCalculator,
        private readonly ValidatorInterface $validator
    ) {
    }

    #[Route('', name: 'api_weight_entries_list', methods: ['GET'])]
    public function list(Request $request, #[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $page = $request->query->getInt('page', 1);
        $limit = $request->query->getInt('limit', 50);

        $result = $this->weightEntryDataProvider->getPaginatedEntriesForUser($user, $page, $limit);
        $transformedData = $this->weightEntryTransformer->transformMultiple($result['data']);

        return ApiResponseWrapper::paginated($transformedData, $result['metadata']);
    }

    #[Route('/latest', name: 'api_weight_entries_latest', methods: ['GET'])]
    public function latest(#[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $entry = $this->weightEntryDataProvider->getLatestEntryForUser($user);

        if (!$entry instanceof \App\Entity\WeightEntry) {
            return ApiResponseWrapper::success(['entry' => null]);
        }

        $transformedData = $this->weightEntryTransformer->transform($entry);
        return ApiResponseWrapper::success(['entry' => $transformedData]);
    }

    #[Route('', name: 'api_weight_entries_create', methods: ['POST'])]
    public function create(Request $request, #[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $data = json_decode($request->getContent(), true);

        if (!$data || empty($data['weight'])) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('required_field', ['field' => 'weight'], 'validators'),
                Response::HTTP_BAD_REQUEST
            );
        }

        $entry = new WeightEntry();
        $entry->setUser($user);
        $entry->setWeight((float) $data['weight']);

        if (isset($data['date'])) {
            try {
                $entry->setDate(new DateTimeImmutable($data['date']));
            } catch (Exception) {
                return ApiResponseWrapper::error(
                    $this->localeService->trans('invalid_date', [], 'validators'),
                    Response::HTTP_BAD_REQUEST
                );
            }
        }

        if (isset($data['comment'])) {
            $entry->setComment($data['comment']);
        }

        // Validation
        $errors = $this->validator->validate($entry);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            return ApiResponseWrapper::error(
                $this->localeService->trans('validation.failed', [], 'api'),
                Response::HTTP_BAD_REQUEST,
                $errorMessages
            );
        }

        // Save entry (this should be moved to a service)
        $this->weightEntryDataProvider->saveEntry($entry);

        $transformedData = $this->weightEntryTransformer->transform($entry);
        return ApiResponseWrapper::created(['entry' => $transformedData]);
    }

    #[Route('/{id}', name: 'api_weight_entries_show', methods: ['GET'])]
    public function show(int $id, #[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $entry = $this->weightEntryDataProvider->getEntryByIdForUser($id, $user);

        if (!$entry) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('endpoints.weight_entries.update.error.not_found', [], 'api'),
                Response::HTTP_NOT_FOUND
            );
        }

        $transformedData = $this->weightEntryTransformer->transform($entry);
        return ApiResponseWrapper::success(['entry' => $transformedData]);
    }

    #[Route('/{id}', name: 'api_weight_entries_update', methods: ['PUT'])]
    public function update(int $id, Request $request, #[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $entry = $this->weightEntryDataProvider->getEntryByIdForUser($id, $user);

        if (!$entry) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('endpoints.weight_entries.update.error.not_found', [], 'api'),
                Response::HTTP_NOT_FOUND
            );
        }

        $data = json_decode($request->getContent(), true);

        if (!$data) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.invalid_json', [], 'messages'),
                Response::HTTP_BAD_REQUEST
            );
        }

        if (isset($data['weight'])) {
            $entry->setWeight((float) $data['weight']);
        }

        if (isset($data['date'])) {
            try {
                $entry->setDate(new DateTimeImmutable($data['date']));
            } catch (Exception) {
                return ApiResponseWrapper::error(
                    $this->localeService->trans('invalid_date', [], 'validators'),
                    Response::HTTP_BAD_REQUEST
                );
            }
        }

        if (isset($data['comment'])) {
            $entry->setComment($data['comment']);
        }

        // Validation
        $errors = $this->validator->validate($entry);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[] = $error->getMessage();
            }

            return ApiResponseWrapper::error(
                $this->localeService->trans('validation.failed', [], 'api'),
                Response::HTTP_BAD_REQUEST,
                $errorMessages
            );
        }

        // Save entry (this should be moved to a service)
        $this->weightEntryDataProvider->saveEntry($entry);

        $transformedData = $this->weightEntryTransformer->transform($entry);
        return ApiResponseWrapper::success(['entry' => $transformedData]);
    }

    #[Route('/{id}', name: 'api_weight_entries_delete', methods: ['DELETE'])]
    public function delete(int $id, #[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $entry = $this->weightEntryDataProvider->getEntryByIdForUser($id, $user);

        if (!$entry) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('endpoints.weight_entries.update.error.not_found', [], 'api'),
                Response::HTTP_NOT_FOUND
            );
        }

        // Delete entry (this should be moved to a service)
        $this->weightEntryDataProvider->deleteEntry($entry);

        return ApiResponseWrapper::success([
            'message' => $this->localeService->trans('endpoints.weight_entries.delete.success', [], 'api')
        ]);
    }

    #[Route('/stats/progress', name: 'api_weight_entries_progress', methods: ['GET'])]
    public function progress(Request $request, #[CurrentUser] ?User $user): Response
    {
        if (!$user instanceof \App\Entity\User) {
            return ApiResponseWrapper::error(
                $this->localeService->trans('errors.authentication.required', [], 'api'),
                Response::HTTP_UNAUTHORIZED
            );
        }

        $days = $request->query->getInt('days', 30);
        $entries = $this->weightEntryDataProvider->getEntriesForProgress($user, $days);
        $totalWeightLoss = $this->weightEntryDataProvider->getTotalWeightLoss($user);

        $progressData = [];
        foreach ($entries as $entry) {
            $bmi = null;
            if ($entry->getWeight() !== null && 
                $user->getHeight() !== null && 
                $user->getWeightUnit() !== null && 
                $user->getHeightUnit() !== null) {
                $bmi = $this->bmiCalculator->calculateBmi(
                    (float) $entry->getWeight(),
                    (float) $user->getHeight(),
                    (string) $user->getWeightUnit(),
                    (string) $user->getHeightUnit()
                );
            }
            
            $progressData[] = $this->weightEntryTransformer->transformForProgress($entry, $bmi);
        }

        $currentWeight = $entries === [] ? $user->getInitialWeight() : end($entries)->getWeight();

        return ApiResponseWrapper::success([
            'progress' => $progressData,
            'summary' => [
                'totalWeightLoss' => $totalWeightLoss,
                'currentWeight' => $currentWeight,
                'targetWeight' => $user->getTargetWeight(),
                'remainingWeight' => $currentWeight - $user->getTargetWeight(),
                'period' => $days . ' derniers jours',
            ],
        ]);
    }
}
