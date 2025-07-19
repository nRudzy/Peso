<?php

declare(strict_types=1);

namespace App\Tests\Unit\Service;

use Generator;
use PHPUnit\Framework\TestCase;

/**
 * Example unit test class.
 *
 * Unit tests should test individual classes in isolation,
 * mocking all dependencies.
 */
class ExampleServiceTest extends TestCase
{
    public function testExample(): void
    {
        // Arrange
        $expected = 'Hello World';

        // Act
        $result = 'Hello World';

        // Assert
        $this->assertSame($expected, $result);
    }

    public function testWithDataProvider(): void
    {
        $this->markTestIncomplete('This test is not yet implemented.');
    }

    #[\PHPUnit\Framework\Attributes\DataProvider('provideTestData')]
    public function testWithDataProviderExample(string $input, string $expected): void
    {
        $this->assertSame($expected, strtoupper($input));
    }

    public static function provideTestData(): Generator
    {
        yield 'lowercase' => ['hello', 'HELLO'];
        yield 'mixed case' => ['HeLLo', 'HELLO'];
        yield 'uppercase' => ['HELLO', 'HELLO'];
    }
}
