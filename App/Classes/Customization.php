<?php

namespace WPCreativeIdeaProductEnquiry\Classes;

class Customization 
{
    public static function WPCreativeIdeaProductEnquiryAddSettings($settings)
    {
        $settings[] = include_once WPCIPE_PLUGIN_DIR_PATH . 'App/Classes/WPCreativeIdeaProductEnquirySettings.php';

        return $settings ;
    }
}