<?php

namespace WPCreativeIdeaProductEnquiry\Handler;

if (!defined('ABSPATH')) {
    exit;
}

use WPCreativeIdeaProductEnquiry\Settings;
use WPCreativeIdeaProductEnquiry\Database\DBMigrator;

class ActivationHandler
{
    public function activate($network_wide)
    {
        require_once(WPCIPE_PLUGIN_DIR_PATH . 'App/Settings.php');
        require_once(WPCIPE_PLUGIN_DIR_PATH . 'App/Database/DBMigrator.php');
        
        update_option('wpcipe_version', WPCIPE_PLUGIN_VERSION, 'no');

        $settings          = new Settings();
        $getConfigs        = $settings->getConfigs();
        $getActiveModule   = $settings->getActiveModule();
        $wpcipeLicense       = $settings->wpcipeLicense();

        foreach ($getConfigs as $key => $value) {
            if (!get_option($key)) {
                update_option($key, $value);
            }
        }

        if (!get_option('wpcipe_active_module')) {
            update_option('wpcipe_active_module', $getActiveModule);
        }

        if (!get_option('wpcipe_license')) {
            update_option('wpcipe_license', $wpcipeLicense);
        }

        // Run DB Migrations
        DBMigrator::run($network_wide);
    }
}