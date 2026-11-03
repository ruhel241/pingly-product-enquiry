<?php

namespace WPCreativeIdeaProductEnquiry\Handler;

use WPCreativeIdeaProductEnquiry\Settings;
use WPCreativeIdeaProductEnquiry\Models\WPCreativeIdeaProductEnquiry;
use WPCreativeIdeaProductEnquiry\Helpers\SanitizeValidation;

class AdminAjaxHandler
{
    public function registerEndpoints()
    {
        add_action('wp_ajax_wpcipe_admin_ajax', array($this, 'ajaxRoutes'));
    }

    public function ajaxRoutes()
    {
        if (!check_ajax_referer('wpcipe_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        // Nonce verified above via check_ajax_referer().
        // phpcs:ignore WordPress.Security.NonceVerification.Missing, WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
        $rawData = wp_unslash($_POST);

        $route = isset($rawData['route']) ? sanitize_key($rawData['route']) : '';

        if (!$route) {
            wp_send_json_error(['message' => 'Invalid route'], 400);
        }

        $validRoutes = [
            'get_settings'           => 'getSettings',
            'save_settings'          => 'saveSettings',
            'enable_active_module'   => 'enableActiveModule',
            'get_active_module'      => 'getActiveModule',
            'reset_settings'         => 'resetSettings',
            'get_wpcipe_details'     => 'getWPCreativeIdeaProductEnquiryDetails',
            'get_wpcipe_detail_view' => 'getDetailView',
            'maybe_delete_details'   => 'maybeDeleteDetails',
        ];

        if (!isset($validRoutes[$route])) {
            wp_send_json_error(['message' => 'Invalid route'], 400);
        }

        $validatedData = (new SanitizeValidation)->validateRequestData($rawData);

        do_action('wpcipe_admin_ajax_handler_catch', $route);

        $this->{$validRoutes[$route]}($validatedData);

        wp_die();
    }

    public function getSettings($request)
    {
        if (!check_ajax_referer('wpcipe_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        $type = $request['type'] ?? '';
        $tab  = $request['tab'] ?? '';

        $getConfigs = (new Settings())->getConfigs();

        // Whitelist check
        if (!isset($getConfigs[$type][$tab])) {
            wp_send_json_error([
                'message' => __('Invalid settings type or tab', 'wpcreativeidea-product-enquiry')
            ], 400);
        }

        $configs = get_option($type, $getConfigs[$type]);
        
        wp_send_json_success([
            'configs' => $configs[$tab] ?? $getConfigs[$type][$tab],
        ]);
    }

    public function saveSettings($request)
    {
        if (!check_ajax_referer('wpcipe_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        $type = $request['type'] ?? '';
        $tab  = $request['tab'] ?? '';

        $getConfigs = (new Settings())->getConfigs();

        // Whitelist check
        if (!isset($getConfigs[$type][$tab])) {
            wp_send_json_error([
                'message' => __('Invalid settings type or tab', 'wpcreativeidea-product-enquiry')
            ], 400);
        }

        // Already sanitized and unslashed in SanitizeValidation
        $newSettings = $request['tab_configs'] ?? [];

        if (!is_array($newSettings)) {
            wp_send_json_error([
                'message' => __('Invalid settings data', 'wpcreativeidea-product-enquiry')
            ], 400);
        }

        $currentSettings = get_option($type, $getConfigs[$type]);

        if (!isset($currentSettings[$tab]) || !is_array($currentSettings[$tab])) {
            $currentSettings[$tab] = [];
        }

        // Merge new values into the current tab
        $currentSettings[$tab] = array_merge($currentSettings[$tab], $newSettings);

        update_option($type, $currentSettings);

        wp_send_json_success([
			'message'  => sprintf(
				/* translators: %s: Settings tab name, e.g. "General" or "Email". */
				__('%s saved successfully', 'wpcreativeidea-product-enquiry'),
				ucfirst($tab)
			),
			'settings' => $currentSettings,
		]);
    }

    public function enableActiveModule($request)
    {
        if (!check_ajax_referer('wpcipe_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        $type   = $request['type'] ?? '';
        $status = $request['status'] ?? '';

        // Only yes/no allowed
        if (!in_array($status, ['yes', 'no'], true)) {
            wp_send_json_error([
                'message' => __('Invalid status', 'wpcreativeidea-product-enquiry')
            ], 400);
        }

        $defaultModules   = (new Settings())->getActiveModule();
        $wpcipeActiveModule = get_option('wpcipe_active_module', $defaultModules);

        // Whitelist check
        if (!isset($wpcipeActiveModule[$type])) {
            wp_send_json_error([
                'message' => __('Invalid module type', 'wpcreativeidea-product-enquiry')
            ], 400);
        }

        $wpcipeActiveModule[$type] = $status;
        update_option('wpcipe_active_module', $wpcipeActiveModule);

        $message = ($status === 'no')
            ? __('Successfully disabled active module', 'wpcreativeidea-product-enquiry')
            : __('Successfully enabled active module', 'wpcreativeidea-product-enquiry');

        wp_send_json_success([
            'message'       => $message,
            'active_module' => $status,
        ]);
    }

    public function getActiveModule($request)
    {
        if (!check_ajax_referer('wpcipe_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        $type = $request['type'] ?? '';

        $defaultModules   = (new Settings())->getActiveModule();
        $wpcipeActiveModule = get_option('wpcipe_active_module', $defaultModules);

        if (!isset($wpcipeActiveModule[$type])) {
            wp_send_json_error([
                'message' => __('Invalid module type', 'wpcreativeidea-product-enquiry')
            ], 400);
        }

        wp_send_json_success([
            'message'       => __('Enable active module', 'wpcreativeidea-product-enquiry'),
            'active_module' => $wpcipeActiveModule[$type],
        ]);
    }

    public function resetSettings($request)
    {
        if (!check_ajax_referer('wpcipe_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        $type = $request['type'] ?? '';
        $tab  = $request['tab'] ?? '';

        $getDefaultConfigs = (new Settings())->getConfigs();

        // Whitelist check
        if (!isset($getDefaultConfigs[$type][$tab]) || !is_array($getDefaultConfigs[$type][$tab])) {
            wp_send_json_error([
                'message' => __('Invalid reset request', 'wpcreativeidea-product-enquiry')
            ], 400);
        }

        $currentSettings = get_option($type, $getDefaultConfigs[$type]);

        if (!is_array($currentSettings)) {
            $currentSettings = $getDefaultConfigs[$type];
        }

        // Reset this tab to default values
        $currentSettings[$tab] = $getDefaultConfigs[$type][$tab];

        update_option($type, $currentSettings);

       wp_send_json_success([
			'message'  => sprintf(
				/* translators: %s: Settings tab name, e.g. "General" or "Email". */
				__('Reset %s successfully', 'wpcreativeidea-product-enquiry'),
				ucfirst($tab)
			),
			'settings' => $currentSettings,
		]);
    }

    // Get Product Enquiry addon Details
    public function getWPCreativeIdeaProductEnquiryDetails($request)
    {
        if (!check_ajax_referer('wpcipe_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        $WPCreativeIdeaProductEnquiry = new WPCreativeIdeaProductEnquiry();
        $details        = $WPCreativeIdeaProductEnquiry->getDetails($request);

        wp_send_json_success([
            'message' => __('WPCreativeIdea Product Enquiry details get successfully.', 'wpcreativeidea-product-enquiry'),
            'data'    => $details,
        ], 200);
    }

    public function getDetailView($request)
    {
        if (!check_ajax_referer('wpcipe_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        $detailId = absint($request['detail_id'] ?? 0);

        if (!$detailId) {
            wp_send_json_error([
                'message' => __('Invalid detail id', 'wpcreativeidea-product-enquiry')
            ], 400);
        }

        $WPCreativeIdeaProductEnquiry = new WPCreativeIdeaProductEnquiry();
        $detail         = $WPCreativeIdeaProductEnquiry->getDetail($detailId);

        wp_send_json_success([
            'message' => __('Product Enquiry detail get successfully.', 'wpcreativeidea-product-enquiry'),
            'detail'  => $detail,
        ], 200);
    }

    public function maybeDeleteDetails($request)
    {
        if (!check_ajax_referer('wpcipe_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'wpcreativeidea-product-enquiry')
            ], 403);
        }

        $actionType = $request['action_type'] ?? '';

        if ($actionType !== 'delete') {
            wp_send_json_error([
                'message' => __('Invalid action type', 'wpcreativeidea-product-enquiry')
            ], 400);
        }

        $detailsIds = $request['details_ids'] ?? [];

        if (!is_array($detailsIds)) {
            $detailsIds = [$detailsIds];
        }

        // Only positive integers, no duplicates, no zeros
        $detailsIds = array_values(array_unique(array_filter(array_map('absint', $detailsIds))));

        if (empty($detailsIds)) {
            wp_send_json_error([
                'message' => __('No enquiry selected', 'wpcreativeidea-product-enquiry')
            ], 400);
        }

        $WPCreativeIdeaProductEnquiry = new WPCreativeIdeaProductEnquiry();
        $WPCreativeIdeaProductEnquiry->deleteInfo($detailsIds);

        wp_send_json_success([
            'message' => __('Selected enquiry successfully deleted', 'wpcreativeidea-product-enquiry')
        ], 200);
    }
}