<template>
  <div class="pingly-settings-wrapper" v-loading="loading" element-loading-spinner="el-icon-loading">
    <div class="pingly-settings-content">
      <template>
        <div class="pingly-header">
          <el-input
            placeholder="Search"
            v-model="search"
            @change="searchHandler"
            clearable>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <!-- {{ tableData }} -->
        <table-selections
          @reloadData="getPinglyProductEnquiry"
          :selections="multipleSelection"
        />
          <el-table
            ref="multipleTable"
            :data="tableData"
            style="width: 100%"
            border
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection">
            </el-table-column>
            <el-table-column
              label="Name"
              width="150">
              <template slot-scope="scope">{{ scope.row.name }}</template>
            </el-table-column>
            <el-table-column
              label="Email"
              width="180">
              <template slot-scope="scope">{{ scope.row.email }}</template>
            </el-table-column>
            <el-table-column
              label="Phone Number"
              width="150">
              <template slot-scope="scope">{{ scope.row.phone_number }}</template>
            </el-table-column>
            <el-table-column
              label="Enquiry"
              width="250"
              >
              <template slot-scope="scope">{{ textTrim(scope.row.enquiry) }}</template>
            </el-table-column>
            <el-table-column 
              label="Product Title"
              width="150">
              <template slot-scope="scope">
                 <span v-html="getProductHtml(scope.row)"></span>
              </template>
            </el-table-column>
            <el-table-column 
              label="Type"
              width="150">
              <template slot-scope="scope">{{ textTrim(scope.row.type) }}</template>
            </el-table-column>
            <el-table-column 
              label="Status"
              width="150">
              <template slot-scope="scope">{{ textTrim(scope.row.status) }}</template>
            </el-table-column>
             <el-table-column 
              label="subscribe"
              width="150">
              <template slot-scope="scope">{{ textTrim(scope.row.subscribe) }}</template>
            </el-table-column>
            <el-table-column
              label="Date"
              width="150">
              <template slot-scope="scope">
                {{
                  new Date(scope.row.created_at).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                  })
                }}
              </template>
            </el-table-column>
            <el-table-column
              label="Actions"
              width="150">
              <template slot-scope="scope">
                <el-button class="pingly-btn" type="primary" icon="el-icon-view" circle @click="confirmView(scope.row.id)"></el-button>
                <el-button 
                  class="pingly-btn"
                  type="danger" 
                  icon="el-icon-delete" 
                  @click="handleDeleteModal(scope.row.id)"
                  circle>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        <table-selections
            @reloadData="getPinglyProductEnquiry"
            :selections="multipleSelection"
        />
        <div class="pingly_pagination_wrap">
            <el-pagination
                :hide-on-single-page="false"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="paginate.current_page"
                :page-sizes="[5, 10, 20, 50, 100]"
                :page-size="paginate.per_page"
                layout="total, sizes, prev, pager, next"
                :total="paginate.total">
            </el-pagination>
        </div>
        <!-- Confirmation Dialog -->
        <el-dialog
          :visible.sync="showDisableDialog"
          width="45%"
          :close-on-click-modal="true"
          :close-on-press-escape="true"
          :show-close="true"
          custom-class="pingly-module-disable-dialog"
          center>
          <div class="pingly-module-dialog-content">
            <div class="dialog-text">
              <h3>Product Enquiry Details</h3>
              <table class="pingly-table" v-loading="loading" element-loading-spinner="el-icon-loading">
                <tbody>
                  <tr v-if="detail.name">
                    <td class="label">Name</td>
                    <td class="value">{{ detail.name }}</td>
                  </tr>

                  <tr v-if="detail.email">
                    <td class="label">Email</td>
                    <td class="value">{{ detail.email }}</td>
                  </tr>

                  <tr v-if="detail.enquiry">
                    <td class="label">Enquiry</td>
                    <td class="value">{{ detail.enquiry }}</td>
                  </tr>

                  <tr v-if="detail.phone_number">
                    <td class="label">Phone Number</td>
                    <td class="value">{{ detail.phone_number }}</td>
                  </tr>

                  <tr v-if="detail.type">
                    <td class="label">Type</td>
                    <td class="value">{{ detail.type }}</td>
                  </tr>

                  <tr v-if="detail.status">
                    <td class="label">Status</td>
                    <td class="value">{{ detail.status }}</td>
                  </tr>

                  <tr v-if="detail.subscribe">
                    <td class="label">Subscribe</td>
                    <td class="value">{{ detail.subscribe }}</td>
                  </tr>

                  <tr v-if="hasProduct(detail)">
                    <td class="label">Product Title</td>
                    <td class="value">
                      <span v-html="getProductHtml(detail)"></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </el-dialog>
      </template>
    </div>
  </div>
</template>

<script type="text/babel">
// import { Loading } from 'element-ui';
import TableSelections from './_TableSelectionHandler.vue';
  export default {
    name: 'pingly-product-enquiry-data',
    props: ['settings', 'fetching'],
    components: {
      TableSelections,
    },
    data() {
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
      }
    },
    methods: {
      hasProduct(row) {
        if (!row || !row.settings) return false;

        try {
          const obj = JSON.parse(row.settings);
          return !!obj.title && !!obj.product_url;
        } catch (e) {
          return false;
        }
      },

      getProductHtml(row) {
        if (!row || !row.settings) return '';
        try {
          const obj = JSON.parse(row.settings);
          return `
            <a href="${obj.product_url}"
              target="_blank"
              class="pingly-product-title">
              ${this.textTrim(obj.title)}
            </a>`;
        } catch (e) {
          return '';
        }
      },

      textTrim(val) {
        if (!val) return '';
        const words = val.split(' ');
        return words.slice(0, 10).join(' ') + (words.length > 10 ? '...' : '');
      },
      
      handleSizeChange(val) {
          localStorage.setItem('PinglyProductEnquiryPerPage', val);
          this.paginate.per_page = val;
          this.getPinglyProductEnquiry();
      },
      handleCurrentChange(val) {
          localStorage.setItem('PinglyProductEnquiryDetailsCurrentPage', val);
          this.paginate.current_page = val
          this.getPinglyProductEnquiry();
      },
      confirmView(id) {
        this.showDisableDialog = true;
        this.loading = true;
        this.$post({
          action: "pingly_admin_ajax",
          route: "get_pingly_detail_view",
          detail_id: id,
          nonce: window.PinglyProductEnquiryAdminVars.nonce,
        })
            .then((response) => {
              this.detail = response.data.detail;
            })
            .fail((error) => {
              this.$handleError(error);
            })
            .always(() => {
              setTimeout(() => { this.loading = false; }, 500);
            });
      },
      cancelDisable() {
        this.showDisableDialog = false;
      },
      confirmDisable() {
        this.showDisableDialog = false;
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      searchHandler(val) {
        this.search = val;
        this.getPinglyProductEnquiry();
      },

      getPinglyProductEnquiry() {
        this.loading = true;
        this.$post({
          action: "pingly_admin_ajax",
          route: "get_pingly_details",
          search: this.search,
          current_page: this.paginate.current_page,
          per_page: this.paginate.per_page,
          nonce: window.PinglyProductEnquiryAdminVars.nonce,
        })
            .then((response) => {
              this.tableData = response.data.data.details;
              // console.log(this.tableData);
              this.paginate.total = response.data.data.total;
              this.paginate.current_page = response.data.data.current_page;
              this.paginate.last_page = response.data.data.last_page;
            })
            .fail((error) => {
              this.$handleError(error);
            })
            .always(() => {
              setTimeout(() => { this.loading = false; }, 500);
            });
      },

      handleDeleteModal(id) {
        this.$confirm("Do you want delete this enquire us permanently", "Warning", {
          confirmButtonText: "Delete",
          cancelButtonText: "Cancel",
          type: "warning",
        })
          .then(() => {
            this.performAction("delete", id);
          })
          .catch(() => {
            this.$message({
              type: "info",
              offset: 90,
              showClose: true,
              message: "Delete canceled",
            });
          });
      },
      performAction(type, id) {
        this.$post({
          action: "pingly_admin_ajax",
          route: "maybe_delete_details",
          details_ids: [id],
          action_type: type,
          nonce: window.PinglyProductEnquiryAdminVars.nonce,
        })
          .then((response) => {
            this.$handleSuccess(response.data.message);
            this.getPinglyProductEnquiry();
          })
          .fail((error) => {
            this.$handleError(error);
          })
          .always(() => {});
      },
    },
    mounted() {
      this.getPinglyProductEnquiry();
    }
  }
</script>