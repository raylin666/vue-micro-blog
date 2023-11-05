<template>
  <Particles />
  <LayoutHeader
    :full-screen="false"
    scroll-class="content"
    :background-images="[backgroundImage0]"
  />

  <div id="content" ref="view-content">
    <a-row>
      <a-col :span="3"></a-col>
      <a-col :span="20">
        <a-row>
          <a-col :span="16">
            <router-view name="default"></router-view>
          </a-col>

          <a-col :span="6">
            <LayoutSider />
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="3"></a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
  import { Particles, LayoutHeader, LayoutSider } from '@/components'
  import backgroundImage0 from '@/assets/image/background/0.jpeg'
</script>

<style scoped>
  #content {
    background-color: #fafafa;
    padding-top: 40px;
  }
</style>
