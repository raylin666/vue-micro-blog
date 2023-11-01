<template>
  <Particles />
  <div id="header">
    <LayoutHeaderMenu />

    <LayoutHeaderContent :full-screen="fullScreen" />

    <LayoutHeaderScrollDown :scroll-class="scrollClass" />
  </div>
</template>

<script setup lang="ts">
  import {
    Particles,
    LayoutHeaderMenu,
    LayoutHeaderContent,
    LayoutHeaderScrollDown
  } from '@/components'
  import { PropType } from 'vue'

  defineProps({
    fullScreen: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    scrollClass: {
      type: String as PropType<string>,
      default: 'content'
    }
  })
</script>

<style scoped>
  #header {
    background-image: url('@/assets/image/background/0.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    transition: background-image 2s ease-in-out;
  }
</style>
