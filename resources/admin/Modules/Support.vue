<template>
  <div class="pingly-support-wrapper pingly-card">
    <div class="pingly_header">
      <div class="pingly_title pingly_header_title">
        <h3 style="margin: 0px;"> Support </h3> 
      </div>
    </div>

    <div class="pingly_support_block_box">
      <div class="pingly_support_block text-center">
        <img :src="`${imagesUrl}/support.png`">
        <h3>Need And Expert Support?</h3> 
        <p>Our EXPERTS would like to assist you for your query and any customization.</p> 
        <p>
            <a href="https://wpcreativeidea.com/support-ticket/" target="_blank" class="button button-primary">
            Contact Support
          </a>
        </p>
      </div>
      <div class="pingly_support_block text-center">
        <img :src="`${imagesUrl}/community.png`">
        <h3>Join our community</h3> 
        <p>We have a strong community where we discuss ideas and help each other.</p> 
        <p>
            <a href="https://wpcreativeidea.com/" target="_blank" class="button button-primary">
            Join Community
          </a>
        </p>
      </div>
      <div class="pingly_support_block text-center">
        <img :src="`${imagesUrl}/love.png`">
        <h3>Love this Plugin?</h3> 
        <p>Please write a review the plugin. We appreciate it!</p> 
        <p>
            <a href="https://wpcreativeidea.com/" target="_blank" class="button button-primary">
           Write Review
          </a>
        </p>
      </div>
      
    </div>
  </div>
</template>

<script type="text/babel">
export default {
    name: 'support',
    components: {},
    data() {
        return {
          imagesUrl: window.PinglyProductEnquiryAdminVars.images_url,
        }
    },
  }
</script>