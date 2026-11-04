jQuery(document).ready(function ($) {
    var PinglyProductEnquiryPublicVarsSettings = PinglyProductEnquiryPublicVars.pingly_settings.settings;

    var isLoading = false;
    function showLoading() {
        isLoading = true;
        $('#pingly-loading-view').show();
    }
    function hideLoading() {
        isLoading = false;
        setTimeout(function () {
            if (!isLoading) {
                $('#pingly-loading-view').hide();
            }
        }, 700);
    }

    var pinglyPinglyProductEnquiry = {
       // Modal open
        pinglyPinglyProductEnquiryInit: function () {
            let that = this;

            $('body').addClass('pingly-addons-wrapper-home');
            
            $('.pingly-addons-wrapper-home .products .product').each(function() {
                let $parentProduct      = $(this);
                // Detect Add to cart button
                let $addToCart = $parentProduct.find(
                    'a.button.product_type_simple, a.button.add_to_cart_button, .wc-block-components-product-button__button'
                ).not('.qvpu-view-button, .ast-on-card-button');

                // Detect View Product button
                let $viewProduct = $parentProduct.find('.button.product_type_variable, .button.product_type_external, .product_type_grouped');

                setTimeout(() => {
                    let $qvpuWrapper      = $parentProduct.find('.qvpu-add-to-cart-wrapper');
                    let $quickCheckoutBtn = $parentProduct.find('.qdc-direct-checkout-button');
                    let $enquiryShopBtn   = $parentProduct.find('.pingly-button');

                    /** ---------------------------------------------
                     * CASE 1: Wrapper already exists quick view
                     * --------------------------------------------- */
                    if ($qvpuWrapper.length) {
                        if ($enquiryShopBtn.length) {
                            $qvpuWrapper.append($enquiryShopBtn);
                        }
                        return;
                    }

                    /** ---------------------------------------------
                     * CASE 2: Wrapper already exists for direct checkout
                     * --------------------------------------------- */

                    if ($quickCheckoutBtn.length) {
                        if ($enquiryShopBtn.length) {
                            $quickCheckoutBtn.after($enquiryShopBtn);
                        }
                        return;
                    }

                    /** ---------------------------------------------
                     * CASE 3: Create new wrapper
                     * --------------------------------------------- */
    
                    let $newWrapper = $('<div class="pingly-add-to-cart-wrapper"></div>');

                    if ($addToCart.length) {
                        $addToCart.add($enquiryShopBtn).wrapAll($newWrapper);
                    } else {
                        if ($viewProduct.length) {
                            $viewProduct.insertAfter($enquiryShopBtn);
                            $viewProduct.add($enquiryShopBtn).wrapAll($newWrapper);
                        }
                    }
                }, 10);     
            });


            // Click Open modal
            $(document).on('click', '.pingly-button', function (e) {
                e.preventDefault();

                $("body").addClass("pingly-modal-open");
                $('.pingly-modal-wrapper').fadeIn();

                let $btn = $(this);
                let productId = $btn.data('product-id');
                let productSlug = $btn.data('product-slug') ? $btn.data('product-slug') : '';

                // set product ID
                $('input[name="product-id"]').val(productId);
                // Load dynamic form
                that.enquirUsForm(productId, productSlug);
            });

            // Tabs handler
            $(document).on('click', '.pingly-tab', function () {
                const tab = $(this).data('tab');
                const container = $(this).closest('.pingly-form-container');
                // Tabs UI
                container.find('.pingly-tab').removeClass('active');
                $(this).addClass('active');

                container.find('.pingly-tab-content').removeClass('active');
                container.find('#pingly-tab-' + tab).addClass('active');
            });

            // Trigger default state
            $('.pingly-tab.active').trigger('click');
        },

        enquirUsForm: function (productId, productSlug) {
            showLoading();

            $.post('/?wc-ajax=pingly_ajax_actions', {
                route: 'pingly_form',
                nonce: window.PinglyProductEnquiryPublicVars.nonce,
                product_id: productId,
                product_slug: productSlug
            })
            .success(function (response) {
                if (response.success && response.data.fragments) {
                    // update form HTML from PHP
                    $('.pingly-form-container').replaceWith(
                        response.data.fragments['.pingly-form-container']
                    );
                }
            })
            .always(function () {
                hideLoading();
            });
        },

        // Modal close
        closeModal: function () {
            // Close button
            $(document).on('click', '.pingly-view-close', function () {
                $('.pingly-modal-wrapper').fadeOut();
                $("body").removeClass("pingly-modal-open");
            });

            // Click outside to close
            $(document).on('click', '.pingly-modal-wrapper', function (e) {
                if ($(e.target).hasClass('pingly-modal-wrapper')) {
                    $('.pingly-modal-wrapper').fadeOut();
                    $("body").removeClass("pingly-modal-open");
                }
            });

            // Escape key close
            $(document).on('keyup', function (e) {
                if (e.key === "Escape") {
                    $('.pingly-modal-wrapper').fadeOut();
                    $("body").removeClass("pingly-modal-open");
                }
            });
        },

        // Form submit handler
        enquireUsDetailsHandler: function () {
            let that = this;
            $(document).on('click', '.pingly-form-container .pingly-submit', function (e) {
                e.preventDefault();
                let $form = $(this).closest('form');

                let name         = $form.find('input[name="name"]').val()?.trim() || '';
                let email        = $form.find('input[name="email"]').val()?.trim() || '';
                let enquiry      = $form.find('textarea[name="enquiry"]').val()?.trim() || '';
                let product_id   = $form.find('input[name="product_id"]').val() || '';
                let phone_number = $form.find('input[name="phone_number"]').val()?.trim() || '';
                let country_code = $form.find('select[name="country_code"]').val() || '';
                let subscribe    = $form.find('input[name="subscribe"]').is(':checked') ? 'yes' : 'no';
                // get active tab (enquire)
                let type = $('.pingly-tab.active').data('tab'); // enquire
                let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                // helper function for notice
                function showError(msg) {
                    $('.pingly-notice .pingly-response-message')
                        .text(msg)
                        .css('color', 'red');
                    $('.pingly-notice').fadeIn();

                    setTimeout(function () {
                        $('.pingly-notice').fadeOut();
                    }, 4000);
                }
                /* ======================
                ENQUIRE FORM VALIDATION
                ======================= */
                if (type === 'email') {
                    if (!name) {
                        showError('Name is required');
                        return;
                    }
                    if (!email) {
                        showError('Email is required');
                        return;
                    }
                    if (!emailPattern.test(email)) {
                        showError('Please enter a valid email address');
                        return;
                    }
                    if (!enquiry) {
                        showError('Enquiry is required');
                        return;
                    }
                }

                // send data
                let details = {
                    name,
                    email,
                    enquiry,
                    product_id,
                    phone_number,
                    country_code,
                    type,
                    subscribe
                };
                that.enquireUsDetailsAction(details);
            });
        },

        // AJAX request
        enquireUsDetailsAction: function (details) {
            showLoading();
            jQuery.post('/?wc-ajax=pingly_ajax_actions', {
                route: 'pingly_details',
                nonce: window.PinglyProductEnquiryPublicVars.nonce,
                details: JSON.stringify(details),
            })
            .success(function(response) {
                if (response.success) {
                    $('.pingly-notice .pingly-response-message').text(response.data.message).css({'color': 'green', 'border-left': '4px solid green'});
                    $('.pingly-notice').fadeIn();
                    // Reset form
                    $('.pingly-form-container form')[0].reset();
                    setTimeout(function () {
                        $('.pingly-notice').fadeOut();
                        $('.pingly-modal-wrapper').fadeOut();
                        $("body").removeClass("pingly-modal-open");
                    }, 6000);
                } else {
                    $('.pingly-notice .pingly-response-message').text(response.data.message).css({'color': 'red', 'border-left': '4px solid red'});
                    $('.pingly-notice').fadeIn();
                    setTimeout(function () {
                        $('.pingly-notice').fadeOut();
                    }, 4000);
                } 
            })
            .fail(function(error) {
            })
            .always(function() {
                hideLoading();
            });
        },

        init: function () {
            this.pinglyPinglyProductEnquiryInit();
            this.closeModal();
            this.enquireUsDetailsHandler();
            // this.enquirUsShopButtonInit();
        }
    };

    pinglyPinglyProductEnquiry.init();
});
