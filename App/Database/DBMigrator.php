<?php

namespace WPCreativeIdeaProductEnquiry\Database;

if (!defined('ABSPATH')) {
    exit;
}

require_once(ABSPATH . 'wp-admin/includes/upgrade.php');
use WPCreativeIdeaProductEnquiry\Database\Migrations\WPCreativeIdeaProductEnquiryMigrator;

class DBMigrator
{
    public static function run($network_wide = false)
    {
        if ($network_wide) {
            // Retrieve all site IDs from this network.
            $site_ids = get_sites([
                'fields'     => 'ids',
                'network_id' => get_current_network_id(),
                'number'     => 0, // 0 = no limit (default is only 100 sites)
            ]);

            // Install the plugin for all these sites.
            foreach ($site_ids as $site_id) {
                switch_to_blog($site_id);
                static::migrate();
                restore_current_blog();
            }
        } else {
            static::migrate();
        }
    }

    private static function migrate()
    {
        require_once(WPCIPE_PLUGIN_DIR_PATH . 'App/Database/Migrations/WPCreativeIdeaProductEnquiryMigrator.php');

        WPCreativeIdeaProductEnquiryMigrator::migrate();
    }
}