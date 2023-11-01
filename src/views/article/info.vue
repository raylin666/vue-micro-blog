<template>
  <div id="articleContent">
    <EditorPreview v-model="content" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { EditorPreview } from '@/components'
  import { useRouter } from 'vue-router'
  import { isString } from '@/utils/is'
  import { articleInfoStore } from '@/store'

  const router = useRouter()
  const infoStore = articleInfoStore()

  const id = ref(0)
  const content = ref('')
  onMounted(() => {
    if (isString(router.currentRoute.value.params.id)) {
      let parseIntId = parseInt(router.currentRoute.value.params.id)
      if (parseIntId > 0) {
        id.value = parseIntId
      }
    }

    // id.value = 0
    if (id.value < 1) {
      router.push({ name: 'index' })
      return
    }

    // 请求文章详情数据
    infoStore.info(id.value)
    if (infoStore.getInfo() == null) {
      router.push({ name: 'index' })
      return
    }
  })
</script>

<style scoped>
  #articleContent {
    padding: 0 20px;
  }
</style>
