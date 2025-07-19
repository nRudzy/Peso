<?php

declare(strict_types=1);

use App\Kernel;
use Symfony\Bundle\FrameworkBundle\Console\Application;

require dirname(__DIR__) . '/vendor/autoload.php';

$kernel = new Kernel('test', true);

return new Application($kernel);
