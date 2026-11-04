<template>
    <div class="pingly-license-management pingly-card" v-if="hasPro">
        <div class="pingly_header">
            <div class="pingly_title pingly_header_title">
                <h3 style="margin: 0;"> License Management </h3>
                <el-button
                    type="text"
                    size="medium"
                    icon="el-icon-refresh"
                    @click="getLicense">
                </el-button>
            </div>
        </div>
        <div v-loading="verifying" class="pingly_pad_around">
            <div v-if="fetching" v-loading="fetching" class="pingly_narrow_box text-align-center fetching-text">
                <h3>Fetching License Information Please wait</h3>
            </div>
            <div v-else class="pingly_narrow_box" :class="'pingly_license_'+licenseData.status">
                <div class="pingly-expired" v-if="licenseData.status == 'expired'">
                    <h3>Looks like your license has been expired </h3>
                    <div class="license-status-container">
                        <div class="license-info-card">
                            <div class="info-item">
                                <div class="label"> Plugin:  </div>
                                <div class="value"> Pingly Product Enquiry </div>
                            </div>
                            <div class="info-item">
                                <div class="label"> License Status: </div>
                                <div class="value expired">
                                    {{ licenseData.status.charAt(0).toUpperCase() + licenseData.status.slice(1) }}
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="label"> Expiry On: </div>
                                <div class="value">{{ licenseData.expires_formatted }}</div>
                            </div>

                            <div class="info-item" v-if="licenseData.expires !== 'Lifetime'">
                                <div class="label"> {{licenseData.time_label}} </div>
                                <div class="value remaining">
                                    <el-tag size="small" type="danger"> {{ licenseData.human_date }}</el-tag>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a :href="licenseData.renew_url" target="_blank" class="el-button el-button--danger el-button--small">Click Here to Renew your License</a>
                    <p class="license-expired-notice">Note: <em>Your License has expired, so "Pingly Product Enquiry" Addons is currently inactive. Please click the button to renew your license and continue using the plugin.</em> </p>
                    <hr style="margin: 20px 0px;" />
                    <p v-if="!showNewLicenseInput">Have a new license Key? <a @click.prevent="showNewLicenseInput = !showNewLicenseInput" href="#">Click here</a></p>
                    <div v-else>
                        <h3 style="margin-bottom: 15px;">Your License Key</h3>
                        <el-input v-model="licenseKey" placeholder="License Key">
                            <el-button @click="verifyLicense()" slot="append" icon="el-icon-lock">Verify License</el-button>
                        </el-input>
                        <!-- <div class="pingly-provide-license-key">
                            <h3>Please Provide a license key of Pingly Product Enquiry Addon</h3>
                            <el-input v-model="licenseKey" placeholder="License Key">
                                <el-button type="success" @click="verifyLicense()" slot="append" icon="el-icon-lock">Verify License</el-button>
                            </el-input>
                            <p class="text-align-center" style="color: red; margin: 50px 0 0px 0px;" v-html="errorMessage"></p>
                            <hr style="margin: 10px 0px 10px 0px;"/>
                            <p class="text-align-center" v-if="!showNewLicenseInput"> Don't have a license key? <a target="_blank" :href="licenseData.purchase_url">Purchase one here</a></p>
                        </div> -->
                    </div>
                </div>
                
                <div class="pingly-valid" v-else-if="licenseData.status == 'valid'">
                    <div class="circle-check-icon">
                        <span class="el-icon el-icon-circle-check"></span>
                    </div>
                    <h2 class="title">You license key is valid and activated</h2>

                    <div class="license-status-container">
                        <div class="license-info-card">
                            <div class="info-item">
                                <div class="label"> Plugin:  </div>
                                <div class="value"> Pingly Product Enquiry </div>
                            </div>
                            <div class="info-item">
                                <div class="label"> License Key: </div>
                                <div class="value license-key"> {{ licenseData.license_key }}</div>
                            </div>
                            <div class="info-item">
                                <div class="label"> License Status: </div>
                                <div class="value license-valid">
                                    Active
                                </div>
                            </div>
                            <div class="info-item">
                                <div class="label"> Expiry Date: </div>
                                <div class="value">{{ licenseData.expires_formatted }}</div>
                            </div>

                            <div class="info-item" v-if="licenseData.expires !== 'Lifetime'">
                                <div class="label"> {{ licenseData.time_label }} </div>
                                <div class="value remaining">
                                <el-tag size="small" type="success"> {{ licenseData.human_date }}</el-tag>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style="margin: 20px 0px;" />
                    <p>Want to deactivate this license? <a @click.prevent="deactivateLicense()" href="#">Click here</a></p>
                </div>

                <div class="pingly-provide-license-key" v-else>
                    <h3>Please Provide a license key of Pingly Product Enquiry Addons</h3>
                    <el-input v-model="licenseKey" placeholder="License Key">
                        <el-button type="success" @click="verifyLicense()" slot="append" icon="el-icon-lock">Verify License</el-button>
                    </el-input>
                    <p class="text-align-center" style="color: red; margin: 50px 0 0px 0px;" v-html="errorMessage"></p>
                    <hr style="margin: 10px 0px 10px 0px;"/>
                    <p class="text-align-center alert-text"> Don't have a license key? <a target="_blank" :href="licenseData.purchase_url">Purchase one here</a></p>
                    <p class="license-empty-notice">Note: <em>Please activate your license key, Pingly Product Enquiry Addons will not work without license activation.</em> </p>
                </div>
            </div>
        </div>
   </div>
</template>

<script type="text/babel">
export default {
    name: 'license-management',
    components: {},
    data() {
        return {
            fetching: false,
            verifying: false,
            licenseData: {},
            licenseKey: '',
            showNewLicenseInput: false,
            errorMessage: '',
            hasPro: !!window.PinglyProductEnquiryAdminVars?.has_pro
        }
    },
    methods: {
        getLicense() {
            this.errorMessage = '';
            this.fetching = true;
            this.$post({
                action: "pingly_admin_license_ajax",
                route: "get_license_status",
                nonce: window.PinglyProductEnquiryAdminVars.nonce,
                // verify: true
            })
                .then((response) => {
                    // console.log(response);
                    this.licenseData = response.data.license_data;
                })
                .fail((error) => {
                    console.log(error);
                    this.$handleError(error);
                })
                .always(() => {
                    this.fetching = false;
                });
        },
        verifyLicense() {
            if (!this.licenseKey) {
                this.$handleError('Please provide a license key');
                this.errorMessage = 'Please provide a license key'
                return;
            }
            this.verifying = true;
            this.errorMessage = '';
            this.$post({
                action: "pingly_admin_license_ajax",
                route: "save_license",
                nonce: window.PinglyProductEnquiryAdminVars.nonce,
                license_key: this.licenseKey
            })
                .then((response) => {
                    this.getLicense();
                    if (response.success === false) {
                        this.errorMessage = response.data.message;
                        this.$handleError(response.data.message);
                        return;
                    }
                    this.$handleSuccess(response.data.message);
                    // setTimeout(() => {
                    //     window.location.reload();
                    // }, 3000);
                })
                .fail((errorResponse) => {
                    let errorMessage = '';
                    if (typeof errorResponse === 'string') {
                        errorMessage = errorResponse;
                    } else if (errorResponse && errorResponse.message) {
                        errorMessage = errorResponse.message;
                    } else {
                        errorMessage = 'Something is wrong!';
                    }
                    if (!errorMessage) {
                        errorMessage = 'Something is wrong!'
                    }

                    this.errorMessage = errorMessage;

                    this.$handleError(errorResponse);
                })
                .always(() => {
                    this.verifying = false;
                });
        },
        deactivateLicense() {
            this.verifying = true;
            this.$del({
                action: "pingly_admin_license_ajax",
                route: "deactivated_license",
                nonce: window.PinglyProductEnquiryAdminVars.nonce
            })
                .then((response) => {
                    this.licenseData = response.data.license_data;
                    this.$handleSuccess(response.data.message);
                    // setTimeout(() => {
                    //     window.location.reload();
                    // }, 3000);
                })
                .fail((error) => {
                    console.log(error);
                    this.$handleError(error);
                })
                .always(() => {
                    this.verifying = false;
                    this.fetching = false;
                });
        }
    },
    mounted() {
        this.getLicense();
    }
}
</script>
