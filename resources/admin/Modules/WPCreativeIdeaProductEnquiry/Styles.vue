<template>
  <div class="wpcipe-settings-wrapper" v-loading="fetching" element-loading-spinner="el-icon-loading">
    <div class="wpcipe-settings-content">
      <div class="setting-title">
        <h3>Enquiry Shop Page Button Styles</h3>
      </div>
      <div class="setting-row">
        <span class="setting-label">In-Stock Button Color</span>
        <color-select
            v-model="styles.instock_shop_button_color"
            @input="(value) => changeHandler('instock_shop_button_color', value)"
        />
      </div>
      <div class="setting-row">
        <span class="setting-label">Out-of-Stock Button Color</span>
        <color-select
            v-model="styles.out_of_stock_shop_button_color"
            @input="(value) => changeHandler('out_of_stock_shop_button_color', value)"
        />
      </div>
      <div class="setting-row">
        <span class="setting-label">Backorder Button Color</span>
        <color-select
            v-model="styles.backorder_shop_button_color"
            @input="(value) => changeHandler('backorder_shop_button_color', value)"
        />
      </div>
    </div>
    <div class="wpcipe-settings-content">
      <div class="setting-title">
        <h3>Enquiry Single Page Button Styles</h3>
      </div>
      <div class="setting-row">
        <span class="setting-label">In-Stock Button Color</span>
        <color-select
            v-model="styles.instock_single_button_color"
            @input="(value) => changeHandler('instock_single_button_color', value)"
        />
      </div>
      <div class="setting-row">
        <span class="setting-label">Out-of-Stock Button Color</span>
        <color-select
            v-model="styles.out_of_stock_single_button_color"
            @input="(value) => changeHandler('out_of_stock_single_button_color', value)"
        />
      </div>
      <div class="setting-row">
        <span class="setting-label">Backorder Button Color</span>
        <color-select
            v-model="styles.backorder_single_button_color"
            @input="(value) => changeHandler('backorder_single_button_color', value)"
        />
      </div>
    </div>
    <div class="wpcipe-settings-content">
      <div class="setting-title">
        <h3>Enquiry Form Styles</h3>
      </div>
      <div class="setting-row">
        <span class="setting-label">Header Background Color</span>
        <color-select
            v-model="styles.header_background_color"
            @input="(value) => changeHandler('header_background_color', value)"
        />
      </div>
      <div class="setting-row">
        <span class="setting-label">Active Tab Color</span>
        <color-select
            v-model="styles.active_tab_color"
            @input="(value) => changeHandler('active_tab_color', value)"
        />
      </div>
      <div class="setting-row">
        <span class="setting-label">Submit Button Color</span>
        <color-select
            v-model="styles.submit_button_background_color"
            @input="(value) => changeHandler('submit_button_background_color', value)"
        />
      </div>
    </div>
    <div class="wpcipe-settings-content">
      <div class="setting-title">
        <h3> ShortCode Enquiry Button Style</h3>
      </div>
      <div class="setting-row">
        <span class="setting-label">Enquiry Button Color</span>
        <color-select
            v-model="styles.shortcode_enquiry_button_color"
            @input="(value) => changeHandler('shortcode_enquiry_button_color', value)"
        />
      </div>
    </div>
   
    <div class="wpcipe-settings-content">
      <div class="setting-title">
        <h3>Cart Page Enquiry Button Style</h3>
      </div>
      <div class="setting-row">
        <span class="setting-label">Enquiry Button Color</span>
        <color-select
            v-model="styles.cart_page_enquiry_button_color"
            @input="(value) => changeHandler('cart_page_enquiry_button_color', value)"
        />
      </div>
    </div>
    <div class="wpcipe-settings-content">
      <div class="setting-title">
        <h3>Order Summary Enquiry Button Style</h3>
      </div>
      <div class="setting-row">
        <span class="setting-label">Enquiry Button Color</span>
        <color-select
            v-model="styles.order_summary_enquiry_button_color"
            @input="(value) => changeHandler('order_summary_enquiry_button_color', value)"
        />
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import ColorSelect from "../../InputComponent/colorSelect.vue";

export default {
  name: 'styles',
  props: ['styles', 'fetching'],
  components: {
    ColorSelect
  },
  methods: {
    changeHandler(field, value) {
      this.$emit('update', field, value);
    },
  }
}
</script>