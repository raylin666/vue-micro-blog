<template>
  <div id="header">
    <LayoutHeaderMenu />

    <LayoutHeaderContent :full-screen="fullScreen" header-class="header" />

    <div v-if="fullScreen">
      <LayoutHeaderScrollDown :scroll-class="scrollClass" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    LayoutHeaderMenu,
    LayoutHeaderContent,
    LayoutHeaderScrollDown
  } from '@/components'
  import useRouter from '@/hooks/router'
  import { ref, PropType, onMounted, onUnmounted, watch } from 'vue'
  import { articleInfoStore } from '@/store'
  import defaultBackgroundImage from '@/assets/image/background/0.jpeg'

  const props = defineProps({
    fullScreen: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    scrollClass: {
      type: String as PropType<string>,
      default: 'content'
    },
    backgroundImages: {
      type: Array as PropType<string[]>,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [defaultBackgroundImage]
    }
  })

  const router = useRouter()
  const infoStore = articleInfoStore()

  // eslint-disable-next-line vue/no-setup-props-destructure
  const backgroundImages = ref(props.backgroundImages)

  const currentBgIndex = ref(0)
  const currentBgImage = function () {
    return backgroundImages.value[currentBgIndex.value]
  }

  const intervalId = ref()
  onMounted(() => {
    let idHeader = document.getElementById('header')
    if (idHeader) {
      idHeader.style.backgroundImage = `url(` + currentBgImage() + `)`

      intervalId.value = setInterval(() => {
        currentBgIndex.value =
          (currentBgIndex.value + 1) % backgroundImages.value.length
        if (idHeader) {
          idHeader.style.backgroundImage = `url(` + currentBgImage() + `)`
        }
      }, 5000)
    }
  })

  onUnmounted(() => {
    clearInterval(intervalId.value)
  })

  watch(
    () => infoStore.getInfo(),
    info => {
      if (router.isArticleInfoRouter()) {
        // 文章详情页, 使用文章封面图
        if (info?.cover) {
          backgroundImages.value = [info?.cover]
        }
      }
    }
  )
</script>

<style scoped>
  #header {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    transition: background-image 2s ease-in-out;
  }
</style>
