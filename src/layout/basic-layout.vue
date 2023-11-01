<template>
  <LayoutHeader :full-screen="false" scroll-class="content" />

  <div id="content" ref="view-content">
    <a-row>
      <a-col :span="3"></a-col>
      <a-col :span="20">
        <a-row>
          <a-col :span="16">
            <router-view></router-view>
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
  import { LayoutHeader, LayoutSider } from '@/components'
  import backgroundImage from '@/assets/image/background/0.jpeg'

  let idHeader = document.getElementById('header')
  if (idHeader) {
    idHeader.style.backgroundImage = `url(` + backgroundImage + `)`
  }
</script>

<style scoped>
  #header {
    background-image: url('@/assets/image/background/1.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    transition: background-image 2s ease-in-out;
  }

  #content {
    background-color: #fafafa;
    padding-top: 40px;
  }
</style>
