<?php

declare(strict_types=1);

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Contracts\Translation\LocaleAwareInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

use function in_array;

class LocaleService
{
    private const SUPPORTED_LOCALES = ['fr', 'en'];

    private const DEFAULT_LOCALE = 'fr';

    public function __construct(
        private readonly RequestStack $requestStack,
        private readonly TranslatorInterface $translator
    ) {
    }

    /**
     * Detect locale from Accept-Language header.
     */
    public function detectLocale(): string
    {
        $request = $this->requestStack->getCurrentRequest();

        if (!$request instanceof \Symfony\Component\HttpFoundation\Request) {
            return self::DEFAULT_LOCALE;
        }

        // Check if locale is explicitly set in query parameter
        $localeParam = $request->query->get('locale');
        if ($localeParam && in_array($localeParam, self::SUPPORTED_LOCALES, true)) {
            return $localeParam;
        }

        // Check Accept-Language header
        $preferredLanguage = $request->getPreferredLanguage(self::SUPPORTED_LOCALES);

        return $preferredLanguage ?: self::DEFAULT_LOCALE;
    }

    /**
     * Set locale for current request.
     */
    public function setLocale(string $locale): void
    {
        if (in_array($locale, self::SUPPORTED_LOCALES, true) && $this->translator instanceof LocaleAwareInterface) {
            $this->translator->setLocale($locale);
        }
    }

    /**
     * Get current locale.
     */
    public function getCurrentLocale(): string
    {
        return $this->translator->getLocale();
    }

    /**
     * Get supported locales.
     */
    public function getSupportedLocales(): array
    {
        return self::SUPPORTED_LOCALES;
    }

    /**
     * Translate a message with domain support.
     */
    public function trans(string $id, array $parameters = [], ?string $domain = null): string
    {
        return $this->translator->trans($id, $parameters, $domain);
    }
}
