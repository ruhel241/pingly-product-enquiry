<template>
  <div class="pingly-card">
    <!-- {{configs}} -->
    <div class="pingly-settings-header">
      <h2>Enquiry</h2>
      <el-switch
          v-model="activeModule"
          active-text="Disable"
          active-value="yes"
          inactive-value="no"
          @change="(value) => activeChangeHandler('pingly_module', value)">
      </el-switch>
    </div>
    <!-- Confirmation Dialog -->
    <el-dialog
        :visible.sync="showDisableDialog"
        width="480px"
        :close-on-click-modal="true"
        :close-on-press-escape="true"
        :show-close="true"
        custom-class="pingly-module-disable-dialog"
        center>
      <div class="pingly-module-dialog-content text-align-center">
        <!-- Icon Container with Gradient Background -->
        <div class="icon-container">
          <div class="warning-circle">
            <i class="el-icon-warning-outline"></i>
          </div>
        </div>
        <!-- Content -->
        <div class="dialog-text">
          <h3>Disable Product Enquiry?</h3>
          <p>This action will disable the module completely.<br/>Users won't see the enquiry functionality on your frontend.</p>
        </div>
        <!-- Action Buttons -->
        <div class="dialog-actions">
          <el-button
              @click="cancelDisable"
              class="cancel-btn">
            Keep Enabled
          </el-button>
          <el-button
              type="danger"
              @click="confirmDisable"
              :loading="saving">
            <i class="el-icon-close" v-if="!saving"></i>
            Yes, Disable
          </el-button>
        </div>
      </div>
    </el-dialog>

    <el-tabs v-model="activeTab" @tab-click="handleClick">
      <el-tab-pane label="Settings" name="settings">
        <Settings
            :settings="configs"
            :fetching="fetching"
            @update="updateHandler"/>
      </el-tab-pane>
      <el-tab-pane label="Styles" name="styles">
        <Styles
            :styles="configs"
            :fetching="fetching"
            @update="updateHandler"/>
      </el-tab-pane>
       <el-tab-pane label="Product Enquiry" name="pingly-product-enquiry">
        <PinglyProductEnquiryData
            :enquireDatas="configs"
            :fetching="fetching"
            @update="updateHandler"/>
      </el-tab-pane>
    </el-tabs>
   
    <div class="pingly-button-group" v-if="activeTab !='pingly-product-enquiry'">
      <el-button type="primary" @click="saveSettings">
        <i :class="!saving ? 'el-icon-circle-check': 'el-icon-loading'"></i>
        Save {{currentTab}}
      </el-button>
      <el-button type="danger" @click="resetAlertMessage()" resetting>
        <i :class="!resetting ? 'el-icon-refresh': 'el-icon-loading'"></i>
        Reset {{currentTab}}
      </el-button>
    </div>
    
  </div>
</template>

<script>
import Settings from "./Settings.vue";
import Styles from "./Styles.vue";
import PinglyProductEnquiryData from "./PinglyProductEnquiryData.vue";

export default {
  name: 'pingly-product-enquiry',
  components: {
    Settings,
    Styles,
    PinglyProductEnquiryData
  },
  data() {
    return {
      activeTab: localStorage.getItem('pingly-active-tab') || 'settings',
      configs: {},
      fetching: false,
      activeModule: 'no',
      saving: false,
      resetting: false,
      showDisableDialog: false,
      pendingDisableKey: null
    }
  },
  computed: {
    currentTab() {
      if (!this.activeTab) return '';
      return this.activeTab.charAt(0).toUpperCase() + this.activeTab.slice(1);
    }
  },
  methods: {
    resetAlertMessage() {
      this.$confirm('Are you sure you want to reset all ' + this.activeTab + '? This will set the default values.', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.resetSettings();
      }).catch(() => {
        this.$message({
          type: 'info',
          offset: 50,
          message: 'Delete canceled'
        });
      });
    },

    handleClick(tab, event) {
      this.getSettings();
      localStorage.setItem('pingly-active-tab', this.activeTab);
    },

    //Handle updates from child components
    updateHandler(field, value) {
      this.configs[field] = value;
    },

    activeChangeHandler(type, status) {
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
    confirmDisable() {
      this.showDisableDialog = false;
      this.enableActiveModule(this.pendingDisableKey, 'no');
      this.pendingDisableKey = null;
    },

    // Handle dialog cancellation
    cancelDisable() {
      this.showDisableDialog = false;
      this.activeModule = 'yes'; // Keep it enabled
      this.pendingDisableKey = null;
    },

    getSettings() {
      this.fetching = true;
      this.$post({
        action: "pingly_admin_ajax",
        route: "get_settings",
        type: 'pingly_settings',
        tab: this.activeTab,
        nonce: window.PinglyProductEnquiryAdminVars.nonce,
      })
          .then((response) => {
            if (!this.configs) {
              this.configs = {};
            }
            // store only the current tab's data
            if (response.data.configs) {
              this.configs = response.data.configs;
            }
          })
          .fail((error) => {
            this.$handleError(error);
          })
          .always(() => {
            setTimeout(() => { this.fetching = false; }, 500);
          });
    },

    saveSettings() {
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
        nonce: window.PinglyProductEnquiryAdminVars.nonce,
      })
          .then((response) => {
            setTimeout(() => {
              this.getSettings();
              this.$handleSuccess(response.data.message);
            }, 500);
          })
          .fail((error) => {
            this.$handleError(error.message);
          })
          .always(() => {
            setTimeout(() => { this.saving = false; }, 500);
          });
    },

    resetSettings() {
      this.resetting = true;
      this.$post({
        action: "pingly_admin_ajax",
        route: "reset_settings",
        type: 'pingly_settings',
        tab: this.activeTab,
        nonce: window.PinglyProductEnquiryAdminVars.nonce,
      })
          .then((response) => {
            setTimeout(() => {
              this.getSettings();
              this.$handleSuccess(response.data.message);
            }, 500);
          })
          .fail((error) => {
            this.$handleError(error.message);
          })
          .always(() => {
            setTimeout(() => { this.resetting = false; }, 500);
          });
    },

    enableActiveModule(type, status) {
      this.saving = true;
      this.$post({
        action: "pingly_admin_ajax",
        route: "enable_active_module",
        type: type,
        status: status,
        nonce: window.PinglyProductEnquiryAdminVars.nonce,
      })
          .then((response) => {
            this.getEnableModule();
          })
          .fail((error) => {
            this.$handleError(error);
            // Revert the local state if the server request failed
            this.activeModule = status === 'yes' ? 'no' : 'yes';
          })
          .always(() => {
            this.saving = false;
          });
    },

    getEnableModule() {
      this.fetching = true;
      this.$post({
        action: "pingly_admin_ajax",
        route: "get_active_module",
        type: 'pingly_module',
        nonce: window.PinglyProductEnquiryAdminVars.nonce,
      })
          .then((response) => {
            this.activeModule = response.data.active_module;
          })
          .fail((error) => {
            this.$handleError(error);
          })
          .always(() => {
            setTimeout(() => { this.fetching = false; }, 500);
          });
    },

    emailValidation(){
      if (this.configs.email_enable === 'yes' && !this.configs.admin_email) {
        this.$handleError('Admin Email field is required');
        this.saving = false;
        return false;
      }
      return true;
    },
    whatsappNumberValidation() {
      if (this.configs.whatsapp_tab_enable === 'yes') {
        const numbers = this.configs.whatsapp_numbers || [];
        const first = numbers[0];
        // First entry is mandatory
        if (!first || !first.receiver_name || !first.receiver_number) {
          this.$handleError('WhatsApp Name and Number are required');
          this.saving = false;
          return false;
        }
        // Remove empty second+ entries
        this.configs.whatsapp_numbers = numbers.filter((item, index) => {
          if (!item.receiver_name || !item.receiver_number) {
            return index === 0;
          }
          return true;
        });
      }
      return true;
    },
    smsValidation() {
      if (this.configs.sms_tab_enable === 'yes') {
        const numbers = this.configs.sms_numbers || [];
        const first = numbers[0];
        // First entry is mandatory
        if (!first || !first.receiver_name || !first.receiver_number) {
          this.$handleError('SMS Name and Number are required');
          this.saving = false;
          return false;
        }
        // Remove empty second+ entries
        this.configs.sms_numbers = numbers.filter((item, index) => {
          if (!item.receiver_name || !item.receiver_number) {
            return index === 0;
          }
          return true;
        });
      }
      return true;
    }
  },

  mounted() {
    this.getSettings();
    this.getEnableModule();
  },
}
</script>