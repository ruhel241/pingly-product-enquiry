<?php

namespace PinglyProductEnquiry;

if (!defined('ABSPATH')) {
    exit;
}

class Settings
{
    public function getConfigs()
    {
        $configs = [
            'pingly_settings' => [
                'settings' => [
                    'shop_page_enable'                     => 'yes',
                    'in_stock_shop_button_text'            => 'Enquiry Us',
                    'out_of_stock_shop_button_text'        => 'Email when stock available',
                    'backorder_shop_button_text'           => 'Pre order',
                    'single_page_enable'                   => 'yes',
                    'in_stock_single_button_text'          => 'Enquiry Us {title}',
                    'out_of_stock_single_button_text'      => 'Email when stock available {title}',
                    'backorder_single_button_text'         => 'Pre order Enquiry {title}',
                    'in_stock_form_heading'                => 'Enquiry Us {title}',
                    'out_of_stock_form_heading'            => 'Email when stock available {title}',
                    'backorder_form_heading'               => 'Pre order Enquiry {title}',
                    'enquiry_form_tab_enable'              => 'yes',
                    'whatsapp_tab_enable'                  => 'no',
                    'sms_tab_enable'                       => 'no',
                    'email_enable'                         => 'yes',
                    'admin_email'                          => get_option('admin_email'),
                    'enquiry_tab_text'                     => 'Enquiry Form',
                    'enquiry_submit_button_text'           => 'Submit Enquiry',
                    'whatsapp_tab_text'                    => 'Contact on whatsapp',
                    'whatsapp_title_text'                  => 'Chat with us instantly on WhatsApp.',
                    'whatsapp_button_text'                 => 'Chat on WhatsApp',
                    'whatsapp_numbers'                     => [],
                    'whatsapp_message'                     => 'Hello {receiver_name}, I would like to enquire about {title}, Product Link: {url}',
                    'sms_tab_text'                         => 'Send SMS',
                    'sms_title_text'                       => 'Send us a message',
                    'sms_button_text'                      => 'Send SMS',
                    'sms_numbers'                          => [],
                    'sms_message'                          => 'Hello {receiver_name}, I would like to enquire about {title}, Product Link: {url}',
                    'shortcode_enquiry_button_text'     => 'Enquiry us',
                    'cart_page_enquiry_btn_enable'      => 'yes',
                    'cart_page_enquiry_button_text'     => 'Enquiry us',
                    'order_summary_enquiry_btn_enable'  => 'yes',
                    'order_summary_enquiry_button_text' => 'Enquiry us',
                ],
                'styles' => [
                    'instock_shop_button_color'             => '#0E9204',
                    'out_of_stock_shop_button_color'        => '#d50606ff',
                    'backorder_shop_button_color'           => '#b704d2ff',
                    'instock_single_button_color'           => '#0E9204',
                    'out_of_stock_single_button_color'      => '#d50606ff',
                    'backorder_single_button_color'         => '#b704d2ff',
                    'header_background_color'               => '#FF7800',
                    'active_tab_color'                      => '#FF7800',
                    'submit_button_background_color'        => '#FF7800',
                    'shortcode_enquiry_button_color'     => '#5467f8',
                    'cart_page_enquiry_button_color'     => '#5467f8',
                    'order_summary_enquiry_button_color' => '#5467f8',

                ],
                'pingly-product-enquiry' => [
                    'details' => []
                ]
            ],
        ];

        return apply_filters('pingly/configs', $configs);
    }

    public function getActiveModule() {
        $pinglyActiveModule = [
            'pingly_module' => 'yes',
        ];

        return apply_filters('pingly/active_module', $pinglyActiveModule);
    }

    public function pinglyLicense() {
        $pinglyLicense = [
            'license_key' => '',
            'price_id'    => '',
            'expires'     => '',
            'status'      => '',
        ];
        
        return apply_filters('pingly/get_license', $pinglyLicense);
    }
}

