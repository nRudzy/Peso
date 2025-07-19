<?php

use App\Kernel;
use Doctrine\ORM\EntityManagerInterface;

require dirname(__DIR__).'/vendor/autoload.php';

$kernel = new Kernel('test', true);
$kernel->boot();
$container = $kernel->getContainer();

return $container->get(EntityManagerInterface::class); 