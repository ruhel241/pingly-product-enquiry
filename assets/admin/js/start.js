/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Application.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Application.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! clipboard */ "./node_modules/clipboard/dist/clipboard.js");
/* harmony import */ var clipboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clipboard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layouts/Navigation.vue */ "./resources/admin/Layouts/Navigation.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'application',
  components: {
    Navigation: _Layouts_Navigation_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  methods: {},
  mounted: function mounted() {
    var _this = this;
    // this.getSettings();
    var clipboard = new (clipboard__WEBPACK_IMPORTED_MODULE_0___default())('.copy');
    clipboard.on('success', function (e) {
      _this.$message({
        message: 'Copied to Clipboard!',
        type: 'success',
        offset: 50
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/InputComponent/colorSelect.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/InputComponent/colorSelect.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'color-select',
  props: ['value', 'title'],
  data: function data() {
    return {
      predefineColors: ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585', 'rgba(255, 69, 0, 0.68)', 'rgb(255, 120, 0)', 'hsv(51, 100, 98)', 'hsva(120, 40, 94, 0.5)', 'hsl(181, 100%, 37%)', 'hsla(209, 100%, 56%, 0.73)', '#c7158577']
    };
  },
  computed: {
    model: {
      get: function get() {
        return this.value;
      },
      set: function set(newValue) {
        this.$emit('input', newValue);
      }
    }
  },
  methods: {
    activeChangedEvent: function activeChangedEvent(color) {
      this.$emit('input', color);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Layouts/Navigation.vue?vue&type=script&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Layouts/Navigation.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Navigation',
  props: [''],
  data: function data() {
    return {
      active: localStorage.getItem('pingly_active_menu') || '/',
      allMenuItems: []
    };
  },
  computed: {
    visibleItems: function visibleItems() {
      var _window$PinglyProduct;
      var hasPro = !!((_window$PinglyProduct = window.PinglyProductEnquiryAdminVars) !== null && _window$PinglyProduct !== void 0 && _window$PinglyProduct.has_pro);
      return this.allMenuItems.filter(function (item) {
        // License menu only for Pro version
        if (item.key === 'license_module') {
          return hasPro;
        }
        // Show all other menu items
        return true;
      });
    }
  },
  methods: {
    defaultRoutes: function defaultRoutes() {
      return [{
        route: '/',
        title: 'Enquiry',
        icon: '<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd"><g id="Path" transform="translate(64.000000, 85.333333)"><path d="M384,1.42108547e-14 L384,298.666667 L277.333333,298.666667 L277.333333,384 L147.2,298.666667 L1.42108547e-14,298.666667 L1.42108547e-14,1.42108547e-14 L384,1.42108547e-14 Z M341.333333,42.6666667 L42.6666667,42.6666667 L42.6666667,256 L159.941531,256 L234.666667,305.002667 L234.666667,256 L341.333333,256 L341.333333,42.6666667 Z M192.935,201.066667 C199.768368,201.066667 205.414144,203.316644 209.8725,207.816667 C214.330856,212.316689 216.56,217.983299 216.56,224.816667 C216.56,231.5667 214.330856,237.191644 209.8725,241.691667 C205.414144,246.191689 199.768368,248.441667 192.935,248.441667 C185.934965,248.441667 180.226689,246.191689 175.81,241.691667 C171.393311,237.191644 169.185,231.441702 169.185,224.441667 C169.185,217.774967 171.434978,212.212522 175.935,207.754167 C180.435023,203.295811 186.101632,201.066667 192.935,201.066667 Z M202.185,65.0666667 C221.185095,65.0666667 235.643284,69.5666217 245.56,78.5666667 C254.310044,86.6500404 258.685,97.1499354 258.685,110.066667 C258.685,118.81671 256.560021,126.295802 252.31,132.504167 C248.591231,137.936485 242.320454,143.767492 233.497515,149.997322 L229.56,152.691667 C221.226667,158.275028 216.101676,162.545819 214.185,165.504167 C212.268324,168.462515 211.31,173.733295 211.31,181.316667 L211.31,186.441667 L174.435,186.441667 L174.435,175.441667 C174.435,164.85828 175.518323,157.483354 177.685,153.316667 C178.935006,150.899988 180.601656,148.754176 182.685,146.879167 L185.011529,144.940391 C185.967309,144.18359 187.103359,143.316246 188.419684,142.338357 L201.829549,132.738531 C207.493614,128.58228 211.34124,125.316679 213.3725,122.941667 C216.080847,119.774984 217.435,116.066688 217.435,111.816667 C217.435,106.483307 215.539186,102.254182 211.7475,99.1291667 C207.955814,96.004151 202.810033,94.4416667 196.31,94.4416667 C185.64328,94.4416667 172.768409,98.7332904 157.685,107.316667 L146.56,79.5666667 C165.060093,69.8999517 183.601574,65.0666667 202.185,65.0666667 Z"></path></g></g></svg>',
        key: 'dashboard'
      }, {
        route: '/license-management',
        title: 'License',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m19,17.5c0,.827-.673,1.5-1.5,1.5s-1.5-.673-1.5-1.5.673-1.5,1.5-1.5,1.5.673,1.5,1.5Zm-9,4.5c0-1.654-1.346-3-3-3h-.443c.682-1.687,1.443-3.738,1.443-4.5,0-1.381-1.119-2.45-2.5-2.45s-2.5,1.069-2.5,2.45c0,.762.761,2.813,1.443,4.5h-.443c-1.654,0-3,1.346-3,3-.553,0-1,.447-1,1s.447,1,1,1h9c.553,0,1-.447,1-1s-.447-1-1-1ZM24,5v14c0,2.757-2.243,5-5,5h-6.184c.112-.314.184-.648.184-1,0-.979-.472-1.85-1.199-2.397-.389-1.336-1.322-2.443-2.543-3.063.637-1.793.742-2.551.742-3.039,0-2.284-1.756-4.15-4-4.399v-5.101c0-2.757,2.243-5,5-5h8c2.757,0,5,2.243,5,5Zm-14,1c0,.553.447,1,1,1h8c.553,0,1-.447,1-1s-.447-1-1-1h-8c-.553,0-1,.447-1,1Zm7,5c.553,0,1-.447,1-1s-.447-1-1-1h-6c-.553,0-1,.447-1,1s.447,1,1,1h6Zm4,6.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5,1.57,3.5,3.5,3.5,3.5-1.57,3.5-3.5Z"/></svg>',
        key: 'license_module'
      }, {
        route: '/documentation',
        title: 'Documentation',
        icon: '<svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-document"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <title>1083</title> <defs> </defs> <g stroke="none" stroke-width="1" fill-rule="evenodd"> <g transform="translate(2.000000, 0.000000)"> <path d="M0,0 L0,16 L13,16 L13,4.02441406 L7,4 L7,0.062 L0,0 Z M11,13 L2,13 L2,12 L11,12 L11,13 L11,13 Z M11,11 L2,11 L2,10 L11,10 L11,11 L11,11 Z M11,7 L11,8 L2,8 L2,7 L11,7 L11,7 Z" class="si-glyph-fill"> </path> <path d="M8,0 L8,2.844 L12.752,2.844 L8,0 Z" class="si-glyph-fill"> </path> </g> </g> </g></svg>',
        key: 'documentation'
      }, {
        route: '/support',
        title: 'Support',
        icon: '<svg viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Page-1" stroke="none" stroke-width="1"  fill-rule="evenodd"><g id="support" transform="translate(42.666667, 42.666667)"><path d="M379.734355,174.506667 C373.121022,106.666667 333.014355,-2.13162821e-14 209.067688,-2.13162821e-14 C85.1210217,-2.13162821e-14 45.014355,106.666667 38.4010217,174.506667 C15.2012632,183.311569 -0.101643453,205.585799 0.000508304259,230.4 L0.000508304259,260.266667 C0.000508304259,293.256475 26.7445463,320 59.734355,320 C92.7241638,320 119.467688,293.256475 119.467688,260.266667 L119.467688,230.4 C119.360431,206.121456 104.619564,184.304973 82.134355,175.146667 C86.4010217,135.893333 107.307688,42.6666667 209.067688,42.6666667 C310.827688,42.6666667 331.521022,135.893333 335.787688,175.146667 C313.347976,184.324806 298.68156,206.155851 298.667688,230.4 L298.667688,260.266667 C298.760356,283.199651 311.928618,304.070103 332.587688,314.026667 C323.627688,330.88 300.801022,353.706667 244.694355,360.533333 C233.478863,343.50282 211.780225,336.789048 192.906491,344.509658 C174.032757,352.230268 163.260418,372.226826 167.196286,392.235189 C171.132153,412.243552 188.675885,426.666667 209.067688,426.666667 C225.181549,426.577424 239.870491,417.417465 247.041022,402.986667 C338.561022,392.533333 367.787688,345.386667 376.961022,317.653333 C401.778455,309.61433 418.468885,286.351502 418.134355,260.266667 L418.134355,230.4 C418.23702,205.585799 402.934114,183.311569 379.734355,174.506667 Z M76.8010217,260.266667 C76.8010217,269.692326 69.1600148,277.333333 59.734355,277.333333 C50.3086953,277.333333 42.6676884,269.692326 42.6676884,260.266667 L42.6676884,230.4 C42.6676884,224.302667 45.9205765,218.668499 51.2010216,215.619833 C56.4814667,212.571166 62.9872434,212.571166 68.2676885,215.619833 C73.5481336,218.668499 76.8010217,224.302667 76.8010217,230.4 L76.8010217,260.266667 Z M341.334355,230.4 C341.334355,220.97434 348.975362,213.333333 358.401022,213.333333 C367.826681,213.333333 375.467688,220.97434 375.467688,230.4 L375.467688,260.266667 C375.467688,269.692326 367.826681,277.333333 358.401022,277.333333 C348.975362,277.333333 341.334355,269.692326 341.334355,260.266667 L341.334355,230.4 Z"></path></g></g></svg>',
        key: 'support'
      }];
    },
    setMenus: function setMenus() {
      // Get all menu items with filters applied
      this.allMenuItems = this.applyFilters('pingly_top_menus', this.defaultRoutes());
    },
    handleSelect: function handleSelect(key) {
      this.active = key;
      localStorage.setItem('pingly_active_menu', this.active);
    }
  },
  mounted: function mounted() {
    this.setMenus();
    // Set active menu based on current route
    this.active = this.$route.path;
  },
  watch: {
    // Keep active state in sync with route changes
    '$route.path': function $routePath(newPath) {
      this.active = newPath;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/LicenseManagement.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/LicenseManagement.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'license-management',
  components: {},
  data: function data() {
    var _window$PinglyProduct;
    return {
      fetching: false,
      verifying: false,
      licenseData: {},
      licenseKey: '',
      showNewLicenseInput: false,
      errorMessage: '',
      hasPro: !!((_window$PinglyProduct = window.PinglyProductEnquiryAdminVars) !== null && _window$PinglyProduct !== void 0 && _window$PinglyProduct.has_pro)
    };
  },
  methods: {
    getLicense: function getLicense() {
      var _this = this;
      this.errorMessage = '';
      this.fetching = true;
      this.$post({
        action: "pingly_admin_license_ajax",
        route: "get_license_status",
        nonce: window.PinglyProductEnquiryAdminVars.nonce
        // verify: true
      }).then(function (response) {
        // console.log(response);
        _this.licenseData = response.data.license_data;
      }).fail(function (error) {
        console.log(error);
        _this.$handleError(error);
      }).always(function () {
        _this.fetching = false;
      });
    },
    verifyLicense: function verifyLicense() {
      var _this2 = this;
      if (!this.licenseKey) {
        this.$handleError('Please provide a license key');
        this.errorMessage = 'Please provide a license key';
        return;
      }
      this.verifying = true;
      this.errorMessage = '';
      this.$post({
        action: "pingly_admin_license_ajax",
        route: "save_license",
        nonce: window.PinglyProductEnquiryAdminVars.nonce,
        license_key: this.licenseKey
      }).then(function (response) {
        _this2.getLicense();
        if (response.success === false) {
          _this2.errorMessage = response.data.message;
          _this2.$handleError(response.data.message);
          return;
        }
        _this2.$handleSuccess(response.data.message);
        // setTimeout(() => {
        //     window.location.reload();
        // }, 3000);
      }).fail(function (errorResponse) {
        var errorMessage = '';
        if (typeof errorResponse === 'string') {
          errorMessage = errorResponse;
        } else if (errorResponse && errorResponse.message) {
          errorMessage = errorResponse.message;
        } else {
          errorMessage = 'Something is wrong!';
        }
        if (!errorMessage) {
          errorMessage = 'Something is wrong!';
        }
        _this2.errorMessage = errorMessage;
        _this2.$handleError(errorResponse);
      }).always(function () {
        _this2.verifying = false;
      });
    },
    deactivateLicense: function deactivateLicense() {
      var _this3 = this;
      this.verifying = true;
      this.$del({
        action: "pingly_admin_license_ajax",
        route: "deactivated_license",
        nonce: window.PinglyProductEnquiryAdminVars.nonce
      }).then(function (response) {
        _this3.licenseData = response.data.license_data;
        _this3.$handleSuccess(response.data.message);
        // setTimeout(() => {
        //     window.location.reload();
        // }, 3000);
      }).fail(function (error) {
        console.log(error);
        _this3.$handleError(error);
      }).always(function () {
        _this3.verifying = false;
        _this3.fetching = false;
      });
    }
  },
  mounted: function mounted() {
    this.getLicense();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue */ "./resources/admin/Modules/PinglyProductEnquiry/Settings.vue");
/* harmony import */ var _Styles_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Styles.vue */ "./resources/admin/Modules/PinglyProductEnquiry/Styles.vue");
/* harmony import */ var _PinglyProductEnquiryData_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PinglyProductEnquiryData.vue */ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'pingly-product-enquiry',
  components: {
    Settings: _Settings_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Styles: _Styles_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    PinglyProductEnquiryData: _PinglyProductEnquiryData_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      activeTab: localStorage.getItem('pingly-active-tab') || 'settings',
      configs: {},
      fetching: false,
      activeModule: 'no',
      saving: false,
      resetting: false,
      showDisableDialog: false,
      pendingDisableKey: null
    };
  },
  computed: {
    currentTab: function currentTab() {
      if (!this.activeTab) return '';
      return this.activeTab.charAt(0).toUpperCase() + this.activeTab.slice(1);
    }
  },
  methods: {
    resetAlertMessage: function resetAlertMessage() {
      var _this = this;
      this.$confirm('Are you sure you want to reset all ' + this.activeTab + '? This will set the default values.', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        _this.resetSettings();
      })["catch"](function () {
        _this.$message({
          type: 'info',
          offset: 50,
          message: 'Delete canceled'
        });
      });
    },
    handleClick: function handleClick(tab, event) {
      this.getSettings();
      localStorage.setItem('pingly-active-tab', this.activeTab);
    },
    //Handle updates from child components
    updateHandler: function updateHandler(field, value) {
      this.configs[field] = value;
    },
    activeChangeHandler: function activeChangeHandler(type, status) {
      // If user is trying to disable the module, show confirmation dialog
      if (status === 'no') {
        this.showDisableDialog = true;
        this.pendingDisableKey = type;
        // Revert the switch back to enabled state temporarily
        this.activeModule = 'yes';
      } else {
        // If enabling, proceed directly
        this.enableActiveModule(type, status);
      }
    },
    // Handle dialog confirmation
    confirmDisable: function confirmDisable() {
      this.showDisableDialog = false;
      this.enableActiveModule(this.pendingDisableKey, 'no');
      this.pendingDisableKey = null;
    },
    // Handle dialog cancellation
    cancelDisable: function cancelDisable() {
      this.showDisableDialog = false;
      this.activeModule = 'yes'; // Keep it enabled
      this.pendingDisableKey = null;
    },
    getSettings: function getSettings() {
      var _this2 = this;
      this.fetching = true;
      this.$post({
        action: "pingly_admin_ajax",
        route: "get_settings",
        type: 'pingly_settings',
        tab: this.activeTab,
        nonce: window.PinglyProductEnquiryAdminVars.nonce
      }).then(function (response) {
        if (!_this2.configs) {
          _this2.configs = {};
        }
        // store only the current tab's data
        if (response.data.configs) {
          _this2.configs = response.data.configs;
        }
      }).fail(function (error) {
        _this2.$handleError(error);
      }).always(function () {
        setTimeout(function () {
          _this2.fetching = false;
        }, 500);
      });
    },
    saveSettings: function saveSettings() {
      var _this3 = this;
      this.saving = true;
      if (!this.emailValidation()) return;
      if (!this.smsValidation()) return;
      if (!this.whatsappNumberValidation()) return;
      this.$post({
        action: "pingly_admin_ajax",
        route: "save_settings",
        type: 'pingly_settings',
        tab: this.activeTab,
        tab_configs: this.configs,
        nonce: window.PinglyProductEnquiryAdminVars.nonce
      }).then(function (response) {
        setTimeout(function () {
          _this3.getSettings();
          _this3.$handleSuccess(response.data.message);
        }, 500);
      }).fail(function (error) {
        _this3.$handleError(error.message);
      }).always(function () {
        setTimeout(function () {
          _this3.saving = false;
        }, 500);
      });
    },
    resetSettings: function resetSettings() {
      var _this4 = this;
      this.resetting = true;
      this.$post({
        action: "pingly_admin_ajax",
        route: "reset_settings",
        type: 'pingly_settings',
        tab: this.activeTab,
        nonce: window.PinglyProductEnquiryAdminVars.nonce
      }).then(function (response) {
        setTimeout(function () {
          _this4.getSettings();
          _this4.$handleSuccess(response.data.message);
        }, 500);
      }).fail(function (error) {
        _this4.$handleError(error.message);
      }).always(function () {
        setTimeout(function () {
          _this4.resetting = false;
        }, 500);
      });
    },
    enableActiveModule: function enableActiveModule(type, status) {
      var _this5 = this;
      this.saving = true;
      this.$post({
        action: "pingly_admin_ajax",
        route: "enable_active_module",
        type: type,
        status: status,
        nonce: window.PinglyProductEnquiryAdminVars.nonce
      }).then(function (response) {
        _this5.getEnableModule();
      }).fail(function (error) {
        _this5.$handleError(error);
        // Revert the local state if the server request failed
        _this5.activeModule = status === 'yes' ? 'no' : 'yes';
      }).always(function () {
        _this5.saving = false;
      });
    },
    getEnableModule: function getEnableModule() {
      var _this6 = this;
      this.fetching = true;
      this.$post({
        action: "pingly_admin_ajax",
        route: "get_active_module",
        type: 'pingly_module',
        nonce: window.PinglyProductEnquiryAdminVars.nonce
      }).then(function (response) {
        _this6.activeModule = response.data.active_module;
      }).fail(function (error) {
        _this6.$handleError(error);
      }).always(function () {
        setTimeout(function () {
          _this6.fetching = false;
        }, 500);
      });
    },
    emailValidation: function emailValidation() {
      if (this.configs.email_enable === 'yes' && !this.configs.admin_email) {
        this.$handleError('Admin Email field is required');
        this.saving = false;
        return false;
      }
      return true;
    },
    whatsappNumberValidation: function whatsappNumberValidation() {
      if (this.configs.whatsapp_tab_enable === 'yes') {
        var numbers = this.configs.whatsapp_numbers || [];
        var first = numbers[0];
        // First entry is mandatory
        if (!first || !first.receiver_name || !first.receiver_number) {
          this.$handleError('WhatsApp Name and Number are required');
          this.saving = false;
          return false;
        }
        // Remove empty second+ entries
        this.configs.whatsapp_numbers = numbers.filter(function (item, index) {
          if (!item.receiver_name || !item.receiver_number) {
            return index === 0;
          }
          return true;
        });
      }
      return true;
    },
    smsValidation: function smsValidation() {
      if (this.configs.sms_tab_enable === 'yes') {
        var numbers = this.configs.sms_numbers || [];
        var first = numbers[0];
        // First entry is mandatory
        if (!first || !first.receiver_name || !first.receiver_number) {
          this.$handleError('SMS Name and Number are required');
          this.saving = false;
          return false;
        }
        // Remove empty second+ entries
        this.configs.sms_numbers = numbers.filter(function (item, index) {
          if (!item.receiver_name || !item.receiver_number) {
            return index === 0;
          }
          return true;
        });
      }
      return true;
    }
  },
  mounted: function mounted() {
    this.getSettings();
    this.getEnableModule();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableSelectionHandler_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_TableSelectionHandler.vue */ "./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue");
// import { Loading } from 'element-ui';

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'pingly-product-enquiry-data',
  props: ['settings', 'fetching'],
  components: {
    TableSelections: _TableSelectionHandler_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      //fetching: false,
      loading: false,
      search: "",
      paginate: {
        total: 0,
        current_page: +(localStorage.getItem('PinglyProductEnquiryDetailsCurrentPage') || 1),
        last_page: 1,
        per_page: +(localStorage.getItem('PinglyProductEnquiryPerPage') || 10)
      },
      tableData: [],
      multipleSelection: [],
      showDisableDialog: false,
      detail: {
        name: ''
      },
      adminUrl: window.PinglyProductEnquiryAdminVars.admin_url
    };
  },
  methods: {
    hasProduct: function hasProduct(row) {
      if (!row || !row.settings) return false;
      try {
        var obj = JSON.parse(row.settings);
        return !!obj.title && !!obj.product_url;
      } catch (e) {
        return false;
      }
    },
    getProductHtml: function getProductHtml(row) {
      if (!row || !row.settings) return '';
      try {
        var obj = JSON.parse(row.settings);
        return "\n            <a href=\"".concat(obj.product_url, "\"\n              target=\"_blank\"\n              class=\"pingly-product-title\">\n              ").concat(this.textTrim(obj.title), "\n            </a>");
      } catch (e) {
        return '';
      }
    },
    textTrim: function textTrim(val) {
      if (!val) return '';
      var words = val.split(' ');
      return words.slice(0, 10).join(' ') + (words.length > 10 ? '...' : '');
    },
    handleSizeChange: function handleSizeChange(val) {
      localStorage.setItem('PinglyProductEnquiryPerPage', val);
      this.paginate.per_page = val;
      this.getPinglyProductEnquiry();
    },
    handleCurrentChange: function handleCurrentChange(val) {
      localStorage.setItem('PinglyProductEnquiryDetailsCurrentPage', val);
      this.paginate.current_page = val;
      this.getPinglyProductEnquiry();
    },
    confirmView: function confirmView(id) {
      var _this = this;
      this.showDisableDialog = true;
      this.loading = true;
      this.$post({
        action: "pingly_admin_ajax",
        route: "get_pingly_detail_view",
        detail_id: id,
        nonce: window.PinglyProductEnquiryAdminVars.nonce
      }).then(function (response) {
        _this.detail = response.data.detail;
      }).fail(function (error) {
        _this.$handleError(error);
      }).always(function () {
        setTimeout(function () {
          _this.loading = false;
        }, 500);
      });
    },
    cancelDisable: function cancelDisable() {
      this.showDisableDialog = false;
    },
    confirmDisable: function confirmDisable() {
      this.showDisableDialog = false;
    },
    handleSelectionChange: function handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    searchHandler: function searchHandler(val) {
      this.search = val;
      this.getPinglyProductEnquiry();
    },
    getPinglyProductEnquiry: function getPinglyProductEnquiry() {
      var _this2 = this;
      this.loading = true;
      this.$post({
        action: "pingly_admin_ajax",
        route: "get_pingly_details",
        search: this.search,
        current_page: this.paginate.current_page,
        per_page: this.paginate.per_page,
        nonce: window.PinglyProductEnquiryAdminVars.nonce
      }).then(function (response) {
        _this2.tableData = response.data.data.details;
        // console.log(this.tableData);
        _this2.paginate.total = response.data.data.total;
        _this2.paginate.current_page = response.data.data.current_page;
        _this2.paginate.last_page = response.data.data.last_page;
      }).fail(function (error) {
        _this2.$handleError(error);
      }).always(function () {
        setTimeout(function () {
          _this2.loading = false;
        }, 500);
      });
    },
    handleDeleteModal: function handleDeleteModal(id) {
      var _this3 = this;
      this.$confirm("Do you want delete this enquire us permanently", "Warning", {
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        type: "warning"
      }).then(function () {
        _this3.performAction("delete", id);
      })["catch"](function () {
        _this3.$message({
          type: "info",
          offset: 90,
          showClose: true,
          message: "Delete canceled"
        });
      });
    },
    performAction: function performAction(type, id) {
      var _this4 = this;
      this.$post({
        action: "pingly_admin_ajax",
        route: "maybe_delete_details",
        details_ids: [id],
        action_type: type,
        nonce: window.PinglyProductEnquiryAdminVars.nonce
      }).then(function (response) {
        _this4.$handleSuccess(response.data.message);
        _this4.getPinglyProductEnquiry();
      }).fail(function (error) {
        _this4.$handleError(error);
      }).always(function () {});
    }
  },
  mounted: function mounted() {
    this.getPinglyProductEnquiry();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'settings',
  props: {
    settings: {
      type: Object,
      required: true
    },
    fetching: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      whatsappNumbers: [{
        receiver_name: '',
        receiver_number: ''
      }],
      smsNumbers: [{
        receiver_name: '',
        receiver_number: ''
      }],
      shortcodeGeneralForm: '[pingly_button]',
      shortcodeProductId: '[pingly_button product_id="23"]',
      shortcodeProductSlug: '[pingly_button product_slug="beanie-with-logo"]'
    };
  },
  watch: {
    // Handle async-loaded settings (WordPress / API)
    'settings.whatsapp_numbers': {
      immediate: true,
      deep: true,
      handler: function handler(newVal) {
        if (Array.isArray(newVal) && newVal.length) {
          this.whatsappNumbers = JSON.parse(JSON.stringify(newVal));
        } else {
          this.whatsappNumbers = [{
            receiver_name: '',
            receiver_number: ''
          }];
        }
      }
    },
    // Handle async-loaded settings (WordPress / API)
    'settings.sms_numbers': {
      immediate: true,
      deep: true,
      handler: function handler(newVal) {
        if (Array.isArray(newVal) && newVal.length) {
          this.smsNumbers = JSON.parse(JSON.stringify(newVal));
        } else {
          this.smsNumbers = [{
            receiver_name: '',
            receiver_number: ''
          }];
        }
      }
    }
  },
  methods: {
    changeHandler: function changeHandler(field, value) {
      this.$emit('update', field, value);
    },
    emitWhatsappNumbers: function emitWhatsappNumbers() {
      this.$emit('update', 'whatsapp_numbers', this.whatsappNumbers);
    },
    emitSmsNumbers: function emitSmsNumbers() {
      this.$emit('update', 'sms_numbers', this.smsNumbers);
    },
    addNew: function addNew(type) {
      if (type === 'WhatsApp' && this.whatsappNumbers.length >= 5) {
        return; // stop adding more than 5
      }
      if (type === 'SMS' && this.smsNumbers.length >= 5) {
        return; // stop adding more than 5
      }
      if (type === 'WhatsApp') {
        this.whatsappNumbers.push({
          receiver_name: '',
          receiver_number: ''
        });
        this.emitWhatsappNumbers();
      }
      if (type === 'SMS') {
        this.smsNumbers.push({
          receiver_name: '',
          receiver_number: ''
        });
        this.emitSmsNumbers();
      }
    },
    removeLink: function removeLink(index, type) {
      if (type === 'WhatsApp') {
        this.whatsappNumbers.splice(index, 1);
        this.emitWhatsappNumbers();
      }
      if (type === 'SMS') {
        this.smsNumbers.splice(index, 1);
        this.emitSmsNumbers();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _InputComponent_colorSelect_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../InputComponent/colorSelect.vue */ "./resources/admin/InputComponent/colorSelect.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'styles',
  props: ['styles', 'fetching'],
  components: {
    ColorSelect: _InputComponent_colorSelect_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    changeHandler: function changeHandler(field, value) {
      this.$emit('update', field, value);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'infos_selection_handler',
  props: ['selections'],
  data: function data() {
    return {};
  },
  methods: {
    handleDeleteModal: function handleDeleteModal() {
      var _this = this;
      this.$confirm('Do you want delete this link permanently', 'Warning', {
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(function () {
        _this.performAction('delete');
      })["catch"](function () {
        _this.$message({
          type: 'info',
          offset: 50,
          showClose: true,
          message: 'Delete canceled'
        });
      });
    },
    performAction: function performAction(type) {
      var _this2 = this;
      var selectedIds = [];
      lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(this.selections, function (selection) {
        selectedIds.push(selection.id);
      });
      this.$post({
        action: 'pingly_admin_ajax',
        route: 'maybe_delete_details',
        details_ids: selectedIds,
        action_type: type,
        nonce: window.PinglyProductEnquiryAdminVars.nonce
      }).then(function (response) {
        _this2.$notify({
          title: 'Sucess',
          message: response.data.message,
          type: 'success'
        });
        _this2.$emit('reloadData');
      }).fail(function (error) {
        _this2.$handleError(error);
      }).always(function () {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/Support.vue?vue&type=script&lang=js":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/Support.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'support',
  components: {},
  data: function data() {
    return {
      imagesUrl: window.PinglyProductEnquiryAdminVars.images_url
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Application.vue?vue&type=template&id=f734b430":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Application.vue?vue&type=template&id=f734b430 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pingly-app-wrapper"
  }, [_c("el-row", [_c("el-col", {
    attrs: {
      span: 4
    }
  }, [_c("Navigation")], 1), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 20
    }
  }, [_c("div", {
    staticClass: "pingly-header"
  }), _vm._v(" "), _c("div", {
    staticClass: "pingly-body"
  }, [_c("router-view", {
    key: _vm.$route.fullPath
  })], 1)])], 1)], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/InputComponent/colorSelect.vue?vue&type=template&id=576144ca":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/InputComponent/colorSelect.vue?vue&type=template&id=576144ca ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "atcpu-color-select"
  }, [_c("p", {
    staticClass: "label"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c("el-color-picker", {
    attrs: {
      predefine: _vm.predefineColors
    },
    on: {
      "active-change": _vm.activeChangedEvent
    },
    model: {
      value: _vm.model,
      callback: function callback($$v) {
        _vm.model = $$v;
      },
      expression: "model"
    }
  })], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Layouts/Navigation.vue?vue&type=template&id=1be81d12":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Layouts/Navigation.vue?vue&type=template&id=1be81d12 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pingly-main-navigation"
  }, [_vm._m(0), _vm._v(" "), _c("el-menu", {
    staticClass: "pingly-navbar",
    attrs: {
      router: true,
      mode: "horizontal",
      "default-active": _vm.active
    },
    on: {
      select: _vm.handleSelect
    }
  }, _vm._l(_vm.visibleItems, function (item) {
    return _c("el-menu-item", {
      key: item.route,
      attrs: {
        index: item.route
      }
    }, [_c("i", {
      staticClass: "icon",
      domProps: {
        innerHTML: _vm._s(item.icon)
      }
    }), _vm._v("\n      " + _vm._s(item.title) + "\n    ")]);
  }), 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "logo"
  }, [_c("h1", [_vm._v("Pingly Product Enquiry")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/Documentation.vue?vue&type=template&id=2c0ef5aa":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/Documentation.vue?vue&type=template&id=2c0ef5aa ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pingly-documentation-wrapper pingly-card"
  }, [_vm._m(0), _vm._v(" "), _c("el-row", {
    attrs: {
      gutter: 20
    }
  }, [_c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("div", {
    staticClass: "dashboard-document-youtube"
  }, [_c("iframe", {
    attrs: {
      width: "100%",
      height: "550",
      src: "https://www.youtube.com/embed/jhPquLtObTc?si=VH3SLsDmzl_hS4gB",
      title: "YouTube video player",
      frameborder: "0",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerpolicy: "strict-origin-when-cross-origin",
      allowfullscreen: ""
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "pingly-subtitle"
  }, [_vm._v("\n        Learn how to set up and use this plugin step by step.\n      ")])]), _vm._v(" "), _c("el-col", {
    attrs: {
      span: 24
    }
  }, [_c("div", {
    staticClass: "pingly-doc-content"
  }, [_c("h4", [_vm._v("🚀 Getting Started")]), _vm._v(" "), _c("ul", {
    staticClass: "pingly-doc-list"
  }, [_c("li", [_vm._v("Install and activate the plugin")]), _vm._v(" "), _c("li", [_vm._v("Go to "), _c("strong", [_vm._v("Product Enquiry Tab Settings")])]), _vm._v(" "), _c("li", [_vm._v("Configure required options")]), _vm._v(" "), _c("li", [_vm._v("Save Settings and Save Styles")])]), _vm._v(" "), _c("h4", [_vm._v("🔗 Helpful Links")]), _vm._v(" "), _c("ul", {
    staticClass: "pingly-doc-links"
  }, [_c("li", [_c("a", {
    attrs: {
      href: "https://wpcreativeidea.com/",
      target: "_blank"
    }
  }, [_vm._v("\n              📄 Full Documentation\n            ")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://wpcreativeidea.com/support",
      target: "_blank"
    }
  }, [_vm._v("\n              🛠 Support Center\n            ")])]), _vm._v(" "), _c("li", [_c("a", {
    attrs: {
      href: "https://wpcreativeidea.com/",
      target: "_blank"
    }
  }, [_vm._v("\n              ❓ FAQ\n            ")])])])])])], 1)], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pingly_header"
  }, [_c("div", {
    staticClass: "pingly_title pingly_header_title"
  }, [_c("h3", [_vm._v("Documentation")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/LicenseManagement.vue?vue&type=template&id=11ff7d54":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/LicenseManagement.vue?vue&type=template&id=11ff7d54 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.hasPro ? _c("div", {
    staticClass: "pingly-license-management pingly-card"
  }, [_c("div", {
    staticClass: "pingly_header"
  }, [_c("div", {
    staticClass: "pingly_title pingly_header_title"
  }, [_c("h3", {
    staticStyle: {
      margin: "0"
    }
  }, [_vm._v(" License Management ")]), _vm._v(" "), _c("el-button", {
    attrs: {
      type: "text",
      size: "medium",
      icon: "el-icon-refresh"
    },
    on: {
      click: _vm.getLicense
    }
  })], 1)]), _vm._v(" "), _c("div", {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.verifying,
      expression: "verifying"
    }],
    staticClass: "pingly_pad_around"
  }, [_vm.fetching ? _c("div", {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.fetching,
      expression: "fetching"
    }],
    staticClass: "pingly_narrow_box text-align-center fetching-text"
  }, [_c("h3", [_vm._v("Fetching License Information Please wait")])]) : _c("div", {
    staticClass: "pingly_narrow_box",
    "class": "pingly_license_" + _vm.licenseData.status
  }, [_vm.licenseData.status == "expired" ? _c("div", {
    staticClass: "pingly-expired"
  }, [_c("h3", [_vm._v("Looks like your license has been expired ")]), _vm._v(" "), _c("div", {
    staticClass: "license-status-container"
  }, [_c("div", {
    staticClass: "license-info-card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "info-item"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v(" License Status: ")]), _vm._v(" "), _c("div", {
    staticClass: "value expired"
  }, [_vm._v("\n                                 " + _vm._s(_vm.licenseData.status.charAt(0).toUpperCase() + _vm.licenseData.status.slice(1)) + "\n                             ")])]), _vm._v(" "), _c("div", {
    staticClass: "info-item"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v(" Expiry On: ")]), _vm._v(" "), _c("div", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.licenseData.expires_formatted))])]), _vm._v(" "), _vm.licenseData.expires !== "Lifetime" ? _c("div", {
    staticClass: "info-item"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v(" " + _vm._s(_vm.licenseData.time_label) + " ")]), _vm._v(" "), _c("div", {
    staticClass: "value remaining"
  }, [_c("el-tag", {
    attrs: {
      size: "small",
      type: "danger"
    }
  }, [_vm._v(" " + _vm._s(_vm.licenseData.human_date))])], 1)]) : _vm._e()])]), _vm._v(" "), _c("a", {
    staticClass: "el-button el-button--danger el-button--small",
    attrs: {
      href: _vm.licenseData.renew_url,
      target: "_blank"
    }
  }, [_vm._v("Click Here to Renew your License")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("hr", {
    staticStyle: {
      margin: "20px 0px"
    }
  }), _vm._v(" "), !_vm.showNewLicenseInput ? _c("p", [_vm._v("Have a new license Key? "), _c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        _vm.showNewLicenseInput = !_vm.showNewLicenseInput;
      }
    }
  }, [_vm._v("Click here")])]) : _c("div", [_c("h3", {
    staticStyle: {
      "margin-bottom": "15px"
    }
  }, [_vm._v("Your License Key")]), _vm._v(" "), _c("el-input", {
    attrs: {
      placeholder: "License Key"
    },
    model: {
      value: _vm.licenseKey,
      callback: function callback($$v) {
        _vm.licenseKey = $$v;
      },
      expression: "licenseKey"
    }
  }, [_c("el-button", {
    attrs: {
      slot: "append",
      icon: "el-icon-lock"
    },
    on: {
      click: function click($event) {
        return _vm.verifyLicense();
      }
    },
    slot: "append"
  }, [_vm._v("Verify License")])], 1)], 1)]) : _vm.licenseData.status == "valid" ? _c("div", {
    staticClass: "pingly-valid"
  }, [_vm._m(2), _vm._v(" "), _c("h2", {
    staticClass: "title"
  }, [_vm._v("You license key is valid and activated")]), _vm._v(" "), _c("div", {
    staticClass: "license-status-container"
  }, [_c("div", {
    staticClass: "license-info-card"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "info-item"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v(" License Key: ")]), _vm._v(" "), _c("div", {
    staticClass: "value license-key"
  }, [_vm._v(" " + _vm._s(_vm.licenseData.license_key))])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "info-item"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v(" Expiry Date: ")]), _vm._v(" "), _c("div", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.licenseData.expires_formatted))])]), _vm._v(" "), _vm.licenseData.expires !== "Lifetime" ? _c("div", {
    staticClass: "info-item"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v(" " + _vm._s(_vm.licenseData.time_label) + " ")]), _vm._v(" "), _c("div", {
    staticClass: "value remaining"
  }, [_c("el-tag", {
    attrs: {
      size: "small",
      type: "success"
    }
  }, [_vm._v(" " + _vm._s(_vm.licenseData.human_date))])], 1)]) : _vm._e()])]), _vm._v(" "), _c("hr", {
    staticStyle: {
      margin: "20px 0px"
    }
  }), _vm._v(" "), _c("p", [_vm._v("Want to deactivate this license? "), _c("a", {
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.deactivateLicense();
      }
    }
  }, [_vm._v("Click here")])])]) : _c("div", {
    staticClass: "pingly-provide-license-key"
  }, [_c("h3", [_vm._v("Please Provide a license key of Pingly Product Enquiry Addons")]), _vm._v(" "), _c("el-input", {
    attrs: {
      placeholder: "License Key"
    },
    model: {
      value: _vm.licenseKey,
      callback: function callback($$v) {
        _vm.licenseKey = $$v;
      },
      expression: "licenseKey"
    }
  }, [_c("el-button", {
    attrs: {
      slot: "append",
      type: "success",
      icon: "el-icon-lock"
    },
    on: {
      click: function click($event) {
        return _vm.verifyLicense();
      }
    },
    slot: "append"
  }, [_vm._v("Verify License")])], 1), _vm._v(" "), _c("p", {
    staticClass: "text-align-center",
    staticStyle: {
      color: "red",
      margin: "50px 0 0px 0px"
    },
    domProps: {
      innerHTML: _vm._s(_vm.errorMessage)
    }
  }), _vm._v(" "), _c("hr", {
    staticStyle: {
      margin: "10px 0px 10px 0px"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "text-align-center alert-text"
  }, [_vm._v(" Don't have a license key? "), _c("a", {
    attrs: {
      target: "_blank",
      href: _vm.licenseData.purchase_url
    }
  }, [_vm._v("Purchase one here")])]), _vm._v(" "), _vm._m(5)], 1)])])]) : _vm._e();
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "info-item"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v(" Plugin:  ")]), _vm._v(" "), _c("div", {
    staticClass: "value"
  }, [_vm._v(" Pingly Product Enquiry ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "license-expired-notice"
  }, [_vm._v("Note: "), _c("em", [_vm._v('Your License has expired, so "Pingly Product Enquiry" Addons is currently inactive. Please click the button to renew your license and continue using the plugin.')])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "circle-check-icon"
  }, [_c("span", {
    staticClass: "el-icon el-icon-circle-check"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "info-item"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v(" Plugin:  ")]), _vm._v(" "), _c("div", {
    staticClass: "value"
  }, [_vm._v(" Pingly Product Enquiry ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "info-item"
  }, [_c("div", {
    staticClass: "label"
  }, [_vm._v(" License Status: ")]), _vm._v(" "), _c("div", {
    staticClass: "value license-valid"
  }, [_vm._v("\n                                 Active\n                             ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "license-empty-notice"
  }, [_vm._v("Note: "), _c("em", [_vm._v("Please activate your license key, Pingly Product Enquiry Addons will not work without license activation.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=template&id=bdb79dc2":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=template&id=bdb79dc2 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pingly-card"
  }, [_c("div", {
    staticClass: "pingly-settings-header"
  }, [_c("h2", [_vm._v("Enquiry")]), _vm._v(" "), _c("el-switch", {
    attrs: {
      "active-text": "Disable",
      "active-value": "yes",
      "inactive-value": "no"
    },
    on: {
      change: function change(value) {
        return _vm.activeChangeHandler("pingly_module", value);
      }
    },
    model: {
      value: _vm.activeModule,
      callback: function callback($$v) {
        _vm.activeModule = $$v;
      },
      expression: "activeModule"
    }
  })], 1), _vm._v(" "), _c("el-dialog", {
    attrs: {
      visible: _vm.showDisableDialog,
      width: "480px",
      "close-on-click-modal": true,
      "close-on-press-escape": true,
      "show-close": true,
      "custom-class": "pingly-module-disable-dialog",
      center: ""
    },
    on: {
      "update:visible": function updateVisible($event) {
        _vm.showDisableDialog = $event;
      }
    }
  }, [_c("div", {
    staticClass: "pingly-module-dialog-content text-align-center"
  }, [_c("div", {
    staticClass: "icon-container"
  }, [_c("div", {
    staticClass: "warning-circle"
  }, [_c("i", {
    staticClass: "el-icon-warning-outline"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "dialog-text"
  }, [_c("h3", [_vm._v("Disable Product Enquiry?")]), _vm._v(" "), _c("p", [_vm._v("This action will disable the module completely."), _c("br"), _vm._v("Users won't see the enquiry functionality on your frontend.")])]), _vm._v(" "), _c("div", {
    staticClass: "dialog-actions"
  }, [_c("el-button", {
    staticClass: "cancel-btn",
    on: {
      click: _vm.cancelDisable
    }
  }, [_vm._v("\n          Keep Enabled\n        ")]), _vm._v(" "), _c("el-button", {
    attrs: {
      type: "danger",
      loading: _vm.saving
    },
    on: {
      click: _vm.confirmDisable
    }
  }, [!_vm.saving ? _c("i", {
    staticClass: "el-icon-close"
  }) : _vm._e(), _vm._v("\n          Yes, Disable\n        ")])], 1)])]), _vm._v(" "), _c("el-tabs", {
    on: {
      "tab-click": _vm.handleClick
    },
    model: {
      value: _vm.activeTab,
      callback: function callback($$v) {
        _vm.activeTab = $$v;
      },
      expression: "activeTab"
    }
  }, [_c("el-tab-pane", {
    attrs: {
      label: "Settings",
      name: "settings"
    }
  }, [_c("Settings", {
    attrs: {
      settings: _vm.configs,
      fetching: _vm.fetching
    },
    on: {
      update: _vm.updateHandler
    }
  })], 1), _vm._v(" "), _c("el-tab-pane", {
    attrs: {
      label: "Styles",
      name: "styles"
    }
  }, [_c("Styles", {
    attrs: {
      styles: _vm.configs,
      fetching: _vm.fetching
    },
    on: {
      update: _vm.updateHandler
    }
  })], 1), _vm._v(" "), _c("el-tab-pane", {
    attrs: {
      label: "Product Enquiry",
      name: "pingly-product-enquiry"
    }
  }, [_c("PinglyProductEnquiryData", {
    attrs: {
      enquireDatas: _vm.configs,
      fetching: _vm.fetching
    },
    on: {
      update: _vm.updateHandler
    }
  })], 1)], 1), _vm._v(" "), _vm.activeTab != "pingly-product-enquiry" ? _c("div", {
    staticClass: "pingly-button-group"
  }, [_c("el-button", {
    attrs: {
      type: "primary"
    },
    on: {
      click: _vm.saveSettings
    }
  }, [_c("i", {
    "class": !_vm.saving ? "el-icon-circle-check" : "el-icon-loading"
  }), _vm._v("\n      Save " + _vm._s(_vm.currentTab) + "\n    ")]), _vm._v(" "), _c("el-button", {
    attrs: {
      type: "danger",
      resetting: ""
    },
    on: {
      click: function click($event) {
        return _vm.resetAlertMessage();
      }
    }
  }, [_c("i", {
    "class": !_vm.resetting ? "el-icon-refresh" : "el-icon-loading"
  }), _vm._v("\n      Reset " + _vm._s(_vm.currentTab) + "\n    ")])], 1) : _vm._e()], 1);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=template&id=900df72e":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=template&id=900df72e ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "pingly-settings-wrapper",
    attrs: {
      "element-loading-spinner": "el-icon-loading"
    }
  }, [_c("div", {
    staticClass: "pingly-settings-content"
  }, [[_c("div", {
    staticClass: "pingly-header"
  }, [_c("el-input", {
    attrs: {
      placeholder: "Search",
      clearable: ""
    },
    on: {
      change: _vm.searchHandler
    },
    model: {
      value: _vm.search,
      callback: function callback($$v) {
        _vm.search = $$v;
      },
      expression: "search"
    }
  }, [_c("el-button", {
    attrs: {
      slot: "append",
      icon: "el-icon-search"
    },
    slot: "append"
  })], 1)], 1), _vm._v(" "), _c("table-selections", {
    attrs: {
      selections: _vm.multipleSelection
    },
    on: {
      reloadData: _vm.getPinglyProductEnquiry
    }
  }), _vm._v(" "), _c("el-table", {
    ref: "multipleTable",
    staticStyle: {
      width: "100%"
    },
    attrs: {
      data: _vm.tableData,
      border: ""
    },
    on: {
      "selection-change": _vm.handleSelectionChange
    }
  }, [_c("el-table-column", {
    attrs: {
      type: "selection"
    }
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      label: "Name",
      width: "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_vm._v(_vm._s(scope.row.name))];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      label: "Email",
      width: "180"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_vm._v(_vm._s(scope.row.email))];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      label: "Phone Number",
      width: "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_vm._v(_vm._s(scope.row.phone_number))];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      label: "Enquiry",
      width: "250"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_vm._v(_vm._s(_vm.textTrim(scope.row.enquiry)))];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      label: "Product Title",
      width: "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("span", {
          domProps: {
            innerHTML: _vm._s(_vm.getProductHtml(scope.row))
          }
        })];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      label: "Type",
      width: "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_vm._v(_vm._s(_vm.textTrim(scope.row.type)))];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      label: "Status",
      width: "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_vm._v(_vm._s(_vm.textTrim(scope.row.status)))];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      label: "subscribe",
      width: "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_vm._v(_vm._s(_vm.textTrim(scope.row.subscribe)))];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      label: "Date",
      width: "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_vm._v("\n              " + _vm._s(new Date(scope.row.created_at).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "long",
          year: "numeric"
        })) + "\n            ")];
      }
    }])
  }), _vm._v(" "), _c("el-table-column", {
    attrs: {
      label: "Actions",
      width: "150"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function fn(scope) {
        return [_c("el-button", {
          staticClass: "pingly-btn",
          attrs: {
            type: "primary",
            icon: "el-icon-view",
            circle: ""
          },
          on: {
            click: function click($event) {
              return _vm.confirmView(scope.row.id);
            }
          }
        }), _vm._v(" "), _c("el-button", {
          staticClass: "pingly-btn",
          attrs: {
            type: "danger",
            icon: "el-icon-delete",
            circle: ""
          },
          on: {
            click: function click($event) {
              return _vm.handleDeleteModal(scope.row.id);
            }
          }
        })];
      }
    }])
  })], 1), _vm._v(" "), _c("table-selections", {
    attrs: {
      selections: _vm.multipleSelection
    },
    on: {
      reloadData: _vm.getPinglyProductEnquiry
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "pingly_pagination_wrap"
  }, [_c("el-pagination", {
    attrs: {
      "hide-on-single-page": false,
      "current-page": _vm.paginate.current_page,
      "page-sizes": [5, 10, 20, 50, 100],
      "page-size": _vm.paginate.per_page,
      layout: "total, sizes, prev, pager, next",
      total: _vm.paginate.total
    },
    on: {
      "size-change": _vm.handleSizeChange,
      "current-change": _vm.handleCurrentChange,
      "update:currentPage": function updateCurrentPage($event) {
        return _vm.$set(_vm.paginate, "current_page", $event);
      },
      "update:current-page": function updateCurrentPage($event) {
        return _vm.$set(_vm.paginate, "current_page", $event);
      }
    }
  })], 1), _vm._v(" "), _c("el-dialog", {
    attrs: {
      visible: _vm.showDisableDialog,
      width: "45%",
      "close-on-click-modal": true,
      "close-on-press-escape": true,
      "show-close": true,
      "custom-class": "pingly-module-disable-dialog",
      center: ""
    },
    on: {
      "update:visible": function updateVisible($event) {
        _vm.showDisableDialog = $event;
      }
    }
  }, [_c("div", {
    staticClass: "pingly-module-dialog-content"
  }, [_c("div", {
    staticClass: "dialog-text"
  }, [_c("h3", [_vm._v("Product Enquiry Details")]), _vm._v(" "), _c("table", {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.loading,
      expression: "loading"
    }],
    staticClass: "pingly-table",
    attrs: {
      "element-loading-spinner": "el-icon-loading"
    }
  }, [_c("tbody", [_vm.detail.name ? _c("tr", [_c("td", {
    staticClass: "label"
  }, [_vm._v("Name")]), _vm._v(" "), _c("td", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.detail.name))])]) : _vm._e(), _vm._v(" "), _vm.detail.email ? _c("tr", [_c("td", {
    staticClass: "label"
  }, [_vm._v("Email")]), _vm._v(" "), _c("td", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.detail.email))])]) : _vm._e(), _vm._v(" "), _vm.detail.enquiry ? _c("tr", [_c("td", {
    staticClass: "label"
  }, [_vm._v("Enquiry")]), _vm._v(" "), _c("td", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.detail.enquiry))])]) : _vm._e(), _vm._v(" "), _vm.detail.phone_number ? _c("tr", [_c("td", {
    staticClass: "label"
  }, [_vm._v("Phone Number")]), _vm._v(" "), _c("td", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.detail.phone_number))])]) : _vm._e(), _vm._v(" "), _vm.detail.type ? _c("tr", [_c("td", {
    staticClass: "label"
  }, [_vm._v("Type")]), _vm._v(" "), _c("td", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.detail.type))])]) : _vm._e(), _vm._v(" "), _vm.detail.status ? _c("tr", [_c("td", {
    staticClass: "label"
  }, [_vm._v("Status")]), _vm._v(" "), _c("td", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.detail.status))])]) : _vm._e(), _vm._v(" "), _vm.detail.subscribe ? _c("tr", [_c("td", {
    staticClass: "label"
  }, [_vm._v("Subscribe")]), _vm._v(" "), _c("td", {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.detail.subscribe))])]) : _vm._e(), _vm._v(" "), _vm.hasProduct(_vm.detail) ? _c("tr", [_c("td", {
    staticClass: "label"
  }, [_vm._v("Product Title")]), _vm._v(" "), _c("td", {
    staticClass: "value"
  }, [_c("span", {
    domProps: {
      innerHTML: _vm._s(_vm.getProductHtml(_vm.detail))
    }
  })])]) : _vm._e()])])])])])]], 2)]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=template&id=7a6bca0f":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=template&id=7a6bca0f ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.fetching,
      expression: "fetching"
    }],
    staticClass: "pingly-settings-wrapper",
    attrs: {
      "element-loading-spinner": "el-icon-loading"
    }
  }, [_c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Shop Page")]), _vm._v(" "), _c("el-switch", {
    attrs: {
      "active-text": "Enable Shop Page",
      "active-value": "yes",
      "inactive-value": "no"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("shop_page_enable", value);
      }
    },
    model: {
      value: _vm.settings.shop_page_enable,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "shop_page_enable", $$v);
      },
      expression: "settings.shop_page_enable"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Enable the shop page",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _vm.settings.shop_page_enable === "yes" ? _c("div", [_c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("In-Stock Button Text")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    attrs: {
      placeholder: "Enquiry {title}"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("in_stock_shop_button_text", value);
      }
    },
    model: {
      value: _vm.settings.in_stock_shop_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "in_stock_shop_button_text", $$v);
      },
      expression: "settings.in_stock_shop_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "This text is used for the in-stock button on the shop page. You can use {title} to automatically display the product name.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Out-of-Stock Button Text")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    attrs: {
      placeholder: "Email when stock available {title}"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("out_of_stock_shop_button_text", value);
      }
    },
    model: {
      value: _vm.settings.out_of_stock_shop_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "out_of_stock_shop_button_text", $$v);
      },
      expression: "settings.out_of_stock_shop_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "This text is used for the out-of-stock button on the shop page. You can use {title} to automatically display the product name.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Backorder Button Text")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    attrs: {
      placeholder: "Pre-order Enquiry {title}"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("backorder_shop_button_text", value);
      }
    },
    model: {
      value: _vm.settings.backorder_shop_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "backorder_shop_button_text", $$v);
      },
      expression: "settings.backorder_shop_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "This text is used for the backorder button on the shop page. You can use {title} to automatically display the product name.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Single Page")]), _vm._v(" "), _c("el-switch", {
    attrs: {
      "active-text": "Enable Single Page",
      "active-value": "yes",
      "inactive-value": "no"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("single_page_enable", value);
      }
    },
    model: {
      value: _vm.settings.single_page_enable,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "single_page_enable", $$v);
      },
      expression: "settings.single_page_enable"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Enable the single page",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _vm.settings.single_page_enable === "yes" ? _c("div", [_c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("In-Stock Button Text")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("in_stock_single_button_text", value);
      }
    },
    model: {
      value: _vm.settings.in_stock_single_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "in_stock_single_button_text", $$v);
      },
      expression: "settings.in_stock_single_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "This text is used for the in-stock button on the single page. You can use {title} to automatically display the product name.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Out-of-Stock Button Text")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("out_of_stock_single_button_text", value);
      }
    },
    model: {
      value: _vm.settings.out_of_stock_single_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "out_of_stock_single_button_text", $$v);
      },
      expression: "settings.out_of_stock_single_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "This text is used for the out-of-stock button on the single page. You can use {title} to automatically display the product name.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Backorder Button Text")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("backorder_single_button_text", value);
      }
    },
    model: {
      value: _vm.settings.backorder_single_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "backorder_single_button_text", $$v);
      },
      expression: "settings.backorder_single_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "This text is used for the backorder button on the single page. You can use {title} to automatically display the product name.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("In-Stock Form Heading")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("in_stock_form_heading", value);
      }
    },
    model: {
      value: _vm.settings.in_stock_form_heading,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "in_stock_form_heading", $$v);
      },
      expression: "settings.in_stock_form_heading"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "This text appears as the form heading when the product is in-stock. Use {title} to automatically show the product name.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Out-of-Stock Form Heading")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("out_of_stock_form_heading", value);
      }
    },
    model: {
      value: _vm.settings.out_of_stock_form_heading,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "out_of_stock_form_heading", $$v);
      },
      expression: "settings.out_of_stock_form_heading"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "This text appears as the form heading when the product is out-of-stock. Use {title} to automatically show the product name.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Backorder Form Heading")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("backorder_form_heading", value);
      }
    },
    model: {
      value: _vm.settings.backorder_form_heading,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "backorder_form_heading", $$v);
      },
      expression: "settings.backorder_form_heading"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "This text appears as the form heading when the product is backordered. Use {title} to automatically show the product name.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Enquiry Form Tab")]), _vm._v(" "), _c("el-switch", {
    attrs: {
      "active-text": "Enable Enquiry Form Tab",
      "active-value": "yes",
      "inactive-value": "no"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("enquiry_form_tab_enable", value);
      }
    },
    model: {
      value: _vm.settings.enquiry_form_tab_enable,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "enquiry_form_tab_enable", $$v);
      },
      expression: "settings.enquiry_form_tab_enable"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Enable the enquiry from Tab",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("WhatsApp Tab")]), _vm._v(" "), _c("el-switch", {
    attrs: {
      "active-text": "Enable WhatsApp Tab",
      "active-value": "yes",
      "inactive-value": "no"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("whatsapp_tab_enable", value);
      }
    },
    model: {
      value: _vm.settings.whatsapp_tab_enable,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_tab_enable", $$v);
      },
      expression: "settings.whatsapp_tab_enable"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Enable the WhatsApp Tab",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("SMS Tab")]), _vm._v(" "), _c("el-switch", {
    attrs: {
      "active-text": "Enable SMS Tab",
      "active-value": "yes",
      "inactive-value": "no"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("sms_tab_enable", value);
      }
    },
    model: {
      value: _vm.settings.sms_tab_enable,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_tab_enable", $$v);
      },
      expression: "settings.sms_tab_enable"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Enable the SMS Tab",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1)]), _vm._v(" "), _vm.settings.enquiry_form_tab_enable === "yes" ? _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Email Send")]), _vm._v(" "), _c("el-switch", {
    attrs: {
      "active-text": "Enable Email",
      "active-value": "yes",
      "inactive-value": "no"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("email_enable", value);
      }
    },
    model: {
      value: _vm.settings.email_enable,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "email_enable", $$v);
      },
      expression: "settings.email_enable"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Enable this to send enquiry form submissions to the selected email address.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _vm.settings.email_enable === "yes" ? _c("div", [_c("div", {
    staticClass: "setting-row"
  }, [_vm._m(5), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("admin_email", value);
      }
    },
    model: {
      value: _vm.settings.admin_email,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "admin_email", $$v);
      },
      expression: "settings.admin_email"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Enter the email address where enquiry form submissions will be sent.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Tab Name Change")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("enquiry_tab_text", value);
      }
    },
    model: {
      value: _vm.settings.enquiry_tab_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "enquiry_tab_text", $$v);
      },
      expression: "settings.enquiry_tab_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the text displayed on the enquiry tab.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Submit Button Text")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("enquiry_submit_button_text", value);
      }
    },
    model: {
      value: _vm.settings.enquiry_submit_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "enquiry_submit_button_text", $$v);
      },
      expression: "settings.enquiry_submit_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the text displayed on the enquiry form submit button.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1)]) : _vm._e(), _vm._v(" "), _vm.settings.whatsapp_tab_enable === "yes" ? _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Title Change")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("whatsapp_title_text", value);
      }
    },
    model: {
      value: _vm.settings.whatsapp_title_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_title_text", $$v);
      },
      expression: "settings.whatsapp_title_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the title text displayed in the WhatsApp section",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Tab Name Change")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("whatsapp_tab_text", value);
      }
    },
    model: {
      value: _vm.settings.whatsapp_tab_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_tab_text", $$v);
      },
      expression: "settings.whatsapp_tab_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the text displayed on the WhatsApp tab.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row-repeter-fields"
  }, [_c("el-button", {
    staticClass: "repeter-add-btn",
    attrs: {
      size: "mini",
      type: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.addNew("WhatsApp");
      }
    }
  }, [_vm._v("\n        Add WhatsApp Number "), _c("i", {
    staticClass: "el-icon-circle-plus-outline"
  })]), _vm._v(" "), _vm._l(_vm.whatsappNumbers, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "setting-input-repeter"
    }, [_c("el-input", {
      staticClass: "setting-input",
      attrs: {
        placeholder: "Receiver Name"
      },
      on: {
        input: _vm.emitWhatsappNumbers
      },
      model: {
        value: item.receiver_name,
        callback: function callback($$v) {
          _vm.$set(item, "receiver_name", $$v);
        },
        expression: "item.receiver_name"
      }
    }), _vm._v(" "), _c("el-input", {
      staticClass: "setting-input",
      attrs: {
        type: "number",
        placeholder: "WhatsApp Number"
      },
      on: {
        input: _vm.emitWhatsappNumbers
      },
      model: {
        value: item.receiver_number,
        callback: function callback($$v) {
          _vm.$set(item, "receiver_number", $$v);
        },
        expression: "item.receiver_number"
      }
    }), _vm._v(" "), _c("el-button", {
      staticClass: "delete-btn",
      attrs: {
        type: "danger",
        icon: "el-icon-delete",
        circle: "",
        disabled: _vm.whatsappNumbers.length === 1
      },
      on: {
        click: function click($event) {
          return _vm.removeLink(index, "WhatsApp");
        }
      }
    }), _vm._v(" "), _c("el-tooltip", {
      attrs: {
        content: "Add the receiver name and WhatsApp number",
        placement: "top"
      }
    }, [_c("i", {
      staticClass: "el-icon-question"
    })])], 1);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Button Text Change")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("whatsapp_button_text", value);
      }
    },
    model: {
      value: _vm.settings.whatsapp_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_button_text", $$v);
      },
      expression: "settings.whatsapp_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the button text",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("WhatsApp Message")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    attrs: {
      type: "textarea",
      rows: 3,
      placeholder: "Enter Your WhatsApp Message Here. You can use {receiver_name}, {title}, {url} as a placeholder."
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("whatsapp_message", value);
      }
    },
    model: {
      value: _vm.settings.whatsapp_message,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "whatsapp_message", $$v);
      },
      expression: "settings.whatsapp_message"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "You can use {receiver_name}, {title}, {url} as a placeholder.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1)]) : _vm._e(), _vm._v(" "), _vm.settings.sms_tab_enable === "yes" ? _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(7), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Title Change")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("sms_title_text", value);
      }
    },
    model: {
      value: _vm.settings.sms_title_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_title_text", $$v);
      },
      expression: "settings.sms_title_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the title text displayed in the SMS section",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Tab Name Change")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("sms_tab_text", value);
      }
    },
    model: {
      value: _vm.settings.sms_tab_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_tab_text", $$v);
      },
      expression: "settings.sms_tab_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the text displayed on the SMS tab.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row-repeter-fields"
  }, [_c("el-button", {
    staticClass: "repeter-add-btn",
    attrs: {
      size: "mini",
      type: "primary"
    },
    on: {
      click: function click($event) {
        return _vm.addNew("SMS");
      }
    }
  }, [_vm._v("\n          Add SMS Number "), _c("i", {
    staticClass: "el-icon-circle-plus-outline"
  })]), _vm._v(" "), _vm._l(_vm.smsNumbers, function (item, index) {
    return _c("div", {
      key: index,
      staticClass: "setting-input-repeter"
    }, [_c("el-input", {
      staticClass: "setting-input",
      attrs: {
        placeholder: "Receiver Name"
      },
      on: {
        input: _vm.emitSmsNumbers
      },
      model: {
        value: item.receiver_name,
        callback: function callback($$v) {
          _vm.$set(item, "receiver_name", $$v);
        },
        expression: "item.receiver_name"
      }
    }), _vm._v(" "), _c("el-input", {
      staticClass: "setting-input",
      attrs: {
        type: "number",
        placeholder: "SMS Number"
      },
      on: {
        input: _vm.emitSmsNumbers
      },
      model: {
        value: item.receiver_number,
        callback: function callback($$v) {
          _vm.$set(item, "receiver_number", $$v);
        },
        expression: "item.receiver_number"
      }
    }), _vm._v(" "), _c("el-button", {
      staticClass: "delete-btn",
      attrs: {
        type: "danger",
        icon: "el-icon-delete",
        circle: "",
        disabled: _vm.smsNumbers.length === 1
      },
      on: {
        click: function click($event) {
          return _vm.removeLink(index, "SMS");
        }
      }
    }), _vm._v(" "), _c("el-tooltip", {
      attrs: {
        content: "Add the receiver name and SMS number",
        placement: "top"
      }
    }, [_c("i", {
      staticClass: "el-icon-question"
    })])], 1);
  })], 2), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Button Text Change")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("sms_button_text", value);
      }
    },
    model: {
      value: _vm.settings.sms_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_button_text", $$v);
      },
      expression: "settings.sms_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the button text",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("SMS Message")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    attrs: {
      type: "textarea",
      rows: 3,
      placeholder: "Enter Your SMS Message Here. You can use {receiver_name}, {title}, {url} as a placeholder."
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("sms_message", value);
      }
    },
    model: {
      value: _vm.settings.sms_message,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "sms_message", $$v);
      },
      expression: "settings.sms_message"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "You can use {receiver_name}, {title}, {url} as a placeholder.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Enquiry Button Text")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("shortcode_enquiry_button_text", value);
      }
    },
    model: {
      value: _vm.settings.shortcode_enquiry_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "shortcode_enquiry_button_text", $$v);
      },
      expression: "settings.shortcode_enquiry_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the text displayed on the shortcode button.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("ShortCode General Form")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    attrs: {
      readonly: ""
    },
    model: {
      value: _vm.shortcodeGeneralForm,
      callback: function callback($$v) {
        _vm.shortcodeGeneralForm = $$v;
      },
      expression: "shortcodeGeneralForm"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      effect: "dark",
      content: "Click To Copy",
      title: "Click To Copy",
      placement: "top"
    }
  }, [_c("code", {
    staticClass: "copy",
    attrs: {
      "data-clipboard-text": _vm.getCopyText(_vm.shortcodeGeneralForm)
    }
  }, [_c("i", {
    staticClass: "el-icon-document-copy"
  })])]), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Copy this shortcode to display the enquiry button for general form.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("ShortCode Product Id")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    attrs: {
      readonly: ""
    },
    model: {
      value: _vm.shortcodeProductId,
      callback: function callback($$v) {
        _vm.shortcodeProductId = $$v;
      },
      expression: "shortcodeProductId"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      effect: "dark",
      content: "Click To Copy",
      title: "Click To Copy",
      placement: "top"
    }
  }, [_c("code", {
    staticClass: "copy",
    attrs: {
      "data-clipboard-text": _vm.getCopyText(_vm.shortcodeProductId)
    }
  }, [_c("i", {
    staticClass: "el-icon-document-copy"
  })])]), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Copy this shortcode to display the enquiry button for a specific product.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("ShortCode Product Slug")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    attrs: {
      readonly: ""
    },
    model: {
      value: _vm.shortcodeProductSlug,
      callback: function callback($$v) {
        _vm.shortcodeProductSlug = $$v;
      },
      expression: "shortcodeProductSlug"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      effect: "dark",
      content: "Click To Copy",
      title: "Click To Copy",
      placement: "top"
    }
  }, [_c("code", {
    staticClass: "copy",
    attrs: {
      "data-clipboard-text": _vm.getCopyText(_vm.shortcodeProductSlug)
    }
  }, [_c("i", {
    staticClass: "el-icon-document-copy"
  })])]), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Copy this shortcode to display the enquiry button for a specific product.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Cart Page")]), _vm._v(" "), _c("el-switch", {
    attrs: {
      "active-text": "Enable Cart Page",
      "active-value": "yes",
      "inactive-value": "no"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("cart_page_enquiry_btn_enable", value);
      }
    },
    model: {
      value: _vm.settings.cart_page_enquiry_btn_enable,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "cart_page_enquiry_btn_enable", $$v);
      },
      expression: "settings.cart_page_enquiry_btn_enable"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Enable the cart page",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _vm.settings.cart_page_enquiry_btn_enable == "yes" ? _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Enquiry Button Text")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("cart_page_enquiry_button_text", value);
      }
    },
    model: {
      value: _vm.settings.cart_page_enquiry_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "cart_page_enquiry_button_text", $$v);
      },
      expression: "settings.cart_page_enquiry_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the text displayed on the cart button.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(10), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Order Summary")]), _vm._v(" "), _c("el-switch", {
    attrs: {
      "active-text": "Enable Order Summary",
      "active-value": "yes",
      "inactive-value": "no"
    },
    on: {
      change: function change(value) {
        return _vm.changeHandler("order_summary_enquiry_btn_enable", value);
      }
    },
    model: {
      value: _vm.settings.order_summary_enquiry_btn_enable,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "order_summary_enquiry_btn_enable", $$v);
      },
      expression: "settings.order_summary_enquiry_btn_enable"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Enable the order summary",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1), _vm._v(" "), _vm.settings.order_summary_enquiry_btn_enable == "yes" ? _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Enquiry Button Text")]), _vm._v(" "), _c("el-input", {
    staticClass: "setting-input",
    on: {
      change: function change(value) {
        return _vm.changeHandler("order_summary_enquiry_button_text", value);
      }
    },
    model: {
      value: _vm.settings.order_summary_enquiry_button_text,
      callback: function callback($$v) {
        _vm.$set(_vm.settings, "order_summary_enquiry_button_text", $$v);
      },
      expression: "settings.order_summary_enquiry_button_text"
    }
  }), _vm._v(" "), _c("el-tooltip", {
    attrs: {
      content: "Change the text displayed on the cart button.",
      placement: "top"
    }
  }, [_c("i", {
    staticClass: "el-icon-question"
  })])], 1) : _vm._e()])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Enquiry Shop Page Button Settings")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Enquiry Single Page Button Settings")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Enquiry Form Heading")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Enquiry Form Tabs Settings")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Enquiry Form Configure Settings")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Admin Email "), _c("span", {
    staticStyle: {
      color: "red"
    }
  }, [_vm._v("*")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("WhatsApp Configure Settings")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("SMS Configure Settings")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("ShortCode Enquiry Button Settings")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Cart Page Enquiry Button Settings")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Order Summary Enquiry Button Settings")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=template&id=6e62544e":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=template&id=6e62544e ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    directives: [{
      name: "loading",
      rawName: "v-loading",
      value: _vm.fetching,
      expression: "fetching"
    }],
    staticClass: "pingly-settings-wrapper",
    attrs: {
      "element-loading-spinner": "el-icon-loading"
    }
  }, [_c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("In-Stock Button Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("instock_shop_button_color", value);
      }
    },
    model: {
      value: _vm.styles.instock_shop_button_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "instock_shop_button_color", $$v);
      },
      expression: "styles.instock_shop_button_color"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Out-of-Stock Button Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("out_of_stock_shop_button_color", value);
      }
    },
    model: {
      value: _vm.styles.out_of_stock_shop_button_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "out_of_stock_shop_button_color", $$v);
      },
      expression: "styles.out_of_stock_shop_button_color"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Backorder Button Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("backorder_shop_button_color", value);
      }
    },
    model: {
      value: _vm.styles.backorder_shop_button_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "backorder_shop_button_color", $$v);
      },
      expression: "styles.backorder_shop_button_color"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("In-Stock Button Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("instock_single_button_color", value);
      }
    },
    model: {
      value: _vm.styles.instock_single_button_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "instock_single_button_color", $$v);
      },
      expression: "styles.instock_single_button_color"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Out-of-Stock Button Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("out_of_stock_single_button_color", value);
      }
    },
    model: {
      value: _vm.styles.out_of_stock_single_button_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "out_of_stock_single_button_color", $$v);
      },
      expression: "styles.out_of_stock_single_button_color"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Backorder Button Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("backorder_single_button_color", value);
      }
    },
    model: {
      value: _vm.styles.backorder_single_button_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "backorder_single_button_color", $$v);
      },
      expression: "styles.backorder_single_button_color"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Header Background Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("header_background_color", value);
      }
    },
    model: {
      value: _vm.styles.header_background_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "header_background_color", $$v);
      },
      expression: "styles.header_background_color"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Active Tab Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("active_tab_color", value);
      }
    },
    model: {
      value: _vm.styles.active_tab_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "active_tab_color", $$v);
      },
      expression: "styles.active_tab_color"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Submit Button Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("submit_button_background_color", value);
      }
    },
    model: {
      value: _vm.styles.submit_button_background_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "submit_button_background_color", $$v);
      },
      expression: "styles.submit_button_background_color"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Enquiry Button Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("shortcode_enquiry_button_color", value);
      }
    },
    model: {
      value: _vm.styles.shortcode_enquiry_button_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "shortcode_enquiry_button_color", $$v);
      },
      expression: "styles.shortcode_enquiry_button_color"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Enquiry Button Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("cart_page_enquiry_button_color", value);
      }
    },
    model: {
      value: _vm.styles.cart_page_enquiry_button_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "cart_page_enquiry_button_color", $$v);
      },
      expression: "styles.cart_page_enquiry_button_color"
    }
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "pingly-settings-content"
  }, [_vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "setting-row"
  }, [_c("span", {
    staticClass: "setting-label"
  }, [_vm._v("Enquiry Button Color")]), _vm._v(" "), _c("color-select", {
    on: {
      input: function input(value) {
        return _vm.changeHandler("order_summary_enquiry_button_color", value);
      }
    },
    model: {
      value: _vm.styles.order_summary_enquiry_button_color,
      callback: function callback($$v) {
        _vm.$set(_vm.styles, "order_summary_enquiry_button_color", $$v);
      },
      expression: "styles.order_summary_enquiry_button_color"
    }
  })], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Enquiry Shop Page Button Styles")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Enquiry Single Page Button Styles")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Enquiry Form Styles")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v(" ShortCode Enquiry Button Style")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Cart Page Enquiry Button Style")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "setting-title"
  }, [_c("h3", [_vm._v("Order Summary Enquiry Button Style")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=template&id=8ed2d28e":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=template&id=8ed2d28e ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.selections.length ? _c("div", {
    staticClass: "infos_selection_handler"
  }, [_c("el-button-group", [_c("el-button", {
    attrs: {
      size: "mini",
      type: "danger"
    },
    on: {
      click: function click($event) {
        return _vm.handleDeleteModal();
      }
    }
  }, [_vm._v("Delete Selected")])], 1)], 1) : _vm._e();
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/Support.vue?vue&type=template&id=45a03b82":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/Support.vue?vue&type=template&id=45a03b82 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pingly-support-wrapper pingly-card"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "pingly_support_block_box"
  }, [_c("div", {
    staticClass: "pingly_support_block text-center"
  }, [_c("img", {
    attrs: {
      src: "".concat(_vm.imagesUrl, "/support.png")
    }
  }), _vm._v(" "), _c("h3", [_vm._v("Need And Expert Support?")]), _vm._v(" "), _c("p", [_vm._v("Our EXPERTS would like to assist you for your query and any customization.")]), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c("div", {
    staticClass: "pingly_support_block text-center"
  }, [_c("img", {
    attrs: {
      src: "".concat(_vm.imagesUrl, "/community.png")
    }
  }), _vm._v(" "), _c("h3", [_vm._v("Join our community")]), _vm._v(" "), _c("p", [_vm._v("We have a strong community where we discuss ideas and help each other.")]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c("div", {
    staticClass: "pingly_support_block text-center"
  }, [_c("img", {
    attrs: {
      src: "".concat(_vm.imagesUrl, "/love.png")
    }
  }), _vm._v(" "), _c("h3", [_vm._v("Love this Plugin?")]), _vm._v(" "), _c("p", [_vm._v("Please write a review the plugin. We appreciate it!")]), _vm._v(" "), _vm._m(3)])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "pingly_header"
  }, [_c("div", {
    staticClass: "pingly_title pingly_header_title"
  }, [_c("h3", {
    staticStyle: {
      margin: "0px"
    }
  }, [_vm._v(" Support ")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("a", {
    staticClass: "button button-primary",
    attrs: {
      href: "https://wpcreativeidea.com/support-ticket/",
      target: "_blank"
    }
  }, [_vm._v("\n          Contact Support\n        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("a", {
    staticClass: "button button-primary",
    attrs: {
      href: "https://wpcreativeidea.com/",
      target: "_blank"
    }
  }, [_vm._v("\n          Join Community\n        ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", [_c("a", {
    staticClass: "button button-primary",
    attrs: {
      href: "https://wpcreativeidea.com/",
      target: "_blank"
    }
  }, [_vm._v("\n         Write Review\n        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./resources/admin/Bits/routes.js":
/*!****************************************!*\
  !*** ./resources/admin/Bits/routes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Modules_PinglyProductEnquiry_PinglyProductEnquiry_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue */ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue");
/* harmony import */ var _Modules_LicenseManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Modules/LicenseManagement */ "./resources/admin/Modules/LicenseManagement.vue");
/* harmony import */ var _Modules_Documentation_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Modules/Documentation.vue */ "./resources/admin/Modules/Documentation.vue");
/* harmony import */ var _Modules_Support_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Modules/Support.vue */ "./resources/admin/Modules/Support.vue");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  name: '',
  path: '/',
  component: _Modules_PinglyProductEnquiry_PinglyProductEnquiry_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
  exact: true
}, {
  name: 'license-management',
  path: '/license-management',
  component: _Modules_LicenseManagement__WEBPACK_IMPORTED_MODULE_1__["default"],
  exact: true
}, {
  name: 'documentation',
  path: '/documentation',
  component: _Modules_Documentation_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
  exact: true
}, {
  name: 'support',
  path: '/support',
  component: _Modules_Support_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
  exact: true
}]);

/***/ }),

/***/ "./node_modules/clipboard/dist/clipboard.js":
/*!**************************************************!*\
  !*** ./node_modules/clipboard/dist/clipboard.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 686:
/***/ (function(__unused_webpack_module, __webpack_exports__, __nested_webpack_require_623__) {

"use strict";

// EXPORTS
__nested_webpack_require_623__.d(__webpack_exports__, {
  "default": function() { return /* binding */ clipboard; }
});

// EXTERNAL MODULE: ./node_modules/tiny-emitter/index.js
var tiny_emitter = __nested_webpack_require_623__(279);
var tiny_emitter_default = /*#__PURE__*/__nested_webpack_require_623__.n(tiny_emitter);
// EXTERNAL MODULE: ./node_modules/good-listener/src/listen.js
var listen = __nested_webpack_require_623__(370);
var listen_default = /*#__PURE__*/__nested_webpack_require_623__.n(listen);
// EXTERNAL MODULE: ./node_modules/select/src/select.js
var src_select = __nested_webpack_require_623__(817);
var select_default = /*#__PURE__*/__nested_webpack_require_623__.n(src_select);
;// CONCATENATED MODULE: ./src/common/command.js
/**
 * Executes a given operation type.
 * @param {String} type
 * @return {Boolean}
 */
function command(type) {
  try {
    return document.execCommand(type);
  } catch (err) {
    return false;
  }
}
;// CONCATENATED MODULE: ./src/actions/cut.js


/**
 * Cut action wrapper.
 * @param {String|HTMLElement} target
 * @return {String}
 */

var ClipboardActionCut = function ClipboardActionCut(target) {
  var selectedText = select_default()(target);
  command('cut');
  return selectedText;
};

/* harmony default export */ var actions_cut = (ClipboardActionCut);
;// CONCATENATED MODULE: ./src/common/create-fake-element.js
/**
 * Creates a fake textarea element with a value.
 * @param {String} value
 * @return {HTMLElement}
 */
function createFakeElement(value) {
  var isRTL = document.documentElement.getAttribute('dir') === 'rtl';
  var fakeElement = document.createElement('textarea'); // Prevent zooming on iOS

  fakeElement.style.fontSize = '12pt'; // Reset box model

  fakeElement.style.border = '0';
  fakeElement.style.padding = '0';
  fakeElement.style.margin = '0'; // Move element out of screen horizontally

  fakeElement.style.position = 'absolute';
  fakeElement.style[isRTL ? 'right' : 'left'] = '-9999px'; // Move element to the same position vertically

  var yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElement.style.top = "".concat(yPosition, "px");
  fakeElement.setAttribute('readonly', '');
  fakeElement.value = value;
  return fakeElement;
}
;// CONCATENATED MODULE: ./src/actions/copy.js



/**
 * Create fake copy action wrapper using a fake element.
 * @param {String} target
 * @param {Object} options
 * @return {String}
 */

var fakeCopyAction = function fakeCopyAction(value, options) {
  var fakeElement = createFakeElement(value);
  options.container.appendChild(fakeElement);
  var selectedText = select_default()(fakeElement);
  command('copy');
  fakeElement.remove();
  return selectedText;
};
/**
 * Copy action wrapper.
 * @param {String|HTMLElement} target
 * @param {Object} options
 * @return {String}
 */


var ClipboardActionCopy = function ClipboardActionCopy(target) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    container: document.body
  };
  var selectedText = '';

  if (typeof target === 'string') {
    selectedText = fakeCopyAction(target, options);
  } else if (target instanceof HTMLInputElement && !['text', 'search', 'url', 'tel', 'password'].includes(target === null || target === void 0 ? void 0 : target.type)) {
    // If input type doesn't support `setSelectionRange`. Simulate it. https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
    selectedText = fakeCopyAction(target.value, options);
  } else {
    selectedText = select_default()(target);
    command('copy');
  }

  return selectedText;
};

/* harmony default export */ var actions_copy = (ClipboardActionCopy);
;// CONCATENATED MODULE: ./src/actions/default.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



/**
 * Inner function which performs selection from either `text` or `target`
 * properties and then executes copy or cut operations.
 * @param {Object} options
 */

var ClipboardActionDefault = function ClipboardActionDefault() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  // Defines base properties passed from constructor.
  var _options$action = options.action,
      action = _options$action === void 0 ? 'copy' : _options$action,
      container = options.container,
      target = options.target,
      text = options.text; // Sets the `action` to be performed which can be either 'copy' or 'cut'.

  if (action !== 'copy' && action !== 'cut') {
    throw new Error('Invalid "action" value, use either "copy" or "cut"');
  } // Sets the `target` property using an element that will be have its content copied.


  if (target !== undefined) {
    if (target && _typeof(target) === 'object' && target.nodeType === 1) {
      if (action === 'copy' && target.hasAttribute('disabled')) {
        throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
      }

      if (action === 'cut' && (target.hasAttribute('readonly') || target.hasAttribute('disabled'))) {
        throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
      }
    } else {
      throw new Error('Invalid "target" value, use a valid Element');
    }
  } // Define selection strategy based on `text` property.


  if (text) {
    return actions_copy(text, {
      container: container
    });
  } // Defines which selection strategy based on `target` property.


  if (target) {
    return action === 'cut' ? actions_cut(target) : actions_copy(target, {
      container: container
    });
  }
};

/* harmony default export */ var actions_default = (ClipboardActionDefault);
;// CONCATENATED MODULE: ./src/clipboard.js
function clipboard_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { clipboard_typeof = function _typeof(obj) { return typeof obj; }; } else { clipboard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return clipboard_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * Helper function to retrieve attribute value.
 * @param {String} suffix
 * @param {Element} element
 */

function getAttributeValue(suffix, element) {
  var attribute = "data-clipboard-".concat(suffix);

  if (!element.hasAttribute(attribute)) {
    return;
  }

  return element.getAttribute(attribute);
}
/**
 * Base class which takes one or more elements, adds event listeners to them,
 * and instantiates a new `ClipboardAction` on each click.
 */


var Clipboard = /*#__PURE__*/function (_Emitter) {
  _inherits(Clipboard, _Emitter);

  var _super = _createSuper(Clipboard);

  /**
   * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
   * @param {Object} options
   */
  function Clipboard(trigger, options) {
    var _this;

    _classCallCheck(this, Clipboard);

    _this = _super.call(this);

    _this.resolveOptions(options);

    _this.listenClick(trigger);

    return _this;
  }
  /**
   * Defines if attributes would be resolved using internal setter functions
   * or custom functions that were passed in the constructor.
   * @param {Object} options
   */


  _createClass(Clipboard, [{
    key: "resolveOptions",
    value: function resolveOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.action = typeof options.action === 'function' ? options.action : this.defaultAction;
      this.target = typeof options.target === 'function' ? options.target : this.defaultTarget;
      this.text = typeof options.text === 'function' ? options.text : this.defaultText;
      this.container = clipboard_typeof(options.container) === 'object' ? options.container : document.body;
    }
    /**
     * Adds a click event listener to the passed trigger.
     * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
     */

  }, {
    key: "listenClick",
    value: function listenClick(trigger) {
      var _this2 = this;

      this.listener = listen_default()(trigger, 'click', function (e) {
        return _this2.onClick(e);
      });
    }
    /**
     * Defines a new `ClipboardAction` on each click event.
     * @param {Event} e
     */

  }, {
    key: "onClick",
    value: function onClick(e) {
      var trigger = e.delegateTarget || e.currentTarget;
      var action = this.action(trigger) || 'copy';
      var text = actions_default({
        action: action,
        container: this.container,
        target: this.target(trigger),
        text: this.text(trigger)
      }); // Fires an event based on the copy operation result.

      this.emit(text ? 'success' : 'error', {
        action: action,
        text: text,
        trigger: trigger,
        clearSelection: function clearSelection() {
          if (trigger) {
            trigger.focus();
          }

          window.getSelection().removeAllRanges();
        }
      });
    }
    /**
     * Default `action` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultAction",
    value: function defaultAction(trigger) {
      return getAttributeValue('action', trigger);
    }
    /**
     * Default `target` lookup function.
     * @param {Element} trigger
     */

  }, {
    key: "defaultTarget",
    value: function defaultTarget(trigger) {
      var selector = getAttributeValue('target', trigger);

      if (selector) {
        return document.querySelector(selector);
      }
    }
    /**
     * Allow fire programmatically a copy action
     * @param {String|HTMLElement} target
     * @param {Object} options
     * @returns Text copied.
     */

  }, {
    key: "defaultText",

    /**
     * Default `text` lookup function.
     * @param {Element} trigger
     */
    value: function defaultText(trigger) {
      return getAttributeValue('text', trigger);
    }
    /**
     * Destroy lifecycle.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.listener.destroy();
    }
  }], [{
    key: "copy",
    value: function copy(target) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        container: document.body
      };
      return actions_copy(target, options);
    }
    /**
     * Allow fire programmatically a cut action
     * @param {String|HTMLElement} target
     * @returns Text cutted.
     */

  }, {
    key: "cut",
    value: function cut(target) {
      return actions_cut(target);
    }
    /**
     * Returns the support of the given action, or all actions if no action is
     * given.
     * @param {String} [action]
     */

  }, {
    key: "isSupported",
    value: function isSupported() {
      var action = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['copy', 'cut'];
      var actions = typeof action === 'string' ? [action] : action;
      var support = !!document.queryCommandSupported;
      actions.forEach(function (action) {
        support = support && !!document.queryCommandSupported(action);
      });
      return support;
    }
  }]);

  return Clipboard;
}((tiny_emitter_default()));

/* harmony default export */ var clipboard = (Clipboard);

/***/ }),

/***/ 828:
/***/ (function(module) {

var DOCUMENT_NODE_TYPE = 9;

/**
 * A polyfill for Element.matches()
 */
if (typeof Element !== 'undefined' && !Element.prototype.matches) {
    var proto = Element.prototype;

    proto.matches = proto.matchesSelector ||
                    proto.mozMatchesSelector ||
                    proto.msMatchesSelector ||
                    proto.oMatchesSelector ||
                    proto.webkitMatchesSelector;
}

/**
 * Finds the closest parent that matches a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @return {Function}
 */
function closest (element, selector) {
    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
        if (typeof element.matches === 'function' &&
            element.matches(selector)) {
          return element;
        }
        element = element.parentNode;
    }
}

module.exports = closest;


/***/ }),

/***/ 438:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_15749__) {

var closest = __nested_webpack_require_15749__(828);

/**
 * Delegates event to a selector.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function _delegate(element, selector, type, callback, useCapture) {
    var listenerFn = listener.apply(this, arguments);

    element.addEventListener(type, listenerFn, useCapture);

    return {
        destroy: function() {
            element.removeEventListener(type, listenerFn, useCapture);
        }
    }
}

/**
 * Delegates event to a selector.
 *
 * @param {Element|String|Array} [elements]
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @param {Boolean} useCapture
 * @return {Object}
 */
function delegate(elements, selector, type, callback, useCapture) {
    // Handle the regular Element usage
    if (typeof elements.addEventListener === 'function') {
        return _delegate.apply(null, arguments);
    }

    // Handle Element-less usage, it defaults to global delegation
    if (typeof type === 'function') {
        // Use `document` as the first parameter, then apply arguments
        // This is a short way to .unshift `arguments` without running into deoptimizations
        return _delegate.bind(null, document).apply(null, arguments);
    }

    // Handle Selector-based usage
    if (typeof elements === 'string') {
        elements = document.querySelectorAll(elements);
    }

    // Handle Array-like based usage
    return Array.prototype.map.call(elements, function (element) {
        return _delegate(element, selector, type, callback, useCapture);
    });
}

/**
 * Finds closest match and invokes callback.
 *
 * @param {Element} element
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Function}
 */
function listener(element, selector, type, callback) {
    return function(e) {
        e.delegateTarget = closest(e.target, selector);

        if (e.delegateTarget) {
            callback.call(element, e);
        }
    }
}

module.exports = delegate;


/***/ }),

/***/ 879:
/***/ (function(__unused_webpack_module, exports) {

/**
 * Check if argument is a HTML element.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.node = function(value) {
    return value !== undefined
        && value instanceof HTMLElement
        && value.nodeType === 1;
};

/**
 * Check if argument is a list of HTML elements.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.nodeList = function(value) {
    var type = Object.prototype.toString.call(value);

    return value !== undefined
        && (type === '[object NodeList]' || type === '[object HTMLCollection]')
        && ('length' in value)
        && (value.length === 0 || exports.node(value[0]));
};

/**
 * Check if argument is a string.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.string = function(value) {
    return typeof value === 'string'
        || value instanceof String;
};

/**
 * Check if argument is a function.
 *
 * @param {Object} value
 * @return {Boolean}
 */
exports.fn = function(value) {
    var type = Object.prototype.toString.call(value);

    return type === '[object Function]';
};


/***/ }),

/***/ 370:
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_19113__) {

var is = __nested_webpack_require_19113__(879);
var delegate = __nested_webpack_require_19113__(438);

/**
 * Validates all params and calls the right
 * listener function based on its target type.
 *
 * @param {String|HTMLElement|HTMLCollection|NodeList} target
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listen(target, type, callback) {
    if (!target && !type && !callback) {
        throw new Error('Missing required arguments');
    }

    if (!is.string(type)) {
        throw new TypeError('Second argument must be a String');
    }

    if (!is.fn(callback)) {
        throw new TypeError('Third argument must be a Function');
    }

    if (is.node(target)) {
        return listenNode(target, type, callback);
    }
    else if (is.nodeList(target)) {
        return listenNodeList(target, type, callback);
    }
    else if (is.string(target)) {
        return listenSelector(target, type, callback);
    }
    else {
        throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
    }
}

/**
 * Adds an event listener to a HTML element
 * and returns a remove listener function.
 *
 * @param {HTMLElement} node
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNode(node, type, callback) {
    node.addEventListener(type, callback);

    return {
        destroy: function() {
            node.removeEventListener(type, callback);
        }
    }
}

/**
 * Add an event listener to a list of HTML elements
 * and returns a remove listener function.
 *
 * @param {NodeList|HTMLCollection} nodeList
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenNodeList(nodeList, type, callback) {
    Array.prototype.forEach.call(nodeList, function(node) {
        node.addEventListener(type, callback);
    });

    return {
        destroy: function() {
            Array.prototype.forEach.call(nodeList, function(node) {
                node.removeEventListener(type, callback);
            });
        }
    }
}

/**
 * Add an event listener to a selector
 * and returns a remove listener function.
 *
 * @param {String} selector
 * @param {String} type
 * @param {Function} callback
 * @return {Object}
 */
function listenSelector(selector, type, callback) {
    return delegate(document.body, selector, type, callback);
}

module.exports = listen;


/***/ }),

/***/ 817:
/***/ (function(module) {

function select(element) {
    var selectedText;

    if (element.nodeName === 'SELECT') {
        element.focus();

        selectedText = element.value;
    }
    else if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
        var isReadOnly = element.hasAttribute('readonly');

        if (!isReadOnly) {
            element.setAttribute('readonly', '');
        }

        element.select();
        element.setSelectionRange(0, element.value.length);

        if (!isReadOnly) {
            element.removeAttribute('readonly');
        }

        selectedText = element.value;
    }
    else {
        if (element.hasAttribute('contenteditable')) {
            element.focus();
        }

        var selection = window.getSelection();
        var range = document.createRange();

        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);

        selectedText = selection.toString();
    }

    return selectedText;
}

module.exports = select;


/***/ }),

/***/ 279:
/***/ (function(module) {

function E () {
  // Keep this empty so it's easier to inherit from
  // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}

E.prototype = {
  on: function (name, callback, ctx) {
    var e = this.e || (this.e = {});

    (e[name] || (e[name] = [])).push({
      fn: callback,
      ctx: ctx
    });

    return this;
  },

  once: function (name, callback, ctx) {
    var self = this;
    function listener () {
      self.off(name, listener);
      callback.apply(ctx, arguments);
    };

    listener._ = callback
    return this.on(name, listener, ctx);
  },

  emit: function (name) {
    var data = [].slice.call(arguments, 1);
    var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
    var i = 0;
    var len = evtArr.length;

    for (i; i < len; i++) {
      evtArr[i].fn.apply(evtArr[i].ctx, data);
    }

    return this;
  },

  off: function (name, callback) {
    var e = this.e || (this.e = {});
    var evts = e[name];
    var liveEvents = [];

    if (evts && callback) {
      for (var i = 0, len = evts.length; i < len; i++) {
        if (evts[i].fn !== callback && evts[i].fn._ !== callback)
          liveEvents.push(evts[i]);
      }
    }

    // Remove event from queue to prevent memory leak
    // Suggested by https://github.com/lazd
    // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

    (liveEvents.length)
      ? e[name] = liveEvents
      : delete e[name];

    return this;
  }
};

module.exports = E;
module.exports.TinyEmitter = E;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_24495__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_24495__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_24495__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__nested_webpack_require_24495__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_24495__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_24495__.o(definition, key) && !__nested_webpack_require_24495__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_24495__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_24495__(686);
/******/ })()
.default;
});

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_castFunction.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_castFunction.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js");

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

module.exports = freeGlobal;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./forEach */ "./node_modules/lodash/forEach.js");


/***/ }),

/***/ "./node_modules/lodash/forEach.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/forEach.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    castFunction = __webpack_require__(/*! ./_castFunction */ "./node_modules/lodash/_castFunction.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./resources/admin/Application.vue":
/*!*****************************************!*\
  !*** ./resources/admin/Application.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Application_vue_vue_type_template_id_f734b430__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Application.vue?vue&type=template&id=f734b430 */ "./resources/admin/Application.vue?vue&type=template&id=f734b430");
/* harmony import */ var _Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Application.vue?vue&type=script&lang=js */ "./resources/admin/Application.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Application_vue_vue_type_template_id_f734b430__WEBPACK_IMPORTED_MODULE_0__.render,
  _Application_vue_vue_type_template_id_f734b430__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/Application.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/InputComponent/colorSelect.vue":
/*!********************************************************!*\
  !*** ./resources/admin/InputComponent/colorSelect.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _colorSelect_vue_vue_type_template_id_576144ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorSelect.vue?vue&type=template&id=576144ca */ "./resources/admin/InputComponent/colorSelect.vue?vue&type=template&id=576144ca");
/* harmony import */ var _colorSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorSelect.vue?vue&type=script&lang=js */ "./resources/admin/InputComponent/colorSelect.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _colorSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _colorSelect_vue_vue_type_template_id_576144ca__WEBPACK_IMPORTED_MODULE_0__.render,
  _colorSelect_vue_vue_type_template_id_576144ca__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/InputComponent/colorSelect.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/Layouts/Navigation.vue":
/*!************************************************!*\
  !*** ./resources/admin/Layouts/Navigation.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navigation_vue_vue_type_template_id_1be81d12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navigation.vue?vue&type=template&id=1be81d12 */ "./resources/admin/Layouts/Navigation.vue?vue&type=template&id=1be81d12");
/* harmony import */ var _Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.vue?vue&type=script&lang=js */ "./resources/admin/Layouts/Navigation.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navigation_vue_vue_type_template_id_1be81d12__WEBPACK_IMPORTED_MODULE_0__.render,
  _Navigation_vue_vue_type_template_id_1be81d12__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/Layouts/Navigation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/Modules/Documentation.vue":
/*!***************************************************!*\
  !*** ./resources/admin/Modules/Documentation.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Documentation_vue_vue_type_template_id_2c0ef5aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Documentation.vue?vue&type=template&id=2c0ef5aa */ "./resources/admin/Modules/Documentation.vue?vue&type=template&id=2c0ef5aa");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Documentation_vue_vue_type_template_id_2c0ef5aa__WEBPACK_IMPORTED_MODULE_0__.render,
  _Documentation_vue_vue_type_template_id_2c0ef5aa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/Modules/Documentation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/Modules/LicenseManagement.vue":
/*!*******************************************************!*\
  !*** ./resources/admin/Modules/LicenseManagement.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LicenseManagement_vue_vue_type_template_id_11ff7d54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LicenseManagement.vue?vue&type=template&id=11ff7d54 */ "./resources/admin/Modules/LicenseManagement.vue?vue&type=template&id=11ff7d54");
/* harmony import */ var _LicenseManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LicenseManagement.vue?vue&type=script&lang=js */ "./resources/admin/Modules/LicenseManagement.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LicenseManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _LicenseManagement_vue_vue_type_template_id_11ff7d54__WEBPACK_IMPORTED_MODULE_0__.render,
  _LicenseManagement_vue_vue_type_template_id_11ff7d54__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/Modules/LicenseManagement.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue":
/*!*******************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PinglyProductEnquiry_vue_vue_type_template_id_bdb79dc2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PinglyProductEnquiry.vue?vue&type=template&id=bdb79dc2 */ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=template&id=bdb79dc2");
/* harmony import */ var _PinglyProductEnquiry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PinglyProductEnquiry.vue?vue&type=script&lang=js */ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PinglyProductEnquiry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PinglyProductEnquiry_vue_vue_type_template_id_bdb79dc2__WEBPACK_IMPORTED_MODULE_0__.render,
  _PinglyProductEnquiry_vue_vue_type_template_id_bdb79dc2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue":
/*!***********************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PinglyProductEnquiryData_vue_vue_type_template_id_900df72e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PinglyProductEnquiryData.vue?vue&type=template&id=900df72e */ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=template&id=900df72e");
/* harmony import */ var _PinglyProductEnquiryData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PinglyProductEnquiryData.vue?vue&type=script&lang=js */ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PinglyProductEnquiryData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _PinglyProductEnquiryData_vue_vue_type_template_id_900df72e__WEBPACK_IMPORTED_MODULE_0__.render,
  _PinglyProductEnquiryData_vue_vue_type_template_id_900df72e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/Settings.vue":
/*!*******************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/Settings.vue ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Settings_vue_vue_type_template_id_7a6bca0f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=7a6bca0f */ "./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=template&id=7a6bca0f");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js */ "./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_7a6bca0f__WEBPACK_IMPORTED_MODULE_0__.render,
  _Settings_vue_vue_type_template_id_7a6bca0f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/Modules/PinglyProductEnquiry/Settings.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/Styles.vue":
/*!*****************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/Styles.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Styles_vue_vue_type_template_id_6e62544e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Styles.vue?vue&type=template&id=6e62544e */ "./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=template&id=6e62544e");
/* harmony import */ var _Styles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Styles.vue?vue&type=script&lang=js */ "./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Styles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Styles_vue_vue_type_template_id_6e62544e__WEBPACK_IMPORTED_MODULE_0__.render,
  _Styles_vue_vue_type_template_id_6e62544e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/Modules/PinglyProductEnquiry/Styles.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue":
/*!*********************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TableSelectionHandler_vue_vue_type_template_id_8ed2d28e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_TableSelectionHandler.vue?vue&type=template&id=8ed2d28e */ "./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=template&id=8ed2d28e");
/* harmony import */ var _TableSelectionHandler_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_TableSelectionHandler.vue?vue&type=script&lang=js */ "./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TableSelectionHandler_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableSelectionHandler_vue_vue_type_template_id_8ed2d28e__WEBPACK_IMPORTED_MODULE_0__.render,
  _TableSelectionHandler_vue_vue_type_template_id_8ed2d28e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/Modules/Support.vue":
/*!*********************************************!*\
  !*** ./resources/admin/Modules/Support.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Support_vue_vue_type_template_id_45a03b82__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Support.vue?vue&type=template&id=45a03b82 */ "./resources/admin/Modules/Support.vue?vue&type=template&id=45a03b82");
/* harmony import */ var _Support_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Support.vue?vue&type=script&lang=js */ "./resources/admin/Modules/Support.vue?vue&type=script&lang=js");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Support_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _Support_vue_vue_type_template_id_45a03b82__WEBPACK_IMPORTED_MODULE_0__.render,
  _Support_vue_vue_type_template_id_45a03b82__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/admin/Modules/Support.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/admin/Application.vue?vue&type=script&lang=js":
/*!*****************************************************************!*\
  !*** ./resources/admin/Application.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Application.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Application.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/InputComponent/colorSelect.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/admin/InputComponent/colorSelect.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_colorSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./colorSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/InputComponent/colorSelect.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_colorSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/Layouts/Navigation.vue?vue&type=script&lang=js":
/*!************************************************************************!*\
  !*** ./resources/admin/Layouts/Navigation.vue?vue&type=script&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Layouts/Navigation.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/Modules/LicenseManagement.vue?vue&type=script&lang=js":
/*!*******************************************************************************!*\
  !*** ./resources/admin/Modules/LicenseManagement.vue?vue&type=script&lang=js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LicenseManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LicenseManagement.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/LicenseManagement.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LicenseManagement_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PinglyProductEnquiry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PinglyProductEnquiry.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PinglyProductEnquiry_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PinglyProductEnquiryData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PinglyProductEnquiryData.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PinglyProductEnquiryData_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=script&lang=js":
/*!*******************************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=script&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Styles.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableSelectionHandler_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_TableSelectionHandler.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TableSelectionHandler_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/Modules/Support.vue?vue&type=script&lang=js":
/*!*********************************************************************!*\
  !*** ./resources/admin/Modules/Support.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Support.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/Support.vue?vue&type=script&lang=js");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/admin/Application.vue?vue&type=template&id=f734b430":
/*!***********************************************************************!*\
  !*** ./resources/admin/Application.vue?vue&type=template&id=f734b430 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_f734b430__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_f734b430__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Application_vue_vue_type_template_id_f734b430__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Application.vue?vue&type=template&id=f734b430 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Application.vue?vue&type=template&id=f734b430");


/***/ }),

/***/ "./resources/admin/InputComponent/colorSelect.vue?vue&type=template&id=576144ca":
/*!**************************************************************************************!*\
  !*** ./resources/admin/InputComponent/colorSelect.vue?vue&type=template&id=576144ca ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_colorSelect_vue_vue_type_template_id_576144ca__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_colorSelect_vue_vue_type_template_id_576144ca__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_colorSelect_vue_vue_type_template_id_576144ca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./colorSelect.vue?vue&type=template&id=576144ca */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/InputComponent/colorSelect.vue?vue&type=template&id=576144ca");


/***/ }),

/***/ "./resources/admin/Layouts/Navigation.vue?vue&type=template&id=1be81d12":
/*!******************************************************************************!*\
  !*** ./resources/admin/Layouts/Navigation.vue?vue&type=template&id=1be81d12 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_1be81d12__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_1be81d12__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navigation_vue_vue_type_template_id_1be81d12__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navigation.vue?vue&type=template&id=1be81d12 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Layouts/Navigation.vue?vue&type=template&id=1be81d12");


/***/ }),

/***/ "./resources/admin/Modules/Documentation.vue?vue&type=template&id=2c0ef5aa":
/*!*********************************************************************************!*\
  !*** ./resources/admin/Modules/Documentation.vue?vue&type=template&id=2c0ef5aa ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_template_id_2c0ef5aa__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_template_id_2c0ef5aa__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Documentation_vue_vue_type_template_id_2c0ef5aa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Documentation.vue?vue&type=template&id=2c0ef5aa */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/Documentation.vue?vue&type=template&id=2c0ef5aa");


/***/ }),

/***/ "./resources/admin/Modules/LicenseManagement.vue?vue&type=template&id=11ff7d54":
/*!*************************************************************************************!*\
  !*** ./resources/admin/Modules/LicenseManagement.vue?vue&type=template&id=11ff7d54 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LicenseManagement_vue_vue_type_template_id_11ff7d54__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LicenseManagement_vue_vue_type_template_id_11ff7d54__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LicenseManagement_vue_vue_type_template_id_11ff7d54__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LicenseManagement.vue?vue&type=template&id=11ff7d54 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/LicenseManagement.vue?vue&type=template&id=11ff7d54");


/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=template&id=bdb79dc2":
/*!*************************************************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=template&id=bdb79dc2 ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PinglyProductEnquiry_vue_vue_type_template_id_bdb79dc2__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PinglyProductEnquiry_vue_vue_type_template_id_bdb79dc2__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PinglyProductEnquiry_vue_vue_type_template_id_bdb79dc2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PinglyProductEnquiry.vue?vue&type=template&id=bdb79dc2 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiry.vue?vue&type=template&id=bdb79dc2");


/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=template&id=900df72e":
/*!*****************************************************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=template&id=900df72e ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PinglyProductEnquiryData_vue_vue_type_template_id_900df72e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PinglyProductEnquiryData_vue_vue_type_template_id_900df72e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_PinglyProductEnquiryData_vue_vue_type_template_id_900df72e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PinglyProductEnquiryData.vue?vue&type=template&id=900df72e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/PinglyProductEnquiryData.vue?vue&type=template&id=900df72e");


/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=template&id=7a6bca0f":
/*!*************************************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=template&id=7a6bca0f ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_7a6bca0f__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_7a6bca0f__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_7a6bca0f__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Settings.vue?vue&type=template&id=7a6bca0f */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Settings.vue?vue&type=template&id=7a6bca0f");


/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=template&id=6e62544e":
/*!***********************************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=template&id=6e62544e ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_template_id_6e62544e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_template_id_6e62544e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_template_id_6e62544e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Styles.vue?vue&type=template&id=6e62544e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/Styles.vue?vue&type=template&id=6e62544e");


/***/ }),

/***/ "./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=template&id=8ed2d28e":
/*!***************************************************************************************************************!*\
  !*** ./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=template&id=8ed2d28e ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableSelectionHandler_vue_vue_type_template_id_8ed2d28e__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableSelectionHandler_vue_vue_type_template_id_8ed2d28e__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TableSelectionHandler_vue_vue_type_template_id_8ed2d28e__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./_TableSelectionHandler.vue?vue&type=template&id=8ed2d28e */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/PinglyProductEnquiry/_TableSelectionHandler.vue?vue&type=template&id=8ed2d28e");


/***/ }),

/***/ "./resources/admin/Modules/Support.vue?vue&type=template&id=45a03b82":
/*!***************************************************************************!*\
  !*** ./resources/admin/Modules/Support.vue?vue&type=template&id=45a03b82 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_template_id_45a03b82__WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_template_id_45a03b82__WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Support_vue_vue_type_template_id_45a03b82__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Support.vue?vue&type=template&id=45a03b82 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/admin/Modules/Support.vue?vue&type=template&id=45a03b82");


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************************!*\
  !*** ./resources/admin/start.js ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bits_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bits/routes */ "./resources/admin/Bits/routes.js");

var vueRouter = new window.PINGLYPlugin.Router({
  routes: window.PINGLYPlugin.applyFilters('pingly_global_routes', _Bits_routes__WEBPACK_IMPORTED_MODULE_0__["default"])
});
window.PINGLYPlugin.Vue.prototype.$get = window.PINGLYPlugin.$get;
window.PINGLYPlugin.Vue.prototype.$post = window.PINGLYPlugin.$post;
window.PINGLYPlugin.Vue.prototype.$put = window.PINGLYPlugin.$put;
window.PINGLYPlugin.Vue.prototype.$del = window.PINGLYPlugin.$del;
window.PINGLYPlugin.Vue.prototype.$bus = new window.PINGLYPlugin.Vue();
document.addEventListener('DOMContentLoaded', function () {
  new window.PINGLYPlugin.Vue({
    el: '#wp_pingly_settings_app',
    render: function render(h) {
      return h((__webpack_require__(/*! ./Application */ "./resources/admin/Application.vue")["default"]));
    },
    router: vueRouter,
    mounted: function mounted() {
      // console.log('Vue App Mounted');
    }
  });
});
})();

/******/ })()
;