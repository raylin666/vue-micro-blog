<template>
  <a-row>
    <a-col :span="24" id="header-content">
      <div v-if="router.isArticleInfoRouter()">
        <LayoutHeaderContentArticleInfoShow :header-class="headerClass" />
      </div>
      <div v-else>
        <LayoutHeaderContentDefaultShow />
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
  import {
    LayoutHeaderContentDefaultShow,
    LayoutHeaderContentArticleInfoShow
  } from '@/components'
  import { onMounted, PropType } from 'vue'
  import useRouter from '@/hooks/router'

  const props = defineProps({
    fullScreen: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    headerClass: {
      type: String as PropType<string>,
      default: 'header'
    }
  })

  const router = useRouter()
  onMounted(() => {
    const idHeader = document.getElementById(props.headerClass)
    if (idHeader) {
      if (props.fullScreen) {
        idHeader.style.height = '100vh'
      } else {
        idHeader.style.height = '50vh'
      }
    }

    const idHeaderContent = document.getElementById('header-content')
    if (idHeaderContent) {
      if (props.fullScreen) {
        idHeaderContent.style.height = '93vh'
        idHeaderContent.style.paddingTop = '38vh'
      } else {
        idHeaderContent.style.height = '43vh'
        idHeaderContent.style.paddingTop = '15vh'
      }
    }
  })
</script>

<style lang="less" scoped>
  #header-content {
    padding-top: 15vh;
    height: 43vh;
    box-shadow: 0 100px 100px #ebfdfb;
  }
</style>
