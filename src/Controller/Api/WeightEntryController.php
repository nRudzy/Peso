<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Entity\WeightEntry;
use App\Repository\WeightEntryRepository;
use App\Service\BmiCalculator;
use App\Service\LocaleService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;
use Symfony\Component\Validator\Validator\ValidatorInterface;

#[Route('/api/weight-entries')]
class WeightEntryController extends AbstractController
{
    public function __construct(
        private WeightEntryRepository $weightEntryRepository,
        private EntityManagerInterface $entityManager,
        private ValidatorInterface $validator,
        private BmiCalculator $bmiCalculator,
        private LocaleService $localeService
    ) {}

    #[Route('', name: 'api_weight_entries_list', methods: ['GET'])]
    public function list(Request $request, #[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        $limit = $request->query->getInt('limit', 50);
        $entries = $this->weightEntryRepository->findByUser($user, $limit);

        $result = [];
        foreach ($entries as $entry) {
            $result[] = [
                'id' => $entry->getId(),
                'weight' => $entry->getWeight(),
                'date' => $entry->getDate()->format('Y-m-d'),
                'comment' => $entry->getComment(),
                'createdAt' => $entry->getCreatedAt()->format('Y-m-d H:i:s')
            ];
        }

        return new JsonResponse([
            'entries' => $result,
            'total' => count($result)
        ]);
    }

    #[Route('/latest', name: 'api_weight_entries_latest', methods: ['GET'])]
    public function latest(#[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        $entry = $this->weightEntryRepository->findLatestByUser($user);

        if (!$entry) {
            return new JsonResponse(['entry' => null]);
        }

        return new JsonResponse([
            'entry' => [
                'id' => $entry->getId(),
                'weight' => $entry->getWeight(),
                'date' => $entry->getDate()->format('Y-m-d'),
                'comment' => $entry->getComment(),
                'createdAt' => $entry->getCreatedAt()->format('Y-m-d H:i:s')
            ]
        ]);
    }

    #[Route('', name: 'api_weight_entries_create', methods: ['POST'])]
    public function create(Request $request, #[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        $data = json_decode($request->getContent(), true);

        if (!$data || empty($data['weight'])) {
            return new JsonResponse([
                'error' => $this->localeService->trans('required_field', ['field' => 'weight'], 'validators')
            ], Response::HTTP_BAD_REQUEST);
        }

        $entry = new WeightEntry();
        $entry->setUser($user);
        $entry->setWeight((float) $data['weight']);
        
        if (isset($data['date'])) {
            try {
                $entry->setDate(new \DateTimeImmutable($data['date']));
            } catch (\Exception $e) {
                return new JsonResponse([
                    'error' => $this->localeService->trans('invalid_date', [], 'validators')
                ], Response::HTTP_BAD_REQUEST);
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
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $this->weightEntryRepository->save($entry, true);

        return new JsonResponse([
            'message' => $this->localeService->trans('endpoints.weight_entries.create.success', [], 'api'),
            'entry' => [
                'id' => $entry->getId(),
                'weight' => $entry->getWeight(),
                'date' => $entry->getDate()->format('Y-m-d'),
                'comment' => $entry->getComment(),
                'createdAt' => $entry->getCreatedAt()->format('Y-m-d H:i:s')
            ]
        ], Response::HTTP_CREATED);
    }

    #[Route('/{id}', name: 'api_weight_entries_show', methods: ['GET'])]
    public function show(int $id, #[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        $entry = $this->weightEntryRepository->find($id);

        if (!$entry || $entry->getUser()->getId() !== $user->getId()) {
            return new JsonResponse([
                'error' => $this->localeService->trans('endpoints.weight_entries.update.error.not_found', [], 'api')
            ], Response::HTTP_NOT_FOUND);
        }

        return new JsonResponse([
            'entry' => [
                'id' => $entry->getId(),
                'weight' => $entry->getWeight(),
                'date' => $entry->getDate()->format('Y-m-d'),
                'comment' => $entry->getComment(),
                'createdAt' => $entry->getCreatedAt()->format('Y-m-d H:i:s'),
                'updatedAt' => $entry->getUpdatedAt()?->format('Y-m-d H:i:s')
            ]
        ]);
    }

    #[Route('/{id}', name: 'api_weight_entries_update', methods: ['PUT'])]
    public function update(int $id, Request $request, #[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        $entry = $this->weightEntryRepository->find($id);

        if (!$entry || $entry->getUser()->getId() !== $user->getId()) {
            return new JsonResponse([
                'error' => $this->localeService->trans('endpoints.weight_entries.update.error.not_found', [], 'api')
            ], Response::HTTP_NOT_FOUND);
        }

        $data = json_decode($request->getContent(), true);

        if (!$data) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.invalid_json', [], 'messages')
            ], Response::HTTP_BAD_REQUEST);
        }

        if (isset($data['weight'])) {
            $entry->setWeight((float) $data['weight']);
        }

        if (isset($data['date'])) {
            try {
                $entry->setDate(new \DateTimeImmutable($data['date']));
            } catch (\Exception $e) {
                return new JsonResponse([
                    'error' => $this->localeService->trans('invalid_date', [], 'validators')
                ], Response::HTTP_BAD_REQUEST);
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
            return new JsonResponse(['errors' => $errorMessages], Response::HTTP_BAD_REQUEST);
        }

        $this->weightEntryRepository->save($entry, true);

        return new JsonResponse([
            'message' => $this->localeService->trans('endpoints.weight_entries.update.success', [], 'api'),
            'entry' => [
                'id' => $entry->getId(),
                'weight' => $entry->getWeight(),
                'date' => $entry->getDate()->format('Y-m-d'),
                'comment' => $entry->getComment(),
                'createdAt' => $entry->getCreatedAt()->format('Y-m-d H:i:s'),
                'updatedAt' => $entry->getUpdatedAt()?->format('Y-m-d H:i:s')
            ]
        ]);
    }

    #[Route('/{id}', name: 'api_weight_entries_delete', methods: ['DELETE'])]
    public function delete(int $id, #[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        $entry = $this->weightEntryRepository->find($id);

        if (!$entry || $entry->getUser()->getId() !== $user->getId()) {
            return new JsonResponse([
                'error' => $this->localeService->trans('endpoints.weight_entries.update.error.not_found', [], 'api')
            ], Response::HTTP_NOT_FOUND);
        }

        $this->weightEntryRepository->remove($entry, true);

        return new JsonResponse([
            'message' => $this->localeService->trans('endpoints.weight_entries.delete.success', [], 'api')
        ]);
    }

    #[Route('/stats/progress', name: 'api_weight_entries_progress', methods: ['GET'])]
    public function progress(Request $request, #[CurrentUser] ?User $user): JsonResponse
    {
        if (!$user) {
            return new JsonResponse([
                'error' => $this->localeService->trans('errors.authentication.required', [], 'api')
            ], Response::HTTP_UNAUTHORIZED);
        }

        $days = $request->query->getInt('days', 30);
        $startDate = new \DateTimeImmutable("-{$days} days");
        $endDate = new \DateTimeImmutable();

        $entries = $this->weightEntryRepository->findByUserAndDateRange($user, $startDate, $endDate);
        $totalWeightLoss = $this->weightEntryRepository->calculateTotalWeightLoss($user);

        $progressData = [];
        foreach ($entries as $entry) {
            $progressData[] = [
                'date' => $entry->getDate()->format('Y-m-d'),
                'weight' => $entry->getWeight(),
                'bmi' => $this->bmiCalculator->calculateBmi(
                    $entry->getWeight(),
                    $user->getHeight(),
                    $user->getWeightUnit(),
                    $user->getHeightUnit()
                )
            ];
        }

        return new JsonResponse([
            'progress' => $progressData,
            'summary' => [
                'totalWeightLoss' => $totalWeightLoss,
                'currentWeight' => !empty($entries) ? end($entries)->getWeight() : $user->getInitialWeight(),
                'targetWeight' => $user->getTargetWeight(),
                'remainingWeight' => !empty($entries) ? end($entries)->getWeight() - $user->getTargetWeight() : $user->getInitialWeight() - $user->getTargetWeight(),
                'period' => "{$days} derniers jours"
            ]
        ]);
    }
} 