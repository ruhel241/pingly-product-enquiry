=== Pingly Product Enquiry ===
Contributors: ruhel241
Tags: product enquiry, whatsapp enquiry, sms enquiry, contact form, woocommerce enquiry
Requires at least: 6.0
Tested up to: 7.1
Requires PHP: 7.4
Requires Plugins: woocommerce
Stable tag: 1.0.2
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

Let customers send product enquiries through a popup form, WhatsApp, or SMS without adding products to the cart.

== Description ==

Pingly Product Enquiry lets customers contact your store using an enquiry form, WhatsApp, or SMS directly from your WooCommerce store. Customers can ask questions about products before purchasing, helping you provide faster customer support.

The plugin displays a convenient popup with the contact options you enable. Customers can submit an enquiry, open WhatsApp with a pre-filled message, or open their device's default SMS application to contact your store.

You can configure multiple WhatsApp contact numbers and SMS recipient numbers so customers can choose the appropriate contact.

= Use Case =

A customer is viewing a product and has a question about its size, availability, or delivery. Instead of adding the product to the cart or searching for a contact page, the customer clicks the enquiry button and chooses how to contact your store: submit an enquiry form, open WhatsApp, or send an SMS using their device's messaging application.

= Main Capabilities =

* Product enquiry form in a popup
* WhatsApp contact with multiple configurable recipient numbers
* SMS contact with configurable recipient numbers
* Enquiries saved in your WordPress database
* General enquiries not tied to a specific product
* Different headings for in-stock, out-of-stock, and backorder products
* Country code selector with phone number field
* Optional newsletter subscription checkbox
* Name and email pre-filled for logged-in users
* Customisable tab names, headings, and button text
* Enquiry notifications sent to the configured admin email
* Lightweight and easy to configure

= Enquiry Form =

Customers can submit their name, email address, phone number, and message through the popup form. The product being viewed is automatically associated with the enquiry when applicable.

= Enquiry Records =

Submitted enquiries are saved in your WordPress database so administrators can review them from the plugin's admin interface.

= WhatsApp Contact =

Configure multiple WhatsApp contact numbers, each with its own receiver name. Customers can choose a contact, and WhatsApp opens with a pre-filled message containing relevant product information.

Customers can review and send the message through WhatsApp.

= SMS Contact =

Configure one or more SMS recipient numbers in the plugin settings. Customers can choose a recipient and open their device's default SMS application with a pre-filled enquiry message, where supported by their device and browser.

The customer reviews and sends the SMS using their messaging application. The plugin does not require Twilio or another third-party SMS gateway for this click-to-SMS functionality.

Mobile device, browser, and operating system support may affect how SMS links are handled.

= Stock-Aware Headings =

Configure separate enquiry headings for in-stock, out-of-stock, and backorder products. Use the `{title}` placeholder to include the product name.

= Tab Control =

Enable or disable the Enquiry Form, WhatsApp, and SMS tabs independently. You can also customise the tab labels and button text.

= Translation Ready =

All plugin text uses the `pingly-product-enquiry` text domain.

= Privacy =

Enquiries submitted through the form (name, email address, phone number, and message) are stored in your WordPress database and are not sent to third parties. Data is shared with WhatsApp only when the customer chooses the WhatsApp contact option, as described in the External Services section below.

= Trademarks =

WhatsApp and WooCommerce are trademarks of their respective owners. This plugin is not affiliated with, endorsed by, or sponsored by them.

== External Services ==

= WhatsApp (Click to Chat) =

When a customer selects a WhatsApp contact, the plugin opens WhatsApp using a click-to-chat link at `https://wa.me`. The link can include a pre-filled message containing enquiry or product information.

The plugin does not send the WhatsApp message automatically. The customer must review and send the message through WhatsApp.

Data shared with WhatsApp may include the selected recipient's phone number and the message content prepared for the enquiry. This data is shared when the customer opens and uses WhatsApp.

WhatsApp is only used when the customer chooses the WhatsApp contact option.

* WhatsApp Terms of Service: https://www.whatsapp.com/legal/terms-of-service
* WhatsApp Privacy Policy: https://www.whatsapp.com/legal/privacy-policy

= SMS (Device Messaging Application) =

The SMS contact option uses the customer's device to open a messaging application with a recipient number and a pre-filled message, where supported.

The plugin itself does not send SMS messages through an external SMS gateway. The customer chooses whether to send the message using their messaging application.

SMS delivery, availability, and charges depend on the customer's device, mobile carrier, and messaging service.

== Development ==

Pingly Product Enquiry uses development tools including Vue.js, npm, Laravel Mix, Webpack, Babel, and Composer to generate production-ready JavaScript, CSS, and PHP assets.

The source repository contains the human-readable source code used to build the distributed plugin assets.

= Naming Convention =

Plugin-defined functions, hooks, AJAX actions, and options use the `pingly_` prefix, and constants use the `PINGLY_` prefix. Classes are namespaced to help avoid conflicts with other plugins.

= Source Code Repository =

https://github.com/ruhel241/pingly-product-enquiry

The repository includes source files and build configuration used to develop the plugin, including:

* App/
* resources/
* languages/
* readme.txt
* composer.json
* pingly-product-enquiry.php

It also contains dependency definitions and configuration files required for development and compilation.

= Build Instructions =

1. Clone the repository.
2. Install dependencies using `composer install` and `npm install`.
3. Build development assets using `npm run dev`.
4. Build production assets using `npm run production`.

Compiled JavaScript and CSS files in the `assets/` directory are generated from the source code in the repository.

= Composer Autoload =

This plugin uses Composer for PHP dependency management and autoloading. Install the required dependencies by running `composer install`.

== Installation ==

= From the WordPress Admin =

1. Log in to your WordPress admin area.
2. Go to Plugins -> Add New.
3. Search for Pingly Product Enquiry.
4. Click Install Now.
5. Activate the plugin.

= Manual Installation =

1. Upload the plugin files to the `/wp-content/plugins/pingly-product-enquiry` directory, or install the plugin through the WordPress plugins screen.
2. Activate the plugin through the Plugins screen in WordPress.

WooCommerce must be installed and active.

= Getting Started =

1. Open Pingly Product Enquiry from the WordPress admin menu.
2. Choose which tabs to enable: Enquiry Form, WhatsApp, and SMS.
3. Configure the form headings, tab labels, and button text.
4. Add your WhatsApp contact numbers and receiver names.
5. Configure your SMS recipient numbers.
6. Save your settings.
7. Visit a product page and test the enquiry button.
8. Review submitted enquiries from the plugin's admin interface.

== Frequently Asked Questions ==

= Does this plugin require WooCommerce? =

Yes. The plugin is designed for WooCommerce stores and product pages. WooCommerce must be installed and active.

= How does the enquiry form work? =

Customers submit an enquiry using the popup form with their name, email address, phone number, and message. The product they are viewing is associated with the enquiry automatically. The enquiry is saved in your WordPress database and a notification is sent to the configured admin email.

= Where can I see the submitted enquiries? =

Open Pingly Product Enquiry from the WordPress admin menu. Submitted enquiries are listed there, and you can view or delete them.

= Can I add more than one WhatsApp number? =

Yes. You can add multiple WhatsApp contact numbers, each with its own receiver name. Customers choose the contact they want to message.

= Does the SMS option need an SMS gateway like Twilio? =

No. The SMS option opens the customer's default messaging application with a pre-filled message. The customer reviews and sends the SMS themselves. Support depends on the customer's device and browser.

= Does the plugin send WhatsApp messages automatically? =

No. WhatsApp opens with a pre-filled message, and the customer must review and send it.

= Can I disable the WhatsApp or SMS tab? =

Yes. You can enable or disable the Enquiry Form, WhatsApp, and SMS tabs independently from the plugin settings.

= Can I change the headings and button text? =

Yes. You can customise tab names, headings, and button text. You can also set separate headings for in-stock, out-of-stock, and backorder products using the `{title}` placeholder.

= Is the plugin translation ready? =

Yes. All plugin text uses the `pingly-product-enquiry` text domain.

== Changelog ==

= 1.0.2 =
* Renamed the plugin to Pingly Product Enquiry and updated the text domain.
* Improved request sanitization, validation, and nonce handling.
* Updated the function, hook, and option prefix to `pingly_`.

= 1.0.1 =
* Security and plugin review fixes.

= 1.0.0 =
* Initial release.

== Upgrade Notice ==

= 1.0.2 =
Plugin renamed, text domain and prefixes updated, and security improvements.