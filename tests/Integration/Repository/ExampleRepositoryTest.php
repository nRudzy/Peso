<?php

declare(strict_types=1);

namespace App\Tests\Integration\Repository;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

/**
 * Example integration test class for repositories.
 *
 * Integration tests test how components work together,
 * typically with real database interactions.
 */
class ExampleRepositoryTest extends KernelTestCase
{
    private EntityManagerInterface $entityManager;

    protected function setUp(): void
    {
        $kernel = self::bootKernel();
        $this->entityManager = $kernel->getContainer()
            ->get('doctrine.orm.entity_manager');
    }

    public function testRepositoryExists(): void
    {
        $this->assertInstanceOf(
            EntityManagerInterface::class,
            $this->entityManager
        );
    }

    protected function tearDown(): void
    {
        parent::tearDown();

        // Clean up
        $this->entityManager->close();
    }
}
