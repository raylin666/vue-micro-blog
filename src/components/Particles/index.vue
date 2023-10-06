<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="options"
  />
</template>

<script setup lang="ts">
  import { PropType } from 'vue'
  import { loadFull } from 'tsparticles'
  import type { Engine } from 'tsparticles-engine'
  import particlesHomePage from './config/home-page'

  // 初始化动效
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
  }

  // 动效加载
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const particlesLoaded = async (_container: any) => {}

  defineProps({
    options: {
      type: Object as PropType<object>,
      default() {
        return particlesHomePage
      }
    }
  })
</script>

<style scoped></style>
