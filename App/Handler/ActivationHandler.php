<?php

namespace PinglyProductEnquiry\Handler;

if (!defined('ABSPATH')) {
    exit;
}

use PinglyProductEnquiry\Settings;
use PinglyProductEnquiry\Database\DBMigrator;

class ActivationHandler
{
    public function activate($network_wide)
    {
        require_once(PINGLY_PLUGIN_DIR_PATH . 'App/Settings.php');
        require_once(PINGLY_PLUGIN_DIR_PATH . 'App/Database/DBMigrator.php');
        
        update_option('pingly_version', PINGLY_PLUGIN_VERSION, 'no');

        $settings          = new Settings();
        $getConfigs        = $settings->getConfigs();
        $getActiveModule   = $settings->getActiveModule();
        $pinglyLicense       = $settings->pinglyLicense();

        foreach ($getConfigs as $key => $value) {
            if (!get_option($key)) {
                update_option($key, $value);
            }
        }

        if (!get_option('pingly_active_module')) {
            update_option('pingly_active_module', $getActiveModule);
        }

        if (!get_option('pingly_license')) {
            update_option('pingly_license', $pinglyLicense);
        }

        // Run DB Migrations
        DBMigrator::run($network_wide);
    }
}