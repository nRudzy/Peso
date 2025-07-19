<?php

declare(strict_types=1);

namespace App\Tests\Unit\Service;

use PHPUnit\Framework\TestCase;

/**
 * Example unit test class
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
        $this->assertEquals($expected, $result);
    }
    
    public function testWithDataProvider(): void
    {
        $this->markTestIncomplete('This test is not yet implemented.');
    }
    
    /**
     * @dataProvider provideTestData
     */
    public function testWithDataProviderExample(string $input, string $expected): void
    {
        $this->assertEquals($expected, strtoupper($input));
    }
    
    public function provideTestData(): \Generator
    {
        yield 'lowercase' => ['hello', 'HELLO'];
        yield 'mixed case' => ['HeLLo', 'HELLO'];
        yield 'uppercase' => ['HELLO', 'HELLO'];
    }
} 