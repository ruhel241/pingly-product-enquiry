<template>
    <div v-if="selections.length" class="infos_selection_handler">
        <el-button-group>
            <el-button @click="handleDeleteModal()" size="mini" type="danger">Delete Selected</el-button>
        </el-button-group>
    </div>
</template>

<script type="text/babel">
    import each from 'lodash/each';
    export default {
        name: 'infos_selection_handler',
        props: ['selections'],
        data() {
            return {}
        },
        methods: {
            handleDeleteModal() {
                this.$confirm('Do you want delete this link permanently', 'Warning', {
                    confirmButtonText: 'Delete',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    this.performAction('delete');
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        offset: 50,
                        showClose: true,
                        message: 'Delete canceled'
                    });
                });
            },
            
            performAction(type) {
                let selectedIds = [];
                each(this.selections, (selection) => {
                    selectedIds.push(selection.id);
                });
                this.$post({
                    action: 'pingly_admin_ajax',
                    route: 'maybe_delete_details',
                    details_ids: selectedIds,
                    action_type: type,
                    nonce: window.PinglyProductEnquiryAdminVars.nonce
                })
                    .then(response => {
                        this.$notify({
                            title: 'Sucess',
                            message: response.data.message,
                            type: 'success'
                        });
                        this.$emit('reloadData');
                    })
                    .fail(error => {
                        this.$handleError(error);
                    })
                    .always(() => {
                    });
            },
        }
    }
</script>
