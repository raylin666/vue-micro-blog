<template>
  <LayoutSiderMe />
  <br />
  <LayoutSiderNotice />
  <br />
  <LayoutSiderMeRecord />
  <br />
  <LayoutSiderHotArticle />
  <br />
  <LayoutSiderStory />
</template>

<script setup lang="ts">
  import {
    LayoutSiderMe,
    LayoutSiderNotice,
    LayoutSiderMeRecord,
    LayoutSiderHotArticle,
    LayoutSiderStory
  } from '@/components'
</script>

<style scoped>
  #header-menu {
    /* background-image: url('@/assets/image/top_bg_image.png'); */
    /* opacity: 1; */
    /* box-shadow: 0 0 100px rgb(244, 244, 20); */
    height: 7vh;
  }
</style>
