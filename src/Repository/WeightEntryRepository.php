<?php

namespace App\Repository;

use App\Entity\WeightEntry;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<WeightEntry>
 *
 * @method WeightEntry|null find($id, $lockMode = null, $lockVersion = null)
 * @method WeightEntry|null findOneBy(array $criteria, array $orderBy = null)
 * @method WeightEntry[]    findAll()
 * @method WeightEntry[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WeightEntryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WeightEntry::class);
    }

    public function save(WeightEntry $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(WeightEntry $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Trouve toutes les entrées de poids d'un utilisateur
     */
    public function findByUser(User $user, ?int $limit = null): array
    {
        $qb = $this->createQueryBuilder('w')
            ->andWhere('w.user = :user')
            ->setParameter('user', $user)
            ->orderBy('w.date', 'DESC');

        if ($limit) {
            $qb->setMaxResults($limit);
        }

        return $qb->getQuery()->getResult();
    }

    /**
     * Trouve la dernière entrée de poids d'un utilisateur
     */
    public function findLatestByUser(User $user): ?WeightEntry
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.user = :user')
            ->setParameter('user', $user)
            ->orderBy('w.date', 'DESC')
            ->setMaxResults(1)
            ->getQuery()
            ->getOneOrNullResult();
    }

    /**
     * Trouve les entrées de poids d'un utilisateur dans une période donnée
     */
    public function findByUserAndDateRange(User $user, \DateTimeImmutable $startDate, \DateTimeImmutable $endDate): array
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.user = :user')
            ->andWhere('w.date >= :startDate')
            ->andWhere('w.date <= :endDate')
            ->setParameter('user', $user)
            ->setParameter('startDate', $startDate)
            ->setParameter('endDate', $endDate)
            ->orderBy('w.date', 'ASC')
            ->getQuery()
            ->getResult();
    }

    /**
     * Calcule la perte de poids totale d'un utilisateur
     */
    public function calculateTotalWeightLoss(User $user): float
    {
        $latestEntry = $this->findLatestByUser($user);
        if (!$latestEntry) {
            return 0;
        }

        return $user->getInitialWeight() - $latestEntry->getWeight();
    }

    /**
     * Trouve les entrées de poids avec les plus grandes pertes
     */
    public function findTopWeightLossEntries(User $user, int $limit = 5): array
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.user = :user')
            ->setParameter('user', $user)
            ->orderBy('w.weight', 'ASC')
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult();
    }
} 