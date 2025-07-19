<?php

declare(strict_types=1);

namespace App\Tests\Functional\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

/**
 * Example functional test class for controllers
 * 
 * Functional tests test the entire application stack,
 * including HTTP requests and responses.
 */
class ExampleControllerTest extends WebTestCase
{
    public function testHealthCheck(): void
    {
        $client = static::createClient();
        
        // Test a basic health check endpoint (you'll need to create this)
        $client->request('GET', '/api/health');
        
        $this->assertResponseIsSuccessful();
        $this->assertResponseHeaderSame('content-type', 'application/json');
    }
    
    public function testApiDocumentationIsAccessible(): void
    {
        $client = static::createClient();
        
        // Test API documentation endpoint
        $client->request('GET', '/api/docs');
        
        $this->assertResponseIsSuccessful();
    }
    
    public function testInvalidEndpointReturns404(): void
    {
        $client = static::createClient();
        
        $client->request('GET', '/api/nonexistent');
        
        $this->assertResponseStatusCodeSame(404);
    }
} 