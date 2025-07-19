<?php

declare(strict_types=1);

namespace App\EventListener;

use App\Service\LocaleService;
use Symfony\Component\EventDispatcher\Attribute\AsEventListener;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

#[AsEventListener(event: KernelEvents::REQUEST, priority: 20)]
class LocaleListener
{
    public function __construct(
        private readonly LocaleService $localeService
    ) {
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        $request = $event->getRequest();

        // Skip locale detection for non-main requests
        if (!$event->isMainRequest()) {
            return;
        }

        // Detect and set locale
        $locale = $this->localeService->detectLocale();
        $this->localeService->setLocale($locale);

        // Set locale on request for other components
        $request->setLocale($locale);
    }
}
