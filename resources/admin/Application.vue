<template>
  <div class="wpcipe-app-wrapper">
    <el-row>
      <el-col :span="4">
        <Navigation/>
      </el-col>
      <el-col :span="20">
        <div class="wpcipe-header"></div>
        <div class="wpcipe-body">
          <router-view :key="$route.fullPath"></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/babel">
import Clipboard from 'clipboard';
import Navigation from './Layouts/Navigation.vue';

export default {
  name: 'application',
  components: {
    Navigation,
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
    // this.getSettings();
    var clipboard = new Clipboard('.copy');
    clipboard.on('success', (e) => {
      this.$message({
        message: 'Copied to Clipboard!',
        type: 'success',
        offset: 50
      });
    });
  }
}
</script>
