<template>
  <div class="pingly-documentation-wrapper pingly-card">
    <!-- Header -->
    <div class="pingly_header">
      <div class="pingly_title pingly_header_title">
        <h3>Documentation</h3>
      </div>
    </div>

    <el-row :gutter="20">
      <!-- Video Section -->
      <el-col :span="24">
        <div class="dashboard-document-youtube">
          <iframe width="100%" height="550" src="https://www.youtube.com/embed/jhPquLtObTc?si=VH3SLsDmzl_hS4gB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <p class="pingly-subtitle">
          Learn how to set up and use this plugin step by step.
        </p>
      </el-col>

      <!-- Documentation Content -->
      <el-col :span="24">
        <div class="pingly-doc-content">
          <h4>🚀 Getting Started</h4>
          <ul class="pingly-doc-list">
            <li>Install and activate the plugin</li>
            <li>Go to <strong>Product Enquiry Tab Settings</strong></li>
            <li>Configure required options</li>
            <li>Save Settings and Save Styles</li>
          </ul>

          <h4>🔗 Helpful Links</h4>
          <ul class="pingly-doc-links">
            <li>
              <a href="https://wpcreativeidea.com/" target="_blank">
                📄 Full Documentation
              </a>
            </li>
            <li>
              <a href="https://wpcreativeidea.com/support" target="_blank">
                🛠 Support Center
              </a>
            </li>
            <li>
              <a href="https://wpcreativeidea.com/" target="_blank">
                ❓ FAQ
              </a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
