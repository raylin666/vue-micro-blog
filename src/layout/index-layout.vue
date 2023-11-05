<template>
  <Particles />
  <LayoutHeader
    :full-screen="true"
    scroll-class="content"
    :background-images="[
      backgroundImage0,
      backgroundImage1,
      backgroundImage2,
      backgroundImage3,
      backgroundImage4
    ]"
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
  import backgroundImage1 from '@/assets/image/background/1.jpeg'
  import backgroundImage2 from '@/assets/image/background/2.jpeg'
  import backgroundImage3 from '@/assets/image/background/3.jpeg'
  import backgroundImage4 from '@/assets/image/background/4.jpeg'
</script>

<style scoped>
  #content {
    background-color: #fafafa;
    padding-top: 40px;
  }
</style>
