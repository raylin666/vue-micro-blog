<template>
  <div id="articleContent">
    <EditorPreview v-model="content" />
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { EditorPreview } from '@/components'
  import { requestArticleInfo } from '@/api/article'
  import { useRouter } from 'vue-router'
  const router = useRouter()

  const content = ref('')
  onMounted(() => {
    const id = 31 // router.params?.id
    if (id <= 1) {
      router.push({ name: 'index' })
      return
    }

    // 请求文章详情数据
    requestArticleInfo(id).then((response: any) => {
      if (response.data.ok) {
        content.value = response.data.content
      } else {
        router.push({ name: 'index' })
        return
      }
    })
  })
</script>

<style scoped>
  #articleContent {
    padding: 0 20px;
  }
</style>
