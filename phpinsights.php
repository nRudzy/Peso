<?php

declare(strict_types=1);

return [
    /*
    |--------------------------------------------------------------------------
    | Default Preset
    |--------------------------------------------------------------------------
    |
    | This option controls the default preset that will be used by PHP Insights
    | to make your code reliable, simple, and clean. However, you can always
    | adjust the `Metrics` and `Insights` below in this configuration file.
    |
    | Supported: "default", "laravel", "symfony", "magento2", "drupal"
    |
    */
    'preset' => 'symfony',

    /*
    |--------------------------------------------------------------------------
    | IDE
    |--------------------------------------------------------------------------
    |
    | This options allow to add hyperlinks in your terminal to quickly open
    | files in your favorite IDE while browsing your PhpInsights report.
    |
    | Supported: "textmate", "macvim", "emacs", "sublime", "phpstorm",
    | "atom", "vscode".
    |
    */
    'ide' => 'vscode',

    /*
    |--------------------------------------------------------------------------
    | Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may adjust all the various `Insights` that will be used by PHP
    | Insights. This is the place to dig deep into the provided `Metrics` and
    | into the `Insights` to debug your code. Take a look at the "Config" tab.
    |
    */
    'exclude' => [
        'src/Kernel.php',
        'tests/bootstrap.php',
        'var',
        'vendor',
        'public',
        'migrations',
    ],

    'add' => [
        // \ExampleMetric::class => [
        //     ExampleInsight::class,
        // ]
    ],

    'remove' => [
        \NunoMaduro\PhpInsights\Domain\Insights\ForbiddenDefineFunctions::class,
        \NunoMaduro\PhpInsights\Domain\Insights\ForbiddenFinalClasses::class,
        \NunoMaduro\PhpInsights\Domain\Insights\ForbiddenPrivateMethods::class,
        \NunoMaduro\PhpInsights\Domain\Insights\ForbiddenTraits::class,
        \NunoMaduro\PhpInsights\Domain\Insights\ForbiddenNormalClasses::class,
        \SlevomatCodingStandard\Sniffs\ControlStructures\DisallowEmptySniff::class,
        \SlevomatCodingStandard\Sniffs\Classes\SuperfluousAbstractClassNamingSniff::class,
        \SlevomatCodingStandard\Sniffs\Classes\SuperfluousInterfaceNamingSniff::class,
        \SlevomatCodingStandard\Sniffs\Classes\SuperfluousExceptionNamingSniff::class,
        \SlevomatCodingStandard\Sniffs\Commenting\DisallowOneLinePropertyDocCommentSniff::class,
        \SlevomatCodingStandard\Sniffs\TypeHints\DisallowMixedTypeHintSniff::class,
        \SlevomatCodingStandard\Sniffs\Classes\ModernClassNameReferenceSniff::class,
        \SlevomatCodingStandard\Sniffs\Functions\UnusedParameterSniff::class,
        \PHP_CodeSniffer\Standards\Generic\Sniffs\Files\LineLengthSniff::class,
    ],

    'config' => [
        \SlevomatCodingStandard\Sniffs\Functions\FunctionLengthSniff::class => [
            'maxLinesLength' => 30,
        ],
        \SlevomatCodingStandard\Sniffs\Complexity\Cognitive::class => [
            'warningThreshold' => 10,
            'errorThreshold' => 15,
        ],
        \SlevomatCodingStandard\Sniffs\Files\TypeNameMatchesFileNameSniff::class => [
            'rootNamespaces' => [
                'src' => 'App',
                'tests' => 'App\Tests',
            ],
        ],
        \PHP_CodeSniffer\Standards\Generic\Sniffs\Files\LineLengthSniff::class => [
            'lineLimit' => 120,
            'absoluteLineLimit' => 160,
        ],
        \PhpCsFixer\Fixer\Import\OrderedImportsFixer::class => [
            'imports_order' => ['class', 'function', 'const'],
            'sort_algorithm' => 'alpha',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Requirements
    |--------------------------------------------------------------------------
    |
    | Here you may define a level you want to reach per `Insights` category.
    | When a score is lower than the minimum level defined, then an error
    | code will be returned. This is optional and individually defined.
    |
    */
    'requirements' => [
        'min-quality' => 90,
        'min-complexity' => 85,
        'min-architecture' => 90,
        'min-style' => 95,
        'disable-security-check' => false,
    ],

    /*
    |--------------------------------------------------------------------------
    | Threads
    |--------------------------------------------------------------------------
    |
    | Here you may adjust how many threads (core) PHPInsights can use to perform
    | the analyse. This is optional, should be a positive integer and defaults to
    | the number of cores available in the system.
    |
    */
    'threads' => null,
]; 