<?php

namespace PinglyProductEnquiry\Classes;

use WC_Settings_Page;

if (!defined('ABSPATH')) exit; // Exit if accessed directly
 /**
 * Settings class
 *
 * @since 1.0.2
 */
class PinglyProductEnquirySettings extends WC_Settings_Page
{
    /**
     * Setup settings class
     *
     * @since  1.0
     */
    public function __construct()
    {
        $this->id = 'pingly-product-enquiry';
        $this->label = __('Pingly Product Enquiry', 'pingly-product-enquiry');

        add_filter('woocommerce_settings_tabs_array', array($this, 'add_settings_page'), 20);
        add_action('woocommerce_settings_' . $this->id, array($this, 'output'));

        // Enqueue Vue.js for admin
        add_action('admin_enqueue_scripts', array($this, 'enqueueAdminScripts'));
    }

    /**
     * Output the settings
     *
     * @since 1.0
     */
    public function output()
    {
        echo wp_kses_post('<div id="wp_pingly_settings_app"></div>');
    }

    public function enqueueAdminScripts()
    {
       // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Reading the tab name for display only, nothing is saved. 
        $currentTab = isset($_GET['tab']) ? sanitize_key(wp_unslash($_GET['tab'])) : ''; 
        
        if ($currentTab === $this->id) {

            $assetsUrl = PINGLY_PLUGIN_DIR_URL . 'assets/';

            wp_enqueue_script('pingly_admin_boot', $assetsUrl . 'admin/js/boot.js', array('jquery'), PINGLY_PLUGIN_VERSION, false);
            wp_enqueue_script('pingly_admin_app', $assetsUrl . 'admin/js/start.js', array('jquery'), PINGLY_PLUGIN_VERSION, false);
            wp_enqueue_style('pingly_admin_css', $assetsUrl . 'admin/css/admin.css', array(), PINGLY_PLUGIN_VERSION);

            wp_localize_script('pingly_admin_app', 'PinglyProductEnquiryAdminVars', array(
                'assets_url'  => $assetsUrl,
                'images_url'  => $assetsUrl.'admin/images/',
                'ajaxurl'     => admin_url('admin-ajax.php'),
                'admin_url'   => admin_url('post.php'),
                'slug'        => 'pingly-product-enquiry',
                'site_url'    => get_site_url(),
                'nonce'       => wp_create_nonce('pingly_nonce'),
                'server_time' => current_time('mysql'),
                'woo_active'  => defined('WC_VERSION'),
                'has_pro'     => defined('PINGLY_PRO')
            ));
        }
    }
}

return new PinglyProductEnquirySettings();
