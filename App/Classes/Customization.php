<?php

namespace PinglyProductEnquiry\Classes;

class Customization 
{
    public static function PinglyProductEnquiryAddSettings($settings)
    {
        $settings[] = include_once PINGLY_PLUGIN_DIR_PATH . 'App/Classes/PinglyProductEnquirySettings.php';

        return $settings ;
    }
}