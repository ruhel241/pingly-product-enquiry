<?php

namespace WPCreativeIdeaProductEnquiry\Classes;

use WC_Settings_Page;

if (!defined('ABSPATH')) exit; // Exit if accessed directly
 /**
 * Settings class
 *
 * @since 1.0.1
 */
class WPCreativeIdeaProductEnquirySettings extends WC_Settings_Page
{
    /**
     * Setup settings class
     *
     * @since  1.0
     */
    public function __construct()
    {
        $this->id = 'wpcreativeidea-product-enquiry';
        $this->label = __('Product Enquiry', 'wpcreativeidea-product-enquiry');

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
        echo wp_kses_post('<div id="wp_wpcipe_settings_app"></div>');
    }

    public function enqueueAdminScripts()
    {
       // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Reading the tab name for display only, nothing is saved. 
        $currentTab = isset($_GET['tab']) ? sanitize_key(wp_unslash($_GET['tab'])) : ''; 
        
        if ($currentTab === $this->id) {

            $assetsUrl = WPCIPE_PLUGIN_DIR_URL . 'assets/';

            wp_enqueue_script('wpcipe_admin_boot', $assetsUrl . 'admin/js/boot.js', array('jquery'), WPCIPE_PLUGIN_VERSION, false);
            wp_enqueue_script('wpcipe_admin_app', $assetsUrl . 'admin/js/start.js', array('jquery'), WPCIPE_PLUGIN_VERSION, false);
            wp_enqueue_style('wpcipe_admin_css', $assetsUrl . 'admin/css/admin.css', array(), WPCIPE_PLUGIN_VERSION);

            wp_localize_script('wpcipe_admin_app', 'WPCreativeIdeaProductEnquiryAdminVars', array(
                'assets_url'  => $assetsUrl,
                'images_url'  => $assetsUrl.'admin/images/',
                'ajaxurl'     => admin_url('admin-ajax.php'),
                'admin_url'   => admin_url('post.php'),
                'slug'        => 'wpcreativeidea-product-enquiry',
                'site_url'    => get_site_url(),
                'nonce'       => wp_create_nonce('wpcipe_nonce'),
                'server_time' => current_time('mysql'),
                'woo_active'  => defined('WC_VERSION'),
                'has_pro'     => defined('WPCIPE_PRO')
            ));
        }
    }
}

return new WPCreativeIdeaProductEnquirySettings();
