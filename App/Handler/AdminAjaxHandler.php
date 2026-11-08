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

        // phpcs:disable WordPress.Security.NonceVerification.Recommended.
        $route = isset($_REQUEST['route']) ? sanitize_key(wp_unslash($_REQUEST['route'])) : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

        if (!$route) {
            wp_send_json_error([
                'message' => __('Invalid route', 'pingly-product-enquiry')
            ], 400);
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
            wp_send_json_error([
                'message' => __('Invalid route', 'pingly-product-enquiry')
            ], 400);
        }

        // Must run before the handler, because handlers end the request with wp_send_json_*().
        do_action('pingly_admin_ajax_handler_catch', $route);

        $this->{$validRoutes[$route]}();

        wp_die();
    }

    public function getSettings()
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

        // phpcs:disable WordPress.Security.NonceVerification.Recommended.
        $type = isset($_REQUEST['type']) ? sanitize_key($_REQUEST['type']) : '';
        $tab  = isset($_REQUEST['tab'])  ? sanitize_key($_REQUEST['tab'])  : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

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

    public function saveSettings()
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

        // phpcs:disable WordPress.Security.NonceVerification.Recommended.
        $type = isset($_REQUEST['type']) ? sanitize_key(wp_unslash($_REQUEST['type'])) : '';
        $tab  = isset($_REQUEST['tab'])  ? sanitize_key(wp_unslash($_REQUEST['tab']))  : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

        $getConfigs = (new Settings())->getConfigs();

        // Whitelist check
        if (!isset($getConfigs[$type][$tab])) {
            wp_send_json_error([
                'message' => __('Invalid settings type or tab', 'pingly-product-enquiry')
            ], 400);
        }

        // Nonce is verified above.
        // phpcs:disable WordPress.Security.NonceVerification.Recommended.
        $newSettings = isset($_REQUEST['tab_configs']) && is_array($_REQUEST['tab_configs'])
            ? map_deep(wp_unslash($_REQUEST['tab_configs']), 'sanitize_textarea_field')
            : null;
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

        if (!is_array($newSettings)) {
            wp_send_json_error([
                'message' => __('Invalid settings data', 'pingly-product-enquiry')
            ], 400);
        }

        // Only keys that exist in the defaults, with value type checks.
        $newSettings = $this->filterSettings($newSettings, $getConfigs[$type][$tab]);

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

    private function filterSettings(array $new, array $defaults)
    {
        $clean = [];

        foreach ($defaults as $key => $default) {
            if (!array_key_exists($key, $new)) {
                continue;
            }

            $value = $new[$key];

            // List fields (e.g. WhatsApp / SMS numbers).
            if (is_array($default)) {
                if (!is_array($value)) {
                    continue;
                }

                $rows = [];
                foreach ($value as $row) {
                    if (!is_array($row)) {
                        continue;
                    }
                    $cleanRow = [];
                    foreach ($row as $rowKey => $rowValue) {
                        if (is_scalar($rowValue)) {
                            $cleanRow[sanitize_key($rowKey)] = $rowValue;
                        }
                    }
                    $rows[] = $cleanRow;
                }

                $clean[$key] = $rows;
                continue;
            }

            if (!is_scalar($value)) {
                continue;
            }

            if (($default === 'yes' || $default === 'no') && !in_array($value, ['yes', 'no'], true)) {
                continue;
            }

            if ($key === 'admin_email') {
                $value = sanitize_email($value);
                if (!is_email($value)) {
                    continue;
                }
            }

            $clean[$key] = $value;
        }

        return $clean;
    }

    public function enableActiveModule()
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

        // phpcs:disable WordPress.Security.NonceVerification.Recommended.
        $type = isset($_REQUEST['type']) ? sanitize_key(wp_unslash($_REQUEST['type'])) : '';
        $status  = isset($_REQUEST['status'])  ? sanitize_key(wp_unslash($_REQUEST['status']))  : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

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

    public function getActiveModule()
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

        // phpcs:disable WordPress.Security.NonceVerification.Recommended.
        $type = isset($_REQUEST['type']) ? sanitize_key(wp_unslash($_REQUEST['type'])) : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

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

    public function resetSettings()
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

        // phpcs:disable WordPress.Security.NonceVerification.Recommended.
        $type = isset($_REQUEST['type']) ? sanitize_key(wp_unslash($_REQUEST['type'])) : '';
        $tab  = isset($_REQUEST['tab'])  ? sanitize_key(wp_unslash($_REQUEST['tab']))  : '';
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

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
    public function getPinglyProductEnquiryDetails()
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

        // Nonce is verified above.
        // phpcs:disable WordPress.Security.NonceVerification.Recommended.
        $search      = isset($_REQUEST['search'])       ? sanitize_text_field(wp_unslash($_REQUEST['search']))  : '';
        $status      = isset($_REQUEST['status'])       ? sanitize_text_field(wp_unslash($_REQUEST['status']))  : '';
        $currentPage = isset($_REQUEST['current_page']) ? absint(wp_unslash($_REQUEST['current_page']))         : 1;
        $perPage     = isset($_REQUEST['per_page'])     ? absint(wp_unslash($_REQUEST['per_page']))             : 10;
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

        $params = [
            'search'       => $search,
            'status'       => $status,
            'current_page' => max(1, $currentPage),
            'per_page'     => min(100, max(1, $perPage)),
        ];

        $PinglyProductEnquiry = new PinglyProductEnquiry();
        $details              = $PinglyProductEnquiry->getDetails($params);

        wp_send_json_success([
            'message' => __('Pingly Product Enquiry details get successfully.', 'pingly-product-enquiry'),
            'data'    => $details,
        ], 200);
    }

    public function getDetailView()
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

        // phpcs:disable WordPress.Security.NonceVerification.Recommended.
        $detailId = isset($_REQUEST['detail_id']) ? absint($_REQUEST['detail_id']) : 0;
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

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

    public function maybeDeleteDetails()
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

        // Nonce is verified above.
        // phpcs:disable WordPress.Security.NonceVerification.Recommended
        $actionType = isset($_REQUEST['action_type']) ? sanitize_key(wp_unslash($_REQUEST['action_type'])) : '';
        $detailsIds = isset($_REQUEST['details_ids'])
            ? array_map('absint', (array) wp_unslash($_REQUEST['details_ids']))
            : [];
        // phpcs:enable WordPress.Security.NonceVerification.Recommended

        if ($actionType !== 'delete') {
            wp_send_json_error([
                'message' => __('Invalid action type', 'pingly-product-enquiry')
            ], 400);
        }

        // Only positive integers, no duplicates, no zeros
        $detailsIds = array_values(array_unique(array_filter($detailsIds)));

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