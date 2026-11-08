/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./resources/public/js/pingly.js ***!
  \***************************************/
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
    pinglyPinglyProductEnquiryInit: function pinglyPinglyProductEnquiryInit() {
      var that = this;
      $('body').addClass('pingly-addons-wrapper-home');
      $('.pingly-addons-wrapper-home .products .product').each(function () {
        var $parentProduct = $(this);
        // Detect Add to cart button
        var $addToCart = $parentProduct.find('a.button.product_type_simple, a.button.add_to_cart_button, .wc-block-components-product-button__button').not('.qvpu-view-button, .ast-on-card-button');

        // Detect View Product button
        var $viewProduct = $parentProduct.find('.button.product_type_variable, .button.product_type_external, .product_type_grouped');
        setTimeout(function () {
          var $qvpuWrapper = $parentProduct.find('.qvpu-add-to-cart-wrapper');
          var $quickCheckoutBtn = $parentProduct.find('.qdc-direct-checkout-button');
          var $enquiryShopBtn = $parentProduct.find('.pingly-button');

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

          var $newWrapper = $('<div class="pingly-add-to-cart-wrapper"></div>');
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
        var $btn = $(this);
        var productId = $btn.data('product-id');
        var productSlug = $btn.data('product-slug') ? $btn.data('product-slug') : '';

        // set product ID
        $('input[name="product-id"]').val(productId);
        // Load dynamic form
        that.enquirUsForm(productId, productSlug);
      });

      // Tabs handler
      $(document).on('click', '.pingly-tab', function () {
        var tab = $(this).data('tab');
        var container = $(this).closest('.pingly-form-container');
        // Tabs UI
        container.find('.pingly-tab').removeClass('active');
        $(this).addClass('active');
        container.find('.pingly-tab-content').removeClass('active');
        container.find('#pingly-tab-' + tab).addClass('active');
      });

      // Trigger default state
      $('.pingly-tab.active').trigger('click');
    },
    enquirUsForm: function enquirUsForm(productId, productSlug) {
      showLoading();
      $.post('/?wc-ajax=pingly_ajax_actions', {
        route: 'pingly_form',
        nonce: window.PinglyProductEnquiryPublicVars.nonce,
        product_id: productId,
        product_slug: productSlug
      }).success(function (response) {
        if (response.success && response.data.fragments) {
          // update form HTML from PHP
          $('.pingly-form-container').replaceWith(response.data.fragments['.pingly-form-container']);
        }
      }).always(function () {
        hideLoading();
      });
    },
    // Modal close
    closeModal: function closeModal() {
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
    enquireUsDetailsHandler: function enquireUsDetailsHandler() {
      var that = this;
      $(document).on('click', '.pingly-form-container .pingly-submit', function (e) {
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
        var type = $('.pingly-tab.active').data('tab'); // enquire
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // helper function for notice
        function showError(msg) {
          $('.pingly-notice .pingly-response-message').text(msg).css('color', 'red');
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
      jQuery.post('/?wc-ajax=pingly_ajax_actions', {
        route: 'pingly_details',
        nonce: window.PinglyProductEnquiryPublicVars.nonce,
        details: JSON.stringify(details)
      }).success(function (response) {
        if (response.success) {
          $('.pingly-notice .pingly-response-message').text(response.data.message).css({
            'color': 'green',
            'border-left': '4px solid green'
          });
          $('.pingly-notice').fadeIn();
          // Reset form
          $('.pingly-form-container form')[0].reset();
          setTimeout(function () {
            $('.pingly-notice').fadeOut();
            $('.pingly-modal-wrapper').fadeOut();
            $("body").removeClass("pingly-modal-open");
          }, 6000);
        } else {
          $('.pingly-notice .pingly-response-message').text(response.data.message).css({
            'color': 'red',
            'border-left': '4px solid red'
          });
          $('.pingly-notice').fadeIn();
          setTimeout(function () {
            $('.pingly-notice').fadeOut();
          }, 4000);
        }
      }).fail(function (error) {}).always(function () {
        hideLoading();
      });
    },
    init: function init() {
      this.pinglyPinglyProductEnquiryInit();
      this.closeModal();
      this.enquireUsDetailsHandler();
      // this.enquirUsShopButtonInit();
    }
  };
  pinglyPinglyProductEnquiry.init();
});
/******/ })()
;