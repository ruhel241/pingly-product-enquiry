<?php

namespace PinglyProductEnquiry\Handler;

if (!defined('ABSPATH')) {
    exit;
}

use PinglyProductEnquiry\Helpers\ArrayHelper as Arr;
use PinglyProductEnquiry\Models\PinglyProductEnquiry;
use PinglyProductEnquiry\Helpers\SanitizeValidation;

class FrontendHandler
{
    public function register()
    {
        add_action('wc_ajax_pingly_ajax_actions', [$this, 'ajaxRoutes']);
        add_action('wc_ajax_nopriv_pingly_ajax_actions', [$this, 'ajaxRoutes']);
        add_action('wp_footer', [$this, 'initHook']);
        add_action('wp_enqueue_scripts', [$this, 'enqueueScripts']);
        // shop page add enquiry button
        add_action('woocommerce_after_shop_loop_item', [$this, 'addShopPageProductEnquiryButton'], 30);
        // single page add enquiry button
        add_action('woocommerce_single_product_summary', [$this, 'addSinglePageProductEnquiryButton']);
        // Add enquires ue button cart page and order summary
        add_filter('woocommerce_get_item_data',[$this, 'addProductEnquiryButtonCartPageAndOrderSummary'], 10, 2);
       
        // shortcode register
        $this->registerShortcodes();

    }

    private function resolveProduct($productId = null, $productSlug = null)
    {
        // By ID
        if (!empty($productId) && is_numeric($productId)) {
            $product = wc_get_product((int) $productId);
            if ($product) {
                return $product;
            }
        }

        // By slug
        if (!empty($productSlug)) {
            $post = get_page_by_path($productSlug, OBJECT, 'product');
            if ($post) {
                return wc_get_product($post->ID);
            }
        }

        return null; // default enquiry
    }
    
    // shop page Enquiry Button
    public function addShopPageProductEnquiryButton() {
        $PinglyProductEnquirySettings = get_option('pingly_settings', []);
        $settings               = $PinglyProductEnquirySettings['settings'];
        $shopPageEnable         = Arr::get($settings, 'shop_page_enable', 'yes' );
        $inStockButtonText      = Arr::get($settings, 'in_stock_shop_button_text', 'Enquiry Us');
        $outOfStockButtonText   = Arr::get($settings, 'out_of_stock_shop_button_text', 'Email when stock available');
        $backOrderButtonText    = Arr::get($settings, 'backorder_shop_button_text', 'Pre-order Enquiry');

        if ( $shopPageEnable !== 'yes' ) {
            return;
        }

        global $product;

        if ( ! $product instanceof \WC_Product ) {
            return;
        }

        $productId   = $product->get_id();
        $title       = $product->get_title();
        $stockStatus = $product->get_stock_status();

        // Replace {title}
        $inStockButtonText    = str_replace('{title}', $title, $inStockButtonText);
        $outOfStockButtonText = str_replace('{title}', $title, $outOfStockButtonText);
        $backOrderButtonText  = str_replace('{title}', $title, $backOrderButtonText);

        /** OUT OF STOCK */
        if ( 'outofstock' === $stockStatus ) {
            echo '<a href="#" class="button pingly-button pingly-shop-btn-outofstock" data-product-id="' . esc_attr( $productId ) . '">'
                . esc_html( $outOfStockButtonText )
                . '</a>';
            return;
        }

        /** BACKORDER */
        if ( 'onbackorder' === $stockStatus ) {
            echo '<a href="#" class="button pingly-button pingly-shop-btn-backorder" data-product-id="' . esc_attr( $productId ) . '">'
                . esc_html( $backOrderButtonText )
                . '</a>';
            return;
        }

        /** IN STOCK */
        if ( 'instock' === $stockStatus ) {
            echo '<a href="#" class="button pingly-button pingly-shop-btn-instock" data-product-id="' . esc_attr( $productId ) . '">'
                . esc_html( $inStockButtonText )
                . '</a>';
            return;
        }
    }

    // single page Enquiry Button
    public function addSinglePageProductEnquiryButton() {
        $PinglyProductEnquirySettings = get_option('pingly_settings', []);
        $settings               = $PinglyProductEnquirySettings['settings'];
        $singlePageEnable       = Arr::get($settings, 'single_page_enable', 'yes');
        $inStockButtonText      = Arr::get($settings, 'in_stock_single_button_text', 'Enquiry Us');
        $outOfStockButtonText   = Arr::get($settings, 'out_of_stock_single_button_text', 'Email when stock available');
        $backOrderButtonText    = Arr::get($settings, 'backorder_single_button_text', 'Pre-order Enquiry');

        if ( $singlePageEnable !== 'yes' ) {
            return;
        }

        global $product;

        if ( ! $product instanceof \WC_Product ) {
            return;
        }

        $productId   = $product->get_id();
        $title       = $product->get_title();
        $stockStatus = $product->get_stock_status();

        // Replace {title}
        $inStockButtonText    = str_replace('{title}', $title, $inStockButtonText);
        $outOfStockButtonText = str_replace('{title}', $title, $outOfStockButtonText);
        $backOrderButtonText  = str_replace('{title}', $title, $backOrderButtonText);

        /** OUT OF STOCK */
        if ( $stockStatus === 'outofstock' ) {
            add_filter('woocommerce_get_availability_text', function ($availability) use ($outOfStockButtonText, $productId) {
                $button = '<br><br><a href="#" class="button pingly-button pingly-single-btn-outofstock" data-product-id="' . esc_attr($productId) . '">'
                            . esc_html($outOfStockButtonText) .
                        '</a>';
                return $availability . $button;
            }, 20);

            return;
        }

        /** BACKORDER */
        if ( $stockStatus === 'onbackorder' ) {
            add_action('woocommerce_after_add_to_cart_button', function () use ($backOrderButtonText, $productId) {
                echo '<a href="#" class="button pingly-button pingly-single-btn-backorder" data-product-id="' . esc_attr($productId) . '">'
                        . esc_html($backOrderButtonText) .
                    '</a>';
            }, 20);

            return;
        }

        /** IN STOCK */
        if ( $stockStatus === 'instock' ) {
            add_action('woocommerce_after_add_to_cart_button', function () use ($inStockButtonText, $productId) {
                echo '<a href="#" class="button pingly-button pingly-single-btn-instock" data-product-id="' . esc_attr($productId) . '">'
                        . esc_html($inStockButtonText) .
                    '</a>';
            }, 20);
            return;
        }
    }

    public function addProductEnquiryButtonCartPageAndOrderSummary($item_data, $cart_item) {
        $PinglyProductEnquirySettings         = get_option('pingly_settings', []);
        $settings                       = $PinglyProductEnquirySettings['settings'];
        $cartPageEnquiryUsBtnText       = Arr::get($settings, 'cart_page_enquiry_button_text', 'Enquiry us' );
        $cartPageEnquiryUsBtnEnable     = Arr::get($settings, 'cart_page_enquiry_btn_enable', 'yes' );
        $orderSummaryEnquiryUsBtnText   = Arr::get($settings, 'order_summary_enquiry_button_text', 'Enquiry us' );
        $orderSummaryEnquiryUsBtnEnable = Arr::get($settings, 'order_summary_enquiry_btn_enable', 'yes' );
        
        if ( empty($cart_item['data']) ) {
            return $item_data;
        }

        // Detect contexts
        $isCart       = is_cart();
        $isCheckout   = is_checkout();
        $activeModules     = get_option('pingly_active_module', []);
        $isQuickCartPopupPluginActive = defined('QUICKCART_PLUGIN_VERSION') || ( $activeModules['quick_cart_popup_module'] ?? '' ) === 'yes';
       
        $buttonText = "";
        $buttonClass = "";

        // ---- Cart Page ----
        if ( $isCart ) {
            if ($cartPageEnquiryUsBtnEnable !== 'yes') {
                return $item_data;
            }
            $buttonText = $cartPageEnquiryUsBtnText;
            $buttonClass = 'pingly-cart-page-btn';
        }

        // ---- Checkout Page ----
        elseif ( $isCheckout ) {
            if ($orderSummaryEnquiryUsBtnEnable !== 'yes') {
                return $item_data;
            }
            $buttonText = $orderSummaryEnquiryUsBtnText;
            $buttonClass = 'pingly-order-summary-btn';
        }

        // ---- Quick Cart Popup ----
        elseif ( $isQuickCartPopupPluginActive ) {
            if ($orderSummaryEnquiryUsBtnEnable !== 'yes') {
                return $item_data;
            }
            $buttonText = $orderSummaryEnquiryUsBtnText;
            $buttonClass = 'pingly-order-summary-btn';
        }

    
        if ( ! empty($buttonText) ) {
            $item_data[] = [
                'key'   => __('&nbsp;', 'pingly-product-enquiry'),
                'value' => '<a href="#" class="button pingly-button '.esc_attr($buttonClass).'" data-product-slug="' . esc_attr($cart_item['data']->get_slug()) . '"> '.wp_kses_post($buttonText). '</a>'
            ];
        }

        return $item_data;
    }

    /**
     * Initialize modal HTML output
    */
    public function initHook()
    {   // enquiry us modal open handler
        $this->enquireUsModalHandler();
    }

    public function registerShortcodes()
    {   
        add_shortcode('pingly_button', function ($attr) {
            $builder =  $this->buttonRender($attr);
            return $builder; 
        });
    }

    public function buttonRender($attr)
    {
        $PinglyProductEnquirySettings = get_option('pingly_settings', []);
        $settings      = $PinglyProductEnquirySettings['settings'] ?? [];

        $buttonText = Arr::get($settings, 'shortcode_enquiry_button_text', 'Enquiry us');

        // Default shortcode attributes
        $attr = shortcode_atts([
            'product_id'   => '',
            'product_slug' => '',
        ], $attr);

        ob_start();
        ?>
            <a href="#"
                class="button pingly-button pingly-shortcode-btn"
                data-product-id="<?php echo intval($attr['product_id']); ?>"
                data-product-slug="<?php echo esc_attr($attr['product_slug']); ?>">
                <?php echo esc_html($buttonText); ?>
            </a>
        <?php
        return ob_get_clean();
    }

    /**
     * Master AJAX Router
     */
    public function ajaxRoutes()
    {
        if (!check_ajax_referer('pingly_public_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

        // phpcs:disable WordPress.Security.NonceVerification.Recommended.
        $route = isset($_REQUEST['route']) ? sanitize_key(wp_unslash($_REQUEST['route'])) : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

        if (!$route) {
            wp_send_json_error([
                'message' => __('Invalid route', 'pingly-product-enquiry')
            ], 400);
        }

        $validRoutes = [
            'pingly_details' => 'savePinglyProductEnquiryDetails',
            'pingly_form'    => 'PinglyProductEnquiryModalForm'
        ];

    
        if (!isset($validRoutes[$route])) {
            wp_send_json_error([
                'message' => __('Invalid route', 'pingly-product-enquiry')
            ], 400);
        }

        // Must run before the handler, because handlers end the request with wp_send_json_*().
        do_action('pingly_public_ajax_handler_catch', $route);

        $this->{$validRoutes[$route]}();

        wp_die();
    }

    /**
     * Enqueue CSS & JS
     */
    public function enqueueScripts()
    {
        wp_enqueue_style(
            "pingly_css",
            PINGLY_PLUGIN_DIR_URL . "assets/public/css/pingly-product-enquiry.css",
            [],
            PINGLY_PLUGIN_VERSION
        );

        wp_enqueue_script(
            "pingly_public_js",
            PINGLY_PLUGIN_DIR_URL . "assets/public/js/pingly-product-enquiry.js",
            ['jquery'],
            PINGLY_PLUGIN_VERSION,
            true
        );

        $this->styleHandler();

        $settings          = get_option('pingly_settings', []);
        $activeModules     = get_option('pingly_active_module', []);

        wp_localize_script('pingly_public_js', 'PinglyProductEnquiryPublicVars', [
            'ajaxurl'            => admin_url('admin-ajax.php'),
            'site_url'           => get_site_url(),
            'nonce'              => wp_create_nonce('pingly_public_nonce'),
            'get_active_modules' => $activeModules,
            'pingly_settings'=> $settings,
        ]);
    }

    public function PinglyProductEnquiryModalForm()
    {
        if (!check_ajax_referer('pingly_public_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

       // Nonce is verified at the top of this method.
        // phpcs:disable WordPress.Security.NonceVerification.Recommended
        $productId   = isset($_REQUEST['product_id'])   ? absint($_REQUEST['product_id']) : 0;
        $productSlug = isset($_REQUEST['product_slug']) ? sanitize_title(wp_unslash($_REQUEST['product_slug'])) : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

        $product = $this->resolveProduct($productId, $productSlug);

        wp_send_json_success([
            'message'   => 'Enquiry form loaded',
            'fragments' => [
                '.pingly-form-container' => $this->enquiryUsHtml($product),
            ],
        ]);
    }

    /**
     * Modal HTML Output
    */
    public function enquireUsModalHandler()
    {   ?>
            <div class="pingly-modal-wrapper" style="display:none;">
                <div class="pingly-modal-content">
                    <?php echo wp_kses($this->enquiryUsHtml(), $this->allowedHtml()); ?>
                    <!-- loading -->
                    <div id="pingly-loading-view" style="display: none;">
                        <div class="pingly-loading-spinner">
                           <img src="<?php echo esc_url(PINGLY_PLUGIN_DIR_URL . 'assets/public/images/loading.gif'); ?>" alt="">
                        </div>
                        <h2 class="pingly-loading-title">Loading...</h2>
                    </div>
                </div>
            </div>
        <?php
    }

    public function enquiryUsHtml($product = null) 
    {
        $PinglyProductEnquirySettings = get_option('pingly_settings', []);
        $settings      =  $PinglyProductEnquirySettings['settings'];

        // -------- SAFE PRODUCT HANDLING --------
        $isDefaultEnquiry = ! ($product instanceof \WC_Product);

        if ($isDefaultEnquiry) {
            $title     = __('General Enquiry', 'pingly-product-enquiry');
            $productId = 0;
        } else {
            $title     = $product->get_title();
            $productId = $product->get_id();
        }

        $inStockFormHeading    = Arr::get($settings, 'in_stock_form_heading', 'Enquiry Us');
        $outOfStockFormHeading = Arr::get($settings, 'out_of_stock_form_heading', 'Email when stock available');
        $backOrderFormHeading  = Arr::get($settings, 'backorder_form_heading', 'Pre-order Enquiry');
        $enquiryFormTabEnable  = Arr::get($settings, 'enquiry_form_tab_enable', 'no' );
        $enquirySubmitButtonText = Arr::get($settings, 'enquiry_submit_button_text', 'Submit Enquiry' );
        $whatsappTabEnable     = Arr::get($settings, 'whatsapp_tab_enable', 'no' );
        $smsTabEnable          = Arr::get($settings, 'sms_tab_enable', 'no' );
        $enquiryTabText        = Arr::get($settings, 'enquiry_tab_text', 'Enquiry Form' );
        // whatsApp
        $whatsappTabText       = Arr::get($settings, 'whatsapp_tab_text', 'Contact on whatsapp' );
        $whatsappTitleText     = Arr::get($settings, 'whatsapp_title_text', 'Chat with us on WhatsApp' );
        $whatsappButtonText    = Arr::get($settings, 'whatsapp_button_text', 'Chat on WhatsApp' );
        $whatsappNumbers       = Arr::get($settings, 'whatsapp_numbers', []);
        //SMS
        $smsTabText            = Arr::get($settings, 'sms_tab_text', 'Contact on sms' );
        $smsTitleText          = Arr::get($settings, 'sms_title_text', 'Chat with us on SMS' );
        $smsButtonText         = Arr::get($settings, 'sms_button_text', 'Send SMS' );
        $smsMessage            = Arr::get($settings, 'sms_message', 'Hello' );
        $smsNumbers            = Arr::get($settings, 'sms_numbers', []);

        // /** Replace {title} placeholder */
        $inStockFormHeading    = str_replace('{title}', $title, $inStockFormHeading);
        $outOfStockFormHeading = str_replace('{title}', $title, $outOfStockFormHeading);
        $backOrderFormHeading  = str_replace('{title}', $title, $backOrderFormHeading);

        // Button Text
        if (!$isDefaultEnquiry && $product->is_on_backorder(1)) {
            $buttonText = $backOrderFormHeading;
        } elseif (!$isDefaultEnquiry && !$product->is_in_stock()) {
            $buttonText = $outOfStockFormHeading;
        } else {
            $buttonText = $inStockFormHeading;
        }

        // Decide first active tab (priority order)
        $activeTab = '';

        if ($enquiryFormTabEnable === 'yes') {
            $activeTab = 'email';
        } elseif ($whatsappTabEnable === 'yes') {
            $activeTab = 'whatsapp';
        } elseif ($smsTabEnable === 'yes') {
            $activeTab = 'sms';
        }

         /** Modal HTML */

        ob_start();
        ?>
            <div class="pingly-form-container">
                <div class="pingly-header">
                    <h2 class="pingly-title"><?php echo esc_html($buttonText);?></h2>
                    <span class="pingly-view-close">x</span>
                </div>
                 <!-- Tabs -->
                <div class="pingly-tabs">
                    <?php if ($enquiryFormTabEnable === 'yes'): ?>
                        <div class="pingly-tab <?php echo esc_attr( $activeTab === 'email' ? 'active' : '' ); ?>" data-tab="email">
                            <svg height="16px" width="16px" fill="#666" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 512 512"  xml:space="preserve">
                                <g>
                                    <path class="st0" d="M510.746,110.361c-2.128-10.754-6.926-20.918-13.926-29.463c-1.422-1.794-2.909-3.39-4.535-5.009
                                        c-12.454-12.52-29.778-19.701-47.531-19.701H67.244c-17.951,0-34.834,7-47.539,19.708c-1.608,1.604-3.099,3.216-4.575,5.067
                                        c-6.97,8.509-11.747,18.659-13.824,29.428C0.438,114.62,0,119.002,0,123.435v265.137c0,9.224,1.874,18.206,5.589,26.745
                                        c3.215,7.583,8.093,14.772,14.112,20.788c1.516,1.509,3.022,2.901,4.63,4.258c12.034,9.966,27.272,15.45,42.913,15.45h377.51
                                        c15.742,0,30.965-5.505,42.967-15.56c1.604-1.298,3.091-2.661,4.578-4.148c5.818-5.812,10.442-12.49,13.766-19.854l0.438-1.05
                                        c3.646-8.377,5.497-17.33,5.497-26.628V123.435C512,119.06,511.578,114.649,510.746,110.361z M34.823,99.104
                                        c0.951-1.392,2.165-2.821,3.714-4.382c7.689-7.685,17.886-11.914,28.706-11.914h377.51c10.915,0,21.115,4.236,28.719,11.929
                                        c1.313,1.327,2.567,2.8,3.661,4.272l2.887,3.88l-201.5,175.616c-6.212,5.446-14.21,8.443-22.523,8.443
                                        c-8.231,0-16.222-2.99-22.508-8.436L32.19,102.939L34.823,99.104z M26.755,390.913c-0.109-0.722-0.134-1.524-0.134-2.341V128.925
                                        l156.37,136.411L28.199,400.297L26.755,390.913z M464.899,423.84c-6.052,3.492-13.022,5.344-20.145,5.344H67.244
                                        c-7.127,0-14.094-1.852-20.142-5.344l-6.328-3.668l159.936-139.379l17.528,15.246c10.514,9.128,23.922,14.16,37.761,14.16
                                        c13.89,0,27.32-5.032,37.827-14.16l17.521-15.253L471.228,420.18L464.899,423.84z M485.372,388.572
                                        c0,0.803-0.015,1.597-0.116,2.304l-1.386,9.472L329.012,265.409l156.36-136.418V388.572z"/>
                                </g>
                            </svg>
                            <?php echo esc_html($enquiryTabText); ?>
                        </div>
                    <?php endif; ?>
                    <?php if ($whatsappTabEnable === 'yes'): ?> 
                        <div class="pingly-tab <?php echo esc_attr( $activeTab === 'whatsapp' ? 'active' : '' ); ?>" data-tab="whatsapp">
                            <svg width="20px" height="20px" viewBox="-2.73 0 1225.016 1225.016" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#E0E0E0" d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="609.77" y1="1190.114" x2="609.77" y2="21.084"><stop offset="0" stop-color="#20b038"/><stop offset="1" stop-color="#60d66a"/></linearGradient><path fill="url(#a)" d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"/><image overflow="visible" opacity=".08" width="682" height="639" xlink:href="FCC0802E2AF8A915.png" transform="translate(270.984 291.372)"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"/><path fill="#FFF" d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"/></svg>
                            <?php echo esc_html($whatsappTabText); ?>
                        </div>
                    <?php endif; ?>
                    <?php if ($smsTabEnable === 'yes'): ?>
                        <div class="pingly-tab <?php echo esc_attr( $activeTab === 'sms' ? 'active' : '' ); ?>" data-tab="sms">
                            <svg fill="#666" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                                <path d="M448,0H64C28.6,0,0,28.6,0,64v256c0,35.4,28.6,64,64,64h128l-42.7,128l192-128H448c35.4,0,64-28.6,64-64V64
                                C512,28.6,483.4,0,448,0z M128,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S151.6,234.7,128,234.7z
                                M256,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S279.6,234.7,256,234.7z M384,234.7
                                c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S407.6,234.7,384,234.7z"/>
                            </svg>
                            <?php echo esc_html($smsTabText); ?>
                        </div>
                    <?php endif; ?>
                </div>
                <div class="pingly-tab-content <?php echo esc_attr( $activeTab === 'email' ? 'active' : '' ); ?>" id="pingly-tab-email">
                    <?php echo wp_kses($this->enquireFormHtml($product, 'email', $enquirySubmitButtonText), $this->allowedHtml()); ?>
                </div>
                <div class="pingly-tab-content <?php echo esc_attr( $activeTab === 'whatsapp' ? 'active' : '' ); ?>" id="pingly-tab-whatsapp">
                    <div class="pingly-tab-box">
                        <p><?php echo esc_html($whatsappTitleText); ?></p>
                        <div class="pingly-social-numbers">
                            <?php 
                                foreach ($whatsappNumbers as $number) : 
                                    $receiverName   = isset($number['receiver_name']) ? $number['receiver_name'] : 'Support';
                                    $receiverNumber = isset($number['receiver_number']) ? $number['receiver_number'] : '';  
                            ?>
                                <div class="pingly-social-number">
                                    <p><?php echo esc_html($receiverName); ?></p>
                                    <a href="<?php echo esc_url( $this->whatsAppApi($receiverName, $receiverNumber, $product, $settings) ); ?>" target="_blank" class="pingly-action-btn whatsapp">
                                        <svg width="25px" height="25px" viewBox="-2.73 0 1225.016 1225.016" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path fill="#E0E0E0" d="M1041.858 178.02C927.206 63.289 774.753.07 612.325 0 277.617 0 5.232 272.298 5.098 606.991c-.039 106.986 27.915 211.42 81.048 303.476L0 1225.016l321.898-84.406c88.689 48.368 188.547 73.855 290.166 73.896h.258.003c334.654 0 607.08-272.346 607.222-607.023.056-162.208-63.052-314.724-177.689-429.463zm-429.533 933.963h-.197c-90.578-.048-179.402-24.366-256.878-70.339l-18.438-10.93-191.021 50.083 51-186.176-12.013-19.087c-50.525-80.336-77.198-173.175-77.16-268.504.111-278.186 226.507-504.503 504.898-504.503 134.812.056 261.519 52.604 356.814 147.965 95.289 95.36 147.728 222.128 147.688 356.948-.118 278.195-226.522 504.543-504.693 504.543z"/><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="609.77" y1="1190.114" x2="609.77" y2="21.084"><stop offset="0" stop-color="#20b038"/><stop offset="1" stop-color="#60d66a"/></linearGradient><path fill="url(#a)" d="M27.875 1190.114l82.211-300.18c-50.719-87.852-77.391-187.523-77.359-289.602.133-319.398 260.078-579.25 579.469-579.25 155.016.07 300.508 60.398 409.898 169.891 109.414 109.492 169.633 255.031 169.57 409.812-.133 319.406-260.094 579.281-579.445 579.281-.023 0 .016 0 0 0h-.258c-96.977-.031-192.266-24.375-276.898-70.5l-307.188 80.548z"/><image overflow="visible" opacity=".08" width="682" height="639" xlink:href="FCC0802E2AF8A915.png" transform="translate(270.984 291.372)"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#FFF" d="M462.273 349.294c-11.234-24.977-23.062-25.477-33.75-25.914-8.742-.375-18.75-.352-28.742-.352-10 0-26.25 3.758-39.992 18.766-13.75 15.008-52.5 51.289-52.5 125.078 0 73.797 53.75 145.102 61.242 155.117 7.5 10 103.758 166.266 256.203 226.383 126.695 49.961 152.477 40.023 179.977 37.523s88.734-36.273 101.234-71.297c12.5-35.016 12.5-65.031 8.75-71.305-3.75-6.25-13.75-10-28.75-17.5s-88.734-43.789-102.484-48.789-23.75-7.5-33.75 7.516c-10 15-38.727 48.773-47.477 58.773-8.75 10.023-17.5 11.273-32.5 3.773-15-7.523-63.305-23.344-120.609-74.438-44.586-39.75-74.688-88.844-83.438-103.859-8.75-15-.938-23.125 6.586-30.602 6.734-6.719 15-17.508 22.5-26.266 7.484-8.758 9.984-15.008 14.984-25.008 5-10.016 2.5-18.773-1.25-26.273s-32.898-81.67-46.234-111.326z"/><path fill="#FFF" d="M1036.898 176.091C923.562 62.677 772.859.185 612.297.114 281.43.114 12.172 269.286 12.039 600.137 12 705.896 39.633 809.13 92.156 900.13L7 1211.067l318.203-83.438c87.672 47.812 186.383 73.008 286.836 73.047h.255.003c330.812 0 600.109-269.219 600.25-600.055.055-160.343-62.328-311.108-175.649-424.53zm-424.601 923.242h-.195c-89.539-.047-177.344-24.086-253.93-69.531l-18.227-10.805-188.828 49.508 50.414-184.039-11.875-18.867c-49.945-79.414-76.312-171.188-76.273-265.422.109-274.992 223.906-498.711 499.102-498.711 133.266.055 258.516 52 352.719 146.266 94.195 94.266 146.031 219.578 145.992 352.852-.118 274.999-223.923 498.749-498.899 498.749z"/></svg>
                                        <?php echo esc_html($whatsappButtonText); ?>
                                    </a>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <div class="pingly-tab-content <?php echo $activeTab === 'sms' ? 'active' : ''; ?>" id="pingly-tab-sms">
                    <div class="pingly-tab-box">
                        <p><?php echo esc_html($smsTitleText); ?></p>
                        <div class="pingly-social-numbers">
                            <?php 
                                foreach ($smsNumbers as $number) : 
                                    $receiverName   = isset($number['receiver_name']) ? $number['receiver_name'] : 'Support';
                                    $receiverNumber = isset($number['receiver_number']) ? $number['receiver_number'] : '';  
                            ?>
                                <div class="pingly-social-number">
                                    <p><?php echo esc_html($receiverName); ?></p>
                                    <a href="<?php echo esc_url($this->smsLink($receiverName, $receiverNumber, $product, $settings)); ?>" class="pingly-action-btn sms">
                                       <svg fill="#fff" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
                                            <path d="M448,0H64C28.6,0,0,28.6,0,64v256c0,35.4,28.6,64,64,64h128l-42.7,128l192-128H448c35.4,0,64-28.6,64-64V64
                                            C512,28.6,483.4,0,448,0z M128,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S151.6,234.7,128,234.7z
                                            M256,234.7c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S279.6,234.7,256,234.7z M384,234.7
                                            c-23.6,0-42.7-19.1-42.7-42.7s19.1-42.7,42.7-42.7s42.7,19.1,42.7,42.7S407.6,234.7,384,234.7z"></path>
                                        </svg>
                                        <?php echo esc_html($smsButtonText); ?>
                                    </a>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <div class="pingly-tab-content <?php echo empty($activeTab) ? 'active' : ''; ?>" id="pingly-tab-empty">
                    <p>No enquiry options are available at the moment. Please check back shortly.</p>
                </div>
            </div>
        <?php
        return ob_get_clean();
    }

    private function enquireFormHtml($product, $tab, $submitButtonText) {
        // Logged user
        $current_user = wp_get_current_user();
        $userName     = is_user_logged_in() ? $current_user->display_name : '';
        $userEmail    = is_user_logged_in() ? $current_user->user_email   : '';
        // Product ID
      
        $productId = ($product instanceof \WC_Product) ? $product->get_id() : 0;

        ob_start();
        
      ?>
        <div class="pingly-notice">
            <p class="pingly-response-message"></p>
        </div>
        <form action="#" method="post" class="pingly-form">
            <div class="pingly-form-field">
                <label class="pingly-label-name" for="pingly-name-<?php echo esc_attr($tab);?>">Your Name <span class="queb-required-filed">*</span></label>
                <input type="text" name="name"
                    id="pingly-name-<?php echo esc_attr($tab);?>"
                    placeholder="Enter Your Name"
                    value="<?php echo esc_attr($userName); ?>"
                    <?php echo $userName ? '' : 'required'; ?>>
            </div>
            <div class="pingly-form-field">
                <label class="pingly-label-email" for="pingly-email-<?php echo esc_attr($tab);?>">
                    Email Address
                    <?php if ($tab == 'email') : ?>
                        <span class="queb-required-filed">*</span>
                    <?php endif; ?>
                </label>
                <input type="email" name="email"
                    id="pingly-email-<?php echo esc_attr($tab);?>"
                    placeholder="Email Address"
                    value="<?php echo esc_attr($userEmail); ?>"
                    <?php echo ($tab == 'email') ? 'required' : ''; ?>>
            </div>
            <div class="pingly-form-field">
                <label class="pingly-label-phone" for="pingly-phone-<?php echo esc_attr($tab);?>">
                    Phone Number
                </label>
                <?php
                    $getCountries = $this->getCountries();
                ?>
                <div class="pingly-phone-number">
                    <select name="country_code">
                        <option value=""> Select Country</option>
                        <?php foreach($getCountries as $country) : ?>
                            <option value="<?php echo esc_attr($country['code']); ?>">
                                <?php echo esc_html($country['flag']); ?>
                                (<?php echo esc_html($country['code']); ?>)
                                <?php echo esc_html($country['name']); ?>
                            </option>
                        <?php endforeach; ?>
                    </select>
                    <input type="number" name="phone_number"
                        id="pingly-phone-<?php echo esc_attr($tab);?>"
                        placeholder="Enter Your Phone Number"
                        pattern="[0-9]*">
                </div>
            </div>
            <div class="pingly-form-field">
                <input type="hidden" name="product_id" value="<?php echo esc_attr($productId); ?>">
            </div>
            <div class="pingly-form-field">
                <label class="pingly-label-enquiry" for="pingly-<?php echo esc_attr($tab);?>">Enquiry <span class="queb-required-filed">*</span></label>
                <textarea name="enquiry" id="pingly-<?php echo esc_attr($tab);?>" placeholder="Write Your Enquiry..." required></textarea>
            </div>
            <div class="pingly-form-field pingly-subscribe-field">
                <input type="checkbox" id="subscribe-<?php echo esc_attr($tab);?>" name="subscribe" value="yes">
                <label class="pingly-label-subscribe" for="subscribe-<?php echo esc_attr($tab);?>">Subscribe to our newsletter for updates and offers.</label>
            </div>
            <div class="pingly-form-field pingly-submit-btn">
                <button type="submit" class="pingly-submit"><?php echo esc_html($submitButtonText); ?></button>
            </div>
        </form>
        <?php
        return ob_get_clean();
    }

    // Allowed HTML tags for sanitization                     
    private function allowedHtml()
    {
        $allowed = wp_kses_allowed_html('post');

        // SVG icons
        $allowed['svg'] = [
            'width' => true, 'height' => true, 'viewbox' => true, 'fill' => true,
            'xmlns' => true, 'xmlns:xlink' => true, 'version' => true, 'id' => true,
            'xml:space' => true, 'enable-background' => true, 'class' => true,
        ];
        $allowed['g']    = ['fill' => true, 'class' => true];
        $allowed['path'] = [
            'd' => true, 'fill' => true, 'class' => true,
            'fill-rule' => true, 'clip-rule' => true,
        ];
        $allowed['lineargradient'] = [
            'id' => true, 'gradientunits' => true,
            'x1' => true, 'y1' => true, 'x2' => true, 'y2' => true,
        ];
        $allowed['stop']  = ['offset' => true, 'stop-color' => true];
        $allowed['image'] = [
            'overflow' => true, 'opacity' => true, 'width' => true,
            'height' => true, 'xlink:href' => true, 'transform' => true,
        ];

        // Tabs
        $allowed['div']['data-tab'] = true;

        // Form elements
        $allowed['form'] = [
            'action' => true, 'method' => true, 'id' => true, 'class' => true,
        ];
        $allowed['label'] = ['for' => true, 'class' => true];
        $allowed['input'] = [
            'type' => true, 'name' => true, 'id' => true, 'class' => true,
            'value' => true, 'placeholder' => true, 'required' => true,
            'pattern' => true, 'checked' => true, 'min' => true, 'max' => true,
        ];
        $allowed['select'] = [
            'name' => true, 'id' => true, 'class' => true, 'required' => true,
        ];
        $allowed['option'] = ['value' => true, 'selected' => true];
        $allowed['textarea'] = [
            'name' => true, 'id' => true, 'class' => true, 'rows' => true,
            'placeholder' => true, 'required' => true,
        ];
        $allowed['button'] = ['type' => true, 'class' => true];

        return $allowed;
    }

    /**
     * Handle form submission
     */
    public function savePinglyProductEnquiryDetails()
    {
        if (!check_ajax_referer('pingly_public_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }
    
        $PinglyProductEnquiry = new PinglyProductEnquiry();
        $PinglyProductEnquirySettings = get_option('pingly_settings', []);
        $settings      =  $PinglyProductEnquirySettings['settings'];

        // If you stringified in JS, decode here
        // Nonce is verified at the top of this method.
        // phpcs:disable WordPress.Security.NonceVerification.Recommended
        $details = (isset($_REQUEST['details']) && is_string($_REQUEST['details']))
            ? sanitize_text_field(wp_unslash($_REQUEST['details']))
            : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

        $details = json_decode($details, true);

        if (!is_array($details)) {
            wp_send_json_error([
                'message' => __('Invalid request.', 'pingly-product-enquiry'),
            ], 400);
        }

        $type = sanitize_text_field(Arr::get($details, 'type'));

        /* VALIDATION */
        if ($type === 'email') {
            if (empty($details['name']) || empty($details['email']) || empty($details['enquiry'])) {
                wp_send_json_error([
                    'message' => __('Name, Email and Enquiry are required.', 'pingly-product-enquiry'),
                ]);
            }
        }

        /* PRODUCT */
        $productId  = intval(Arr::get($details, 'product_id'));
        $product    = wc_get_product($productId);
        $title      = $product ? $product->get_name() : '';

        // Get phone number and country code
        $phoneNumber = isset($details['phone_number']) ? sanitize_text_field($details['phone_number']) : '';
        $countryCode = isset($details['country_code']) ? sanitize_text_field($details['country_code']) : '';

        // Normalize the phone number with the selected country code
        $phonNumberWithCountryCode = $this->normalizePhoneNumber($phoneNumber, $countryCode);

        /* DATA PREPARE */
        $data = [
            'name'         => sanitize_text_field(Arr::get($details, 'name', '')),
            'email'        => sanitize_email(Arr::get($details, 'email', '')),
            'phone_number' => $phonNumberWithCountryCode,
            'enquiry'      => sanitize_textarea_field(Arr::get($details, 'enquiry', '')),
            'type'         => $type,
            'subscribe'    => sanitize_text_field(Arr::get($details, 'subscribe', 'no')),
            'settings'     => wp_json_encode([
                'product_id' => $productId,
                'title'      => $title,
                'product_url'=> get_permalink($productId),
            ]),
            'created_at'   => gmdate('Y-m-d H:i:s'),
            'updated_at'   => gmdate('Y-m-d H:i:s'),
        ];

       
        /* INSERT DATABASE */
        $insertId = $PinglyProductEnquiry->insertGetId($data);

        if (!$insertId) {
            wp_send_json_error([
                'message' => __('Enquiry could not be saved. Please try again.', 'pingly-product-enquiry'),
            ]);
        }

        $getEnquiry = $PinglyProductEnquiry->getDetail($insertId);
      
        // default status
        $status = 'not_sent';

        /* SEND EMAIL */
        if (Arr::get($settings, 'email_enable') === 'yes') {
            if ($type === 'email') {
                $emailSent = $this->emailAPI($getEnquiry, $product, $settings);
                $status    = $emailSent ? 'sent' : 'failed';
            }
        }
       
        $PinglyProductEnquiry->update($getEnquiry->id, [
            'status'     => $status,
            'updated_at'=> gmdate('Y-m-d H:i:s'),
        ]);

        /* SUCCESS RESPONSE */
		$message = sprintf(
			/* translators: %s: Name of the person who submitted the enquiry. */
			__('Thank you %s. Your enquiry has been received successfully.', 'pingly-product-enquiry'),
			esc_html($data['name'])
		);

		wp_send_json_success([
			'message' => $message,
		], 200);
    }

    public function normalizePhoneNumber($phoneNumber, $countryCode) {

        if ( empty($phoneNumber) ) {
            return '';
        }

        // Remove all spaces, dashes, and other formatting
        $phoneNumber = preg_replace('/[\s\-\(\)]/', '', $phoneNumber);
        
        // If number already starts with +, return as is (already has country code)
        if (strpos($phoneNumber, $countryCode) === 0) {
            return $phoneNumber;
        }
        
        // Remove any + symbols that might be in the middle
        $phoneNumber = str_replace('+', '', $phoneNumber);
        
        // Remove leading zeros (common in local format like 01676633288)
        $phoneNumber = ltrim($phoneNumber, '0');
        
        // Keep only digits
        $phoneNumber = preg_replace('/[^0-9]/', '', $phoneNumber);
        
        // Prepend the selected country code
        return $countryCode . $phoneNumber;
    }

    // WhatsApp Link Generation
    private function whatsAppApi($receiverName, $whatsAppNumber, $product, $settings)
    {
        // Sanitize WhatsApp number (digits only)
        $whatsAppNumber = preg_replace('/\D/', '', $whatsAppNumber);

        if (empty($whatsAppNumber)) {
            return '';
        }

        // Product-safe handling
        $productTitle = ($product instanceof \WC_Product)
            ? $product->get_name()
            : __('General Enquiry', 'pingly-product-enquiry');

        $productUrl = ($product instanceof \WC_Product)
            ? get_permalink($product->get_id())
            : get_site_url();

        // Custom message
        $whatsappMessage = Arr::get($settings, 'whatsapp_message');

        if (empty($whatsappMessage)) {
            $whatsappMessage =
                "Hello 👋\n\n" .
                "I want to enquire about:\n" .
                "{title}\n\n" .
                "Link:\n{url}";
        }

        // Replace placeholders
        $message = str_replace(
            ['{receiver_name}', '{title}', '{url}'],
            [$receiverName, $productTitle, $productUrl],
            $whatsappMessage
        );

        return "https://wa.me/{$whatsAppNumber}?text=" . rawurlencode($message);
    }
                            
    // SMS Link Generation
    private function smsLink($receiverName, $smsNumber, $product, $settings)
    {
        // Sanitize SMS number (digits only)
        $smsNumber = preg_replace('/\D/', '', $smsNumber);

        if (empty($smsNumber)) {
            return '';
        }

        // Product-safe handling
        $productTitle = ($product instanceof \WC_Product)
            ? $product->get_name()
            : __('General Enquiry', 'pingly-product-enquiry');

        $productUrl = ($product instanceof \WC_Product)
            ? get_permalink($product->get_id())
            : get_site_url();

        // Custom message
        $smsMessage = Arr::get($settings, 'sms_message');

        if (empty($smsMessage)) {
            $smsMessage =
                "Hello 👋\n\n" .
                "I want to enquire about:\n" .
                "{title}\n\n" .
                "Link:\n{url}";
        }

        // Replace placeholders
        $message = str_replace(
            ['{receiver_name}', '{title}', '{url}'],
            [$receiverName, $productTitle, $productUrl],
            $smsMessage
        );

      
        return 'sms:' . $smsNumber . '?body=' . rawurlencode($message);
    }

    private function emailAPI($getEnquiry, $product, $settings)
    {
        $userName   = $getEnquiry->name;
        $userEmail  = $getEnquiry->email ?? '';
        $adminEmail = Arr::get($settings, 'admin_email', get_option('admin_email'));
        $title      = $product ? $product->get_name() : 'Product Enquiry';

        $to      = $adminEmail;
        $subject = 'New Product Enquiry – ' . $title;

        $body  = '<div style="font-family: Arial, sans-serif; line-height:1.6; color:#333;">';
        $body .= '<h2 style="margin-bottom:10px;">📩 New Product Enquiry</h2>';

        $body .= '<table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">';
        $body .= '<tr><td><strong>Product</strong></td><td>:</td><td>' . esc_html($title) . '</td></tr>';
        $body .= '<tr><td><strong>Name</strong></td><td>:</td><td>' . esc_html($userName) . '</td></tr>';

        if (!empty($userEmail)) {
            $body .= '<tr><td><strong>Email</strong></td><td>:</td><td>' . esc_html($userEmail) . '</td></tr>';
        }

        $body .= '</table>';

        $body .= '<p style="margin-top:15px;"><strong>Message:</strong></p>';
        $body .= '<div style="background:#f7f7f7; padding:12px; border-left:4px solid #0073aa;">'
            . nl2br(esc_html($getEnquiry->enquiry))
            . '</div>';

        $body .= '<p style="margin-top:20px; font-size:13px; color:#777;">';
        $body .= 'This enquiry was sent from your website enquiry form.</p>';
        $body .= '</div>';

        $headers = [
            'Content-Type: text/html; charset=UTF-8',
            !empty($userEmail) ? 'Reply-To: ' . $userName . ' <' . $userEmail . '>' : '',
        ];

        return wp_mail($to, $subject, $body, array_filter($headers));
    }

    //  All Countries
    public function getCountries() {
        $countries = [
            ["name" => "Afghanistan", "code" => "+93", "flag" => "🇦🇫"],
            ["name" => "Albania", "code" => "+355", "flag" => "🇦🇱"],
            ["name" => "Algeria", "code" => "+213", "flag" => "🇩🇿"],
            ["name" => "Andorra", "code" => "+376", "flag" => "🇦🇩"],
            ["name" => "Angola", "code" => "+244", "flag" => "🇦🇴"],
            ["name" => "Argentina", "code" => "+54", "flag" => "🇦🇷"],
            ["name" => "Armenia", "code" => "+374", "flag" => "🇦🇲"],
            ["name" => "Australia", "code" => "+61", "flag" => "🇦🇺"],
            ["name" => "Austria", "code" => "+43", "flag" => "🇦🇹"],
            ["name" => "Azerbaijan", "code" => "+994", "flag" => "🇦🇿"],
            ["name" => "Bahamas", "code" => "+1-242", "flag" => "🇧🇸"],
            ["name" => "Bahrain", "code" => "+973", "flag" => "🇧🇭"],
            ["name" => "Bangladesh", "code" => "+880", "flag" => "🇧🇩"],
            ["name" => "Barbados", "code" => "+1-246", "flag" => "🇧🇧"],
            ["name" => "Belarus", "code" => "+375", "flag" => "🇧🇾"],
            ["name" => "Belgium", "code" => "+32", "flag" => "🇧🇪"],
            ["name" => "Belize", "code" => "+501", "flag" => "🇧🇿"],
            ["name" => "Benin", "code" => "+229", "flag" => "🇧🇯"],
            ["name" => "Bhutan", "code" => "+975", "flag" => "🇧🇹"],
            ["name" => "Bolivia", "code" => "+591", "flag" => "🇧🇴"],
            ["name" => "Bosnia and Herzegovina", "code" => "+387", "flag" => "🇧🇦"],
            ["name" => "Botswana", "code" => "+267", "flag" => "🇧🇼"],
            ["name" => "Brazil", "code" => "+55", "flag" => "🇧🇷"],
            ["name" => "Brunei", "code" => "+673", "flag" => "🇧🇳"],
            ["name" => "Bulgaria", "code" => "+359", "flag" => "🇧🇬"],
            ["name" => "Burkina Faso", "code" => "+226", "flag" => "🇧🇫"],
            ["name" => "Burundi", "code" => "+257", "flag" => "🇧🇮"],
            ["name" => "Cambodia", "code" => "+855", "flag" => "🇰🇭"],
            ["name" => "Cameroon", "code" => "+237", "flag" => "🇨🇲"],
            ["name" => "Canada", "code" => "+1", "flag" => "🇨🇦"],
            ["name" => "Cape Verde", "code" => "+238", "flag" => "🇨🇻"],
            ["name" => "Central African Republic", "code" => "+236", "flag" => "🇨🇫"],
            ["name" => "Chad", "code" => "+235", "flag" => "🇹🇩"],
            ["name" => "Chile", "code" => "+56", "flag" => "🇨🇱"],
            ["name" => "China", "code" => "+86", "flag" => "🇨🇳"],
            ["name" => "Colombia", "code" => "+57", "flag" => "🇨🇴"],
            ["name" => "Comoros", "code" => "+269", "flag" => "🇰🇲"],
            ["name" => "Congo (Brazzaville)", "code" => "+242", "flag" => "🇨🇬"],
            ["name" => "Congo (Kinshasa)", "code" => "+243", "flag" => "🇨🇩"],
            ["name" => "Costa Rica", "code" => "+506", "flag" => "🇨🇷"],
            ["name" => "Croatia", "code" => "+385", "flag" => "🇭🇷"],
            ["name" => "Cuba", "code" => "+53", "flag" => "🇨🇺"],
            ["name" => "Cyprus", "code" => "+357", "flag" => "🇨🇾"],
            ["name" => "Czech Republic", "code" => "+420", "flag" => "🇨🇿"],
            ["name" => "Denmark", "code" => "+45", "flag" => "🇩🇰"],
            ["name" => "Djibouti", "code" => "+253", "flag" => "🇩🇯"],
            ["name" => "Dominica", "code" => "+1-767", "flag" => "🇩🇲"],
            ["name" => "Dominican Republic", "code" => "+1-809", "flag" => "🇩🇴"],
            ["name" => "Ecuador", "code" => "+593", "flag" => "🇪🇨"],
            ["name" => "Egypt", "code" => "+20", "flag" => "🇪🇬"],
            ["name" => "El Salvador", "code" => "+503", "flag" => "🇸🇻"],
            ["name" => "Equatorial Guinea", "code" => "+240", "flag" => "🇬🇶"],
            ["name" => "Eritrea", "code" => "+291", "flag" => "🇪🇷"],
            ["name" => "Estonia", "code" => "+372", "flag" => "🇪🇪"],
            ["name" => "Eswatini", "code" => "+268", "flag" => "🇸🇿"],
            ["name" => "Ethiopia", "code" => "+251", "flag" => "🇪🇹"],
            ["name" => "Fiji", "code" => "+679", "flag" => "🇫🇯"],
            ["name" => "Finland", "code" => "+358", "flag" => "🇫🇮"],
            ["name" => "France", "code" => "+33", "flag" => "🇫🇷"],
            ["name" => "Gabon", "code" => "+241", "flag" => "🇬🇦"],
            ["name" => "Gambia", "code" => "+220", "flag" => "🇬🇲"],
            ["name" => "Georgia", "code" => "+995", "flag" => "🇬🇪"],
            ["name" => "Germany", "code" => "+49", "flag" => "🇩🇪"],
            ["name" => "Ghana", "code" => "+233", "flag" => "🇬🇭"],
            ["name" => "Greece", "code" => "+30", "flag" => "🇬🇷"],
            ["name" => "Grenada", "code" => "+1-473", "flag" => "🇬🇩"],
            ["name" => "Guatemala", "code" => "+502", "flag" => "🇬🇹"],
            ["name" => "Guinea", "code" => "+224", "flag" => "🇬🇳"],
            ["name" => "Guinea-Bissau", "code" => "+245", "flag" => "🇬🇼"],
            ["name" => "Guyana", "code" => "+592", "flag" => "🇬🇾"],
            ["name" => "Haiti", "code" => "+509", "flag" => "🇭🇹"],
            ["name" => "Honduras", "code" => "+504", "flag" => "🇭🇳"],
            ["name" => "Hungary", "code" => "+36", "flag" => "🇭🇺"],
            ["name" => "Iceland", "code" => "+354", "flag" => "🇮🇸"],
            ["name" => "India", "code" => "+91", "flag" => "🇮🇳"],
            ["name" => "Indonesia", "code" => "+62", "flag" => "🇮🇩"],
            ["name" => "Iran", "code" => "+98", "flag" => "🇮🇷"],
            ["name" => "Iraq", "code" => "+964", "flag" => "🇮🇶"],
            ["name" => "Ireland", "code" => "+353", "flag" => "🇮🇪"],
            ["name" => "Israel", "code" => "+972", "flag" => "🇮🇱"],
            ["name" => "Italy", "code" => "+39", "flag" => "🇮🇹"],
            ["name" => "Jamaica", "code" => "+1-876", "flag" => "🇯🇲"],
            ["name" => "Japan", "code" => "+81", "flag" => "🇯🇵"],
            ["name" => "Jordan", "code" => "+962", "flag" => "🇯🇴"],
            ["name" => "Kazakhstan", "code" => "+7", "flag" => "🇰🇿"],
            ["name" => "Kenya", "code" => "+254", "flag" => "🇰🇪"],
            ["name" => "Kiribati", "code" => "+686", "flag" => "🇰🇮"],
            ["name" => "Kuwait", "code" => "+965", "flag" => "🇰🇼"],
            ["name" => "Kyrgyzstan", "code" => "+996", "flag" => "🇰🇬"],
            ["name" => "Laos", "code" => "+856", "flag" => "🇱🇦"],
            ["name" => "Latvia", "code" => "+371", "flag" => "🇱🇻"],
            ["name" => "Lebanon", "code" => "+961", "flag" => "🇱🇧"],
            ["name" => "Lesotho", "code" => "+266", "flag" => "🇱🇸"],
            ["name" => "Liberia", "code" => "+231", "flag" => "🇱🇷"],
            ["name" => "Libya", "code" => "+218", "flag" => "🇱🇾"],
            ["name" => "Liechtenstein", "code" => "+423", "flag" => "🇱🇮"],
            ["name" => "Lithuania", "code" => "+370", "flag" => "🇱🇹"],
            ["name" => "Luxembourg", "code" => "+352", "flag" => "🇱🇺"],
            ["name" => "Madagascar", "code" => "+261", "flag" => "🇲🇬"],
            ["name" => "Malawi", "code" => "+265", "flag" => "🇲🇼"],
            ["name" => "Malaysia", "code" => "+60", "flag" => "🇲🇾"],
            ["name" => "Maldives", "code" => "+960", "flag" => "🇲🇻"],
            ["name" => "Mali", "code" => "+223", "flag" => "🇲🇱"],
            ["name" => "Malta", "code" => "+356", "flag" => "🇲🇹"],
            ["name" => "Marshall Islands", "code" => "+692", "flag" => "🇲🇭"],
            ["name" => "Mauritania", "code" => "+222", "flag" => "🇲🇷"],
            ["name" => "Mauritius", "code" => "+230", "flag" => "🇲🇺"],
            ["name" => "Mexico", "code" => "+52", "flag" => "🇲🇽"],
            ["name" => "Micronesia", "code" => "+691", "flag" => "🇫🇲"],
            ["name" => "Moldova", "code" => "+373", "flag" => "🇲🇩"],
            ["name" => "Monaco", "code" => "+377", "flag" => "🇲🇨"],
            ["name" => "Mongolia", "code" => "+976", "flag" => "🇲🇳"],
            ["name" => "Montenegro", "code" => "+382", "flag" => "🇲🇪"],
            ["name" => "Morocco", "code" => "+212", "flag" => "🇲🇦"],
            ["name" => "Mozambique", "code" => "+258", "flag" => "🇲🇿"],
            ["name" => "Myanmar", "code" => "+95", "flag" => "🇲🇲"],
            ["name" => "Namibia", "code" => "+264", "flag" => "🇳🇦"],
            ["name" => "Nauru", "code" => "+674", "flag" => "🇳🇷"],
            ["name" => "Nepal", "code" => "+977", "flag" => "🇳🇵"],
            ["name" => "Netherlands", "code" => "+31", "flag" => "🇳🇱"],
            ["name" => "New Zealand", "code" => "+64", "flag" => "🇳🇿"],
            ["name" => "Nicaragua", "code" => "+505", "flag" => "🇳🇮"],
            ["name" => "Niger", "code" => "+227", "flag" => "🇳🇪"],
            ["name" => "Nigeria", "code" => "+234", "flag" => "🇳🇬"],
            ["name" => "North Korea", "code" => "+850", "flag" => "🇰🇵"],
            ["name" => "North Macedonia", "code" => "+389", "flag" => "🇲🇰"],
            ["name" => "Norway", "code" => "+47", "flag" => "🇳🇴"],
            ["name" => "Oman", "code" => "+968", "flag" => "🇴🇲"],
            ["name" => "Pakistan", "code" => "+92", "flag" => "🇵🇰"],
            ["name" => "Palau", "code" => "+680", "flag" => "🇵🇼"],
            ["name" => "Palestine", "code" => "+970", "flag" => "🇵🇸"],
            ["name" => "Panama", "code" => "+507", "flag" => "🇵🇦"],
            ["name" => "Papua New Guinea", "code" => "+675", "flag" => "🇵🇬"],
            ["name" => "Paraguay", "code" => "+595", "flag" => "🇵🇾"],
            ["name" => "Peru", "code" => "+51", "flag" => "🇵🇪"],
            ["name" => "Philippines", "code" => "+63", "flag" => "🇵🇭"],
            ["name" => "Poland", "code" => "+48", "flag" => "🇵🇱"],
            ["name" => "Portugal", "code" => "+351", "flag" => "🇵🇹"],
            ["name" => "Qatar", "code" => "+974", "flag" => "🇶🇦"],
            ["name" => "Romania", "code" => "+40", "flag" => "🇷🇴"],
            ["name" => "Russia", "code" => "+7", "flag" => "🇷🇺"],
            ["name" => "Rwanda", "code" => "+250", "flag" => "🇷🇼"],
            ["name" => "Saint Kitts and Nevis", "code" => "+1-869", "flag" => "🇰🇳"],
            ["name" => "Saint Lucia", "code" => "+1-758", "flag" => "🇱🇨"],
            ["name" => "Saint Vincent and the Grenadines", "code" => "+1-784", "flag" => "🇻🇨"],
            ["name" => "Samoa", "code" => "+685", "flag" => "🇼🇸"],
            ["name" => "San Marino", "code" => "+378", "flag" => "🇸🇲"],
            ["name" => "Sao Tome and Principe", "code" => "+239", "flag" => "🇸🇹"],
            ["name" => "Saudi Arabia", "code" => "+966", "flag" => "🇸🇦"],
            ["name" => "Senegal", "code" => "+221", "flag" => "🇸🇳"],
            ["name" => "Serbia", "code" => "+381", "flag" => "🇷🇸"],
            ["name" => "Seychelles", "code" => "+248", "flag" => "🇸🇨"],
            ["name" => "Sierra Leone", "code" => "+232", "flag" => "🇸🇱"],
            ["name" => "Singapore", "code" => "+65", "flag" => "🇸🇬"],
            ["name" => "Slovakia", "code" => "+421", "flag" => "🇸🇰"],
            ["name" => "Slovenia", "code" => "+386", "flag" => "🇸🇮"],
            ["name" => "Solomon Islands", "code" => "+677", "flag" => "🇸🇧"],
            ["name" => "Somalia", "code" => "+252", "flag" => "🇸🇴"],
            ["name" => "South Africa", "code" => "+27", "flag" => "🇿🇦"],
            ["name" => "South Korea", "code" => "+82", "flag" => "🇰🇷"],
            ["name" => "South Sudan", "code" => "+211", "flag" => "🇸🇸"],
            ["name" => "Spain", "code" => "+34", "flag" => "🇪🇸"],
            ["name" => "Sri Lanka", "code" => "+94", "flag" => "🇱🇰"],
            ["name" => "Sudan", "code" => "+249", "flag" => "🇸🇩"],
            ["name" => "Suriname", "code" => "+597", "flag" => "🇸🇷"],
            ["name" => "Sweden", "code" => "+46", "flag" => "🇸🇪"],
            ["name" => "Switzerland", "code" => "+41", "flag" => "🇨🇭"],
            ["name" => "Syria", "code" => "+963", "flag" => "🇸🇾"],
            ["name" => "Taiwan", "code" => "+886", "flag" => "🇹🇼"],
            ["name" => "Tajikistan", "code" => "+992", "flag" => "🇹🇯"],
            ["name" => "Tanzania", "code" => "+255", "flag" => "🇹🇿"],
            ["name" => "Thailand", "code" => "+66", "flag" => "🇹🇭"],
            ["name" => "Timor-Leste", "code" => "+670", "flag" => "🇹🇱"],
            ["name" => "Togo", "code" => "+228", "flag" => "🇹🇬"],
            ["name" => "Tonga", "code" => "+676", "flag" => "🇹🇴"],
            ["name" => "Trinidad and Tobago", "code" => "+1-868", "flag" => "🇹🇹"],
            ["name" => "Tunisia", "code" => "+216", "flag" => "🇹🇳"],
            ["name" => "Turkey", "code" => "+90", "flag" => "🇹🇷"],
            ["name" => "Turkmenistan", "code" => "+993", "flag" => "🇹🇲"],
            ["name" => "Tuvalu", "code" => "+688", "flag" => "🇹🇻"],
            ["name" => "Uganda", "code" => "+256", "flag" => "🇺🇬"],
            ["name" => "Ukraine", "code" => "+380", "flag" => "🇺🇦"],
            ["name" => "United Arab Emirates", "code" => "+971", "flag" => "🇦🇪"],
            ["name" => "United Kingdom", "code" => "+44", "flag" => "🇬🇧"],
            ["name" => "United States", "code" => "+1", "flag" => "🇺🇸"],
            ["name" => "Uruguay", "code" => "+598", "flag" => "🇺🇾"],
            ["name" => "Uzbekistan", "code" => "+998", "flag" => "🇺🇿"],
            ["name" => "Vanuatu", "code" => "+678", "flag" => "🇻🇺"],
            ["name" => "Vatican City", "code" => "+379", "flag" => "🇻🇦"],
            ["name" => "Venezuela", "code" => "+58", "flag" => "🇻🇪"],
            ["name" => "Vietnam", "code" => "+84", "flag" => "🇻🇳"],
            ["name" => "Yemen", "code" => "+967", "flag" => "🇾🇪"],
            ["name" => "Zambia", "code" => "+260", "flag" => "🇿🇲"],
            ["name" => "Zimbabwe", "code" => "+263", "flag" => "🇿🇼"],
        ];
        return $countries;
    }

    /**
     * Inline Style Handler.
     *
     * Only allow valid HEX colors from plugin settings before adding them to CSS.
     */
    public function styleHandler()
    {
        $PinglyProductEnquirySettings = get_option( 'pingly_settings', [] );

        $styles = (
            isset( $PinglyProductEnquirySettings['styles'] ) &&
            is_array( $PinglyProductEnquirySettings['styles'] )
        ) ? $PinglyProductEnquirySettings['styles'] : [];

        // Allow only valid HEX color values.
        $sanitize_color = static function ( $color ) {
            if ( ! is_string( $color ) ) {
                return '';
            }

            $color = sanitize_hex_color( trim( $color ) );

            return is_string( $color ) ? $color : '';
        };

        $colors = [
            'instock_shop_button_color'             => '.pingly-shop-btn-instock',
            'out_of_stock_shop_button_color'        => '.pingly-shop-btn-outofstock',
            'backorder_shop_button_color'           => '.pingly-shop-btn-backorder',
            'instock_single_button_color'           => '.pingly-single-btn-instock',
            'out_of_stock_single_button_color'      => '.pingly-single-btn-outofstock',
            'backorder_single_button_color'         => '.pingly-single-btn-backorder',
            'header_background_color'               => '.pingly-header',
            'submit_button_background_color'        => '.pingly-submit',
            'shortcode_enquiry_us_button_color'     => '.pingly-shortcode-btn',
            'cart_page_enquiry_us_button_color'     => '.pingly-cart-page-btn',
            'order_summary_enquiry_us_button_color' => '.pingly-order-summary-btn',
        ];

        $custom_css = '';

        foreach ( $colors as $setting_key => $selector ) {

            $color = $sanitize_color(
                Arr::get( $styles, $setting_key, '' )
            );

            if ( '' === $color ) {
                continue;
            }

            $custom_css .= "\n" . $selector . " {\n";
            $custom_css .= '    background-color: ' . $color . " !important;\n";
            $custom_css .= "}\n";
        }

        // Active tab color.
        $active_tab_color = $sanitize_color(
            Arr::get( $styles, 'active_tab_color', '' )
        );

        if ( '' !== $active_tab_color ) {

            $custom_css .= "\n.pingly-tabs .pingly-tab.active {\n";
            $custom_css .= '    color: ' . $active_tab_color . " !important;\n";
            $custom_css .= '    border-bottom-color: ' . $active_tab_color . " !important;\n";
            $custom_css .= "}\n";

            $custom_css .= ".pingly-tabs .pingly-tab.active svg {\n";
            $custom_css .= '    fill: ' . $active_tab_color . " !important;\n";
            $custom_css .= "}\n";
        }

        if ( '' !== $custom_css ) {
            wp_add_inline_style( 'pingly_css', $custom_css );
        }
    }
}
