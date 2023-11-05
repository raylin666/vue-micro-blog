<template>
  <div class="center-text">
    <div>{{ title }}</div>
    3333
  </div>
</template>

<script setup lang="ts">
  import { ref, watch, PropType } from 'vue'
  import { articleInfoStore } from '@/store'
  import { scrollToById } from '@/utils/scroll';

  const title = ref('')
  const infoStore = articleInfoStore()

  const props = defineProps({
    headerClass: {
      type: String as PropType<string>,
      default: 'header'
    }
  })

  watch(
    () => infoStore.getInfo(),
    info => {
      title.value = info?.title || ''
      // 页面滚动至某个ID属性位置
      scrollToById(props.headerClass)
    }
  )
</script>

<style lang="less" scoped>
  .center-text {
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    text-shadow: 0 0.1875rem 0.3125rem #1c1f21;
    padding: 0 182px;
    letter-spacing: 0.25rem;
  }
  .vue-typed-style {
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
    text-shadow: 0 0.1875rem 0.3125rem #1c1f21;
    padding: 44px 0 44px 567px;
    letter-spacing: 0.25rem;
  }
</style>
