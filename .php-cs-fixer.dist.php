<?php

$finder = (new PhpCsFixer\Finder())
    ->in(__DIR__)
    ->exclude([
        'var',
        'vendor',
        'public',
        'migrations',
    ])
    ->notPath('src/Kernel.php')
    ->notPath('tests/bootstrap.php')
;

return (new PhpCsFixer\Config())
    ->setRiskyAllowed(true)
    ->setRules([
        '@Symfony' => true,
        '@PSR12' => true,
        '@DoctrineAnnotation' => true,
        '@PHP80Migration' => true,
        '@PHP82Migration' => true,
        
        // Array notation
        'array_syntax' => ['syntax' => 'short'],
        'no_multiline_whitespace_around_double_arrow' => true,
        'no_trailing_comma_in_singleline_array' => true,
        'trailing_comma_in_multiline' => ['elements' => ['arrays']],
        
        // Comments
        'header_comment' => false,
        'no_empty_comment' => true,
        'single_line_comment_style' => ['comment_types' => ['hash']],
        
        // Control structures
        'no_superfluous_elseif' => true,
        'no_useless_else' => true,
        'simplified_if_return' => true,
        'yoda_style' => false,
        
        // Functions
        'void_return' => true,
        'native_function_invocation' => [
            'include' => ['@compiler_optimized'],
            'scope' => 'namespaced',
            'strict' => true,
        ],
        
        // Imports
        'ordered_imports' => [
            'imports_order' => ['class', 'function', 'const'],
            'sort_algorithm' => 'alpha',
        ],
        'global_namespace_import' => [
            'import_classes' => true,
            'import_constants' => true,
            'import_functions' => true,
        ],
        
        // Language constructs
        'declare_strict_types' => true,
        'strict_comparison' => true,
        'strict_param' => true,
        
        // Naming
        'class_attributes_separation' => [
            'elements' => [
                'const' => 'one',
                'method' => 'one',
                'property' => 'one',
            ],
        ],
        
        // Operators
        'concat_space' => ['spacing' => 'one'],
        'operator_linebreak' => ['only_booleans' => true],
        
        // PHPDoc
        'phpdoc_align' => ['align' => 'left'],
        'phpdoc_annotation_without_dot' => true,
        'phpdoc_indent' => true,
        'phpdoc_inline_tag_normalizer' => true,
        'phpdoc_no_access' => true,
        'phpdoc_no_package' => true,
        'phpdoc_order' => true,
        'phpdoc_scalar' => true,
        'phpdoc_separation' => true,
        'phpdoc_summary' => true,
        'phpdoc_to_comment' => true,
        'phpdoc_trim' => true,
        'phpdoc_types' => true,
        'phpdoc_var_without_name' => true,
        
        // Return
        'return_assignment' => true,
        'simplified_null_return' => true,
        
        // Spaces
        'no_extra_blank_lines' => [
            'tokens' => [
                'case',
                'continue',
                'curly_brace_block',
                'default',
                'extra',
                'parenthesis_brace_block',
                'square_brace_block',
                'switch',
                'throw',
                'use',
            ],
        ],
        
        // Strings
        'escape_implicit_backslashes' => true,
        'explicit_string_variable' => true,
        'simple_to_complex_string_variable' => true,
        
        // Variables
        'no_unused_imports' => true,
    ])
    ->setFinder($finder)
    ->setCacheFile('var/cache/.php-cs-fixer.cache')
; 