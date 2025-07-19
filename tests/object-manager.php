<?php

declare(strict_types=1);

use App\Kernel;

require dirname(__DIR__) . '/vendor/autoload.php';

$kernel = new Kernel('test', true);
$kernel->boot();
$container = $kernel->getContainer();

return $container->get('doctrine.orm.entity_manager');
