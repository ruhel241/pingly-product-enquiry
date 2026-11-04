<?php

namespace PinglyProductEnquiry\Handler;

use PinglyProductEnquiry\Settings;
use PinglyProductEnquiry\Models\PinglyProductEnquiry;
use PinglyProductEnquiry\Helpers\SanitizeValidation;

class AdminAjaxHandler
{
    public function registerEndpoints()
    {
        add_action('wp_ajax_pingly_admin_ajax', array($this, 'ajaxRoutes'));
    }

    public function ajaxRoutes()
    {
        if (!check_ajax_referer('pingly_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'pingly-product-enquiry')
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
            'get_pingly_details'     => 'getPinglyProductEnquiryDetails',
            'get_pingly_detail_view' => 'getDetailView',
            'maybe_delete_details'   => 'maybeDeleteDetails',
        ];

        if (!isset($validRoutes[$route])) {
            wp_send_json_error(['message' => 'Invalid route'], 400);
        }

        $validatedData = (new SanitizeValidation)->validateRequestData($rawData);

        do_action('pingly_admin_ajax_handler_catch', $route);

        $this->{$validRoutes[$route]}($validatedData);

        wp_die();
    }

    public function getSettings($request)
    {
        if (!check_ajax_referer('pingly_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'pingly-product-enquiry')
            ], 403);
        }

        $type = $request['type'] ?? '';
        $tab  = $request['tab'] ?? '';

        $getConfigs = (new Settings())->getConfigs();

        // Whitelist check
        if (!isset($getConfigs[$type][$tab])) {
            wp_send_json_error([
                'message' => __('Invalid settings type or tab', 'pingly-product-enquiry')
            ], 400);
        }

        $configs = get_option($type, $getConfigs[$type]);
        
        wp_send_json_success([
            'configs' => $configs[$tab] ?? $getConfigs[$type][$tab],
        ]);
    }

    public function saveSettings($request)
    {
        if (!check_ajax_referer('pingly_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'pingly-product-enquiry')
            ], 403);
        }

        $type = $request['type'] ?? '';
        $tab  = $request['tab'] ?? '';

        $getConfigs = (new Settings())->getConfigs();

        // Whitelist check
        if (!isset($getConfigs[$type][$tab])) {
            wp_send_json_error([
                'message' => __('Invalid settings type or tab', 'pingly-product-enquiry')
            ], 400);
        }

        // Already sanitized and unslashed in SanitizeValidation
        $newSettings = $request['tab_configs'] ?? [];

        if (!is_array($newSettings)) {
            wp_send_json_error([
                'message' => __('Invalid settings data', 'pingly-product-enquiry')
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
				__('%s saved successfully', 'pingly-product-enquiry'),
				ucfirst($tab)
			),
			'settings' => $currentSettings,
		]);
    }

    public function enableActiveModule($request)
    {
        if (!check_ajax_referer('pingly_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'pingly-product-enquiry')
            ], 403);
        }

        $type   = $request['type'] ?? '';
        $status = $request['status'] ?? '';

        // Only yes/no allowed
        if (!in_array($status, ['yes', 'no'], true)) {
            wp_send_json_error([
                'message' => __('Invalid status', 'pingly-product-enquiry')
            ], 400);
        }

        $defaultModules   = (new Settings())->getActiveModule();
        $pinglyActiveModule = get_option('pingly_active_module', $defaultModules);

        // Whitelist check
        if (!isset($pinglyActiveModule[$type])) {
            wp_send_json_error([
                'message' => __('Invalid module type', 'pingly-product-enquiry')
            ], 400);
        }

        $pinglyActiveModule[$type] = $status;
        update_option('pingly_active_module', $pinglyActiveModule);

        $message = ($status === 'no')
            ? __('Successfully disabled active module', 'pingly-product-enquiry')
            : __('Successfully enabled active module', 'pingly-product-enquiry');

        wp_send_json_success([
            'message'       => $message,
            'active_module' => $status,
        ]);
    }

    public function getActiveModule($request)
    {
        if (!check_ajax_referer('pingly_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'pingly-product-enquiry')
            ], 403);
        }

        $type = $request['type'] ?? '';

        $defaultModules   = (new Settings())->getActiveModule();
        $pinglyActiveModule = get_option('pingly_active_module', $defaultModules);

        if (!isset($pinglyActiveModule[$type])) {
            wp_send_json_error([
                'message' => __('Invalid module type', 'pingly-product-enquiry')
            ], 400);
        }

        wp_send_json_success([
            'message'       => __('Enable active module', 'pingly-product-enquiry'),
            'active_module' => $pinglyActiveModule[$type],
        ]);
    }

    public function resetSettings($request)
    {
        if (!check_ajax_referer('pingly_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'pingly-product-enquiry')
            ], 403);
        }

        $type = $request['type'] ?? '';
        $tab  = $request['tab'] ?? '';

        $getDefaultConfigs = (new Settings())->getConfigs();

        // Whitelist check
        if (!isset($getDefaultConfigs[$type][$tab]) || !is_array($getDefaultConfigs[$type][$tab])) {
            wp_send_json_error([
                'message' => __('Invalid reset request', 'pingly-product-enquiry')
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
				__('Reset %s successfully', 'pingly-product-enquiry'),
				ucfirst($tab)
			),
			'settings' => $currentSettings,
		]);
    }

    // Get Product Enquiry addon Details
    public function getPinglyProductEnquiryDetails($request)
    {
        if (!check_ajax_referer('pingly_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'pingly-product-enquiry')
            ], 403);
        }

        $PinglyProductEnquiry = new PinglyProductEnquiry();
        $details        = $PinglyProductEnquiry->getDetails($request);

        wp_send_json_success([
            'message' => __('Pingly Product Enquiry details get successfully.', 'pingly-product-enquiry'),
            'data'    => $details,
        ], 200);
    }

    public function getDetailView($request)
    {
        if (!check_ajax_referer('pingly_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'pingly-product-enquiry')
            ], 403);
        }

        $detailId = absint($request['detail_id'] ?? 0);

        if (!$detailId) {
            wp_send_json_error([
                'message' => __('Invalid detail id', 'pingly-product-enquiry')
            ], 400);
        }

        $PinglyProductEnquiry = new PinglyProductEnquiry();
        $detail         = $PinglyProductEnquiry->getDetail($detailId);

        wp_send_json_success([
            'message' => __('Product Enquiry detail get successfully.', 'pingly-product-enquiry'),
            'detail'  => $detail,
        ], 200);
    }

    public function maybeDeleteDetails($request)
    {
        if (!check_ajax_referer('pingly_nonce', 'nonce', false)) {
            wp_send_json_error([
                'message' => __('Invalid nonce', 'pingly-product-enquiry')
            ], 403);
        }

        if (!current_user_can('manage_options')) {
            wp_send_json_error([
                'message' => __('Unauthorized access', 'pingly-product-enquiry')
            ], 403);
        }

        $actionType = $request['action_type'] ?? '';

        if ($actionType !== 'delete') {
            wp_send_json_error([
                'message' => __('Invalid action type', 'pingly-product-enquiry')
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
                'message' => __('No enquiry selected', 'pingly-product-enquiry')
            ], 400);
        }

        $PinglyProductEnquiry = new PinglyProductEnquiry();
        $PinglyProductEnquiry->deleteInfo($detailsIds);

        wp_send_json_success([
            'message' => __('Selected enquiry successfully deleted', 'pingly-product-enquiry')
        ], 200);
    }
}