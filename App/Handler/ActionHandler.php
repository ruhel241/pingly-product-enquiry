<?php

namespace PinglyProductEnquiry\Handler;
use PinglyProductEnquiry\Handler\FrontendHandler;

class ActionHandler
{
    public function register() {
        $this->activationAddons();
    }

    public function activationAddons() {
      
        $pinglyActiveModule = get_option('pingly_active_module', []);

        if (isset($pinglyActiveModule['pingly_module']) && $pinglyActiveModule['pingly_module'] === 'yes') {
            $frontendHandler = new FrontendHandler();
            $frontendHandler->register();
        } 
    }
}
