<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('PINGLY_Query')) {
    function PINGLY_Query()
    {
        // Load wp-fluent only once
        if (!class_exists('\WpFluent\QueryBuilder\QueryBuilderHandler')) {
            require_once PINGLY_PLUGIN_DIR_PATH . 'App/Libs/wp-fluent/wp-fluent.php';
        }

        return PINGLY_DB();
    }
}