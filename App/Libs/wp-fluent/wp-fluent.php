<?php defined('ABSPATH') or die;

// Autoload plugin.
require 'autoload.php';

if (! function_exists('PINGLY_DB')) {
    /**
     * @return \WpFluent\QueryBuilder\QueryBuilderHandler
     */
    function PINGLY_DB() {
        static $PINGLY_DB;

        if (! $PINGLY_DB) {
            global $wpdb;

            $connection = new \WpFluent\Connection($wpdb, ['prefix' => $wpdb->prefix]);

            $PINGLY_DB = new \WpFluent\QueryBuilder\QueryBuilderHandler($connection);
        }

        return $PINGLY_DB;
    }
}