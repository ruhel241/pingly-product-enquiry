<?php

namespace WPCreativeIdeaProductEnquiry\Handler;
use WPCreativeIdeaProductEnquiry\Handler\FrontendHandler;

class ActionHandler
{
    public function register() {
        $this->activationAddons();
    }

    public function activationAddons() {
      
        $wpcipeActiveModule = get_option('wpcipe_active_module', []);

        if (isset($wpcipeActiveModule['wpcipe_module']) && $wpcipeActiveModule['wpcipe_module'] === 'yes') {
            $frontendHandler = new FrontendHandler();
            $frontendHandler->register();
        } 
    }
}
