/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./resources/public/js/wpcipe.js ***!
  \***************************************/
jQuery(document).ready(function ($) {
  var WPCreativeIdeaProductEnquiryPublicVarsSettings = WPCreativeIdeaProductEnquiryPublicVars.wpcipe_settings.settings;
  var isLoading = false;
  function showLoading() {
    isLoading = true;
    $('#wpcipe-loading-view').show();
  }
  function hideLoading() {
    isLoading = false;
    setTimeout(function () {
      if (!isLoading) {
        $('#wpcipe-loading-view').hide();
      }
    }, 700);
  }
  var wpcipeWPCreativeIdeaProductEnquiry = {
    // Modal open
    wpcipeWPCreativeIdeaProductEnquiryInit: function wpcipeWPCreativeIdeaProductEnquiryInit() {
      var that = this;
      $('body').addClass('wpcipe-addons-wrapper-home');
      $('.wpcipe-addons-wrapper-home .products .product').each(function () {
        var $parentProduct = $(this);
        // Detect Add to cart button
        var $addToCart = $parentProduct.find('a.button.product_type_simple, a.button.add_to_cart_button, .wc-block-components-product-button__button').not('.qvpu-view-button, .ast-on-card-button');

        // Detect View Product button
        var $viewProduct = $parentProduct.find('.button.product_type_variable, .button.product_type_external, .product_type_grouped');
        setTimeout(function () {
          var $qvpuWrapper = $parentProduct.find('.qvpu-add-to-cart-wrapper');
          var $quickCheckoutBtn = $parentProduct.find('.qdc-direct-checkout-button');
          var $enquiryShopBtn = $parentProduct.find('.wpcipe-button');

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

          var $newWrapper = $('<div class="wpcipe-add-to-cart-wrapper"></div>');
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
      $(document).on('click', '.wpcipe-button', function (e) {
        e.preventDefault();
        $("body").addClass("wpcipe-modal-open");
        $('.wpcipe-modal-wrapper').fadeIn();
        var $btn = $(this);
        var productId = $btn.data('product-id');
        var productSlug = $btn.data('product-slug') ? $btn.data('product-slug') : '';

        // set product ID
        $('input[name="product-id"]').val(productId);
        // Load dynamic form
        that.enquirUsForm(productId, productSlug);
      });

      // Tabs handler
      $(document).on('click', '.wpcipe-tab', function () {
        var tab = $(this).data('tab');
        var container = $(this).closest('.wpcipe-form-container');
        // Tabs UI
        container.find('.wpcipe-tab').removeClass('active');
        $(this).addClass('active');
        container.find('.wpcipe-tab-content').removeClass('active');
        container.find('#wpcipe-tab-' + tab).addClass('active');
      });

      // Trigger default state
      $('.wpcipe-tab.active').trigger('click');
    },
    enquirUsForm: function enquirUsForm(productId, productSlug) {
      showLoading();
      $.post('/?wc-ajax=wpcipe_ajax_actions', {
        route: 'wpcipe_form',
        nonce: window.WPCreativeIdeaProductEnquiryPublicVars.nonce,
        product_id: productId,
        product_slug: productSlug
      }).success(function (response) {
        if (response.success && response.data.fragments) {
          // update form HTML from PHP
          $('.wpcipe-form-container').replaceWith(response.data.fragments['.wpcipe-form-container']);
        }
      }).always(function () {
        hideLoading();
      });
    },
    // Modal close
    closeModal: function closeModal() {
      // Close button
      $(document).on('click', '.wpcipe-view-close', function () {
        $('.wpcipe-modal-wrapper').fadeOut();
        $("body").removeClass("wpcipe-modal-open");
      });

      // Click outside to close
      $(document).on('click', '.wpcipe-modal-wrapper', function (e) {
        if ($(e.target).hasClass('wpcipe-modal-wrapper')) {
          $('.wpcipe-modal-wrapper').fadeOut();
          $("body").removeClass("wpcipe-modal-open");
        }
      });

      // Escape key close
      $(document).on('keyup', function (e) {
        if (e.key === "Escape") {
          $('.wpcipe-modal-wrapper').fadeOut();
          $("body").removeClass("wpcipe-modal-open");
        }
      });
    },
    // Form submit handler
    enquireUsDetailsHandler: function enquireUsDetailsHandler() {
      var that = this;
      $(document).on('click', '.wpcipe-form-container .wpcipe-submit', function (e) {
        var _$form$find$val, _$form$find$val2, _$form$find$val3, _$form$find$val4;
        e.preventDefault();
        var $form = $(this).closest('form');
        var name = ((_$form$find$val = $form.find('input[name="name"]').val()) === null || _$form$find$val === void 0 ? void 0 : _$form$find$val.trim()) || '';
        var email = ((_$form$find$val2 = $form.find('input[name="email"]').val()) === null || _$form$find$val2 === void 0 ? void 0 : _$form$find$val2.trim()) || '';
        var enquiry = ((_$form$find$val3 = $form.find('textarea[name="enquiry"]').val()) === null || _$form$find$val3 === void 0 ? void 0 : _$form$find$val3.trim()) || '';
        var product_id = $form.find('input[name="product_id"]').val() || '';
        var phone_number = ((_$form$find$val4 = $form.find('input[name="phone_number"]').val()) === null || _$form$find$val4 === void 0 ? void 0 : _$form$find$val4.trim()) || '';
        var country_code = $form.find('select[name="country_code"]').val() || '';
        var subscribe = $form.find('input[name="subscribe"]').is(':checked') ? 'yes' : 'no';
        // get active tab (enquire)
        var type = $('.wpcipe-tab.active').data('tab'); // enquire
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // helper function for notice
        function showError(msg) {
          $('.wpcipe-notice .wpcipe-response-message').text(msg).css('color', 'red');
          $('.wpcipe-notice').fadeIn();
          setTimeout(function () {
            $('.wpcipe-notice').fadeOut();
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
        var details = {
          name: name,
          email: email,
          enquiry: enquiry,
          product_id: product_id,
          phone_number: phone_number,
          country_code: country_code,
          type: type,
          subscribe: subscribe
        };
        that.enquireUsDetailsAction(details);
      });
    },
    // AJAX request
    enquireUsDetailsAction: function enquireUsDetailsAction(details) {
      showLoading();
      jQuery.post('/?wc-ajax=wpcipe_ajax_actions', {
        route: 'wpcipe_details',
        nonce: window.WPCreativeIdeaProductEnquiryPublicVars.nonce,
        details: JSON.stringify(details)
      }).success(function (response) {
        if (response.success) {
          $('.wpcipe-notice .wpcipe-response-message').text(response.data.message).css({
            'color': 'green',
            'border-left': '4px solid green'
          });
          $('.wpcipe-notice').fadeIn();
          // Reset form
          $('.wpcipe-form-container form')[0].reset();
          setTimeout(function () {
            $('.wpcipe-notice').fadeOut();
            $('.wpcipe-modal-wrapper').fadeOut();
            $("body").removeClass("wpcipe-modal-open");
          }, 6000);
        } else {
          $('.wpcipe-notice .wpcipe-response-message').text(response.data.message).css({
            'color': 'red',
            'border-left': '4px solid red'
          });
          $('.wpcipe-notice').fadeIn();
          setTimeout(function () {
            $('.wpcipe-notice').fadeOut();
          }, 4000);
        }
      }).fail(function (error) {}).always(function () {
        hideLoading();
      });
    },
    init: function init() {
      this.wpcipeWPCreativeIdeaProductEnquiryInit();
      this.closeModal();
      this.enquireUsDetailsHandler();
      // this.enquirUsShopButtonInit();
    }
  };
  wpcipeWPCreativeIdeaProductEnquiry.init();
});
/******/ })()
;