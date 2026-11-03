<?php defined('ABSPATH') or die;

// Autoload plugin.
require 'autoload.php';

if (! function_exists('WPCIPE_DB')) {
    /**
     * @return \WpFluent\QueryBuilder\QueryBuilderHandler
     */
    function WPCIPE_DB() {
        static $WPCIPE_DB;

        if (! $WPCIPE_DB) {
            global $wpdb;

            $connection = new \WpFluent\Connection($wpdb, ['prefix' => $wpdb->prefix]);

            $WPCIPE_DB = new \WpFluent\QueryBuilder\QueryBuilderHandler($connection);
        }

        return $WPCIPE_DB;
    }
}