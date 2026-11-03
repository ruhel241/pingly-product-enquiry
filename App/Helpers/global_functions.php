<?php

if (!defined('ABSPATH')) {
    exit;
}

if (!function_exists('WPCIPE_Query')) {
    function WPCIPE_Query()
    {
        // Load wp-fluent only once
        if (!class_exists('\WpFluent\QueryBuilder\QueryBuilderHandler')) {
            require_once WPCIPE_PLUGIN_DIR_PATH . 'App/Libs/wp-fluent/wp-fluent.php';
        }

        return WPCIPE_DB();
    }
}