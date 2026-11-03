<?php

namespace WPCreativeIdeaProductEnquiry\Database\Migrations;

if (!defined('ABSPATH')) {
    exit;
}

class WPCreativeIdeaProductEnquiryMigrator
{
    static $tableName = 'wpcipe_product_enquiry';

    public static function migrate()
    {
        global $wpdb;

        require_once ABSPATH . 'wp-admin/includes/upgrade.php';

        $charsetCollate = $wpdb->get_charset_collate();
        $table          = $wpdb->prefix . static::$tableName;

        $sql = "CREATE TABLE {$table} (
            id BIGINT(20) UNSIGNED NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NULL,
            email VARCHAR(255) NULL,
            phone_number VARCHAR(255) NULL,
            enquiry LONGTEXT NULL,
            type VARCHAR(120) NULL,
            status VARCHAR(120) NULL,
            subscribe VARCHAR(11) NULL,
            settings LONGTEXT NULL,
            created_at TIMESTAMP NULL,
            updated_at TIMESTAMP NULL,
            PRIMARY KEY  (id)
        ) {$charsetCollate};";

        dbDelta($sql);
    }
}