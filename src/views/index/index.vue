<template>
  <a-carousel
    :autoPlay="true"
    animation-name="card"
    show-arrow="never"
    indicator-position="outer"
    :style="{
      width: '100%',
      height: '320px'
    }"
  >
    <a-carousel-item
      v-for="image in images"
      :style="{ width: '60%' }"
      :key="image"
    >
      <img
        :src="image"
        :style="{
          width: '100%'
        }"
      />
    </a-carousel-item>
  </a-carousel>

  <br />
  <div class="article-list">
    <div class="item" v-for="(item, index) in listItem" :key="index">
      <LayoutListItemArticle :list-item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { requestIndexArticleList } from '@/api/article'
  import { LayoutListItemArticle } from '@/components'

  import image1 from '@/assets/image/background.jpg'
  import image2 from '@/assets/image/background_1.webp'

  const images = [image1, image2, image1, image2]

  // 列表数据
  const listItem = ref()
  // 列表数量
  const listCount = ref(0)
  // 分页页码
  const page = 1
  // 分页数量
  const size = 10

  onMounted(() => {
    // 请求文章列表数据
    requestIndexArticleList(page, size).then((response: any) => {
      if (response.data.ok) {
        listItem.value = response.data.data.list
        listCount.value = parseInt(response.data.data.total)
      }
    })
  })
</script>

<style scoped>
  .article-list {
    padding: 20px 16px;
  }

  :deep(.arco-pagination-size-large .arco-pagination-item) {
    border-radius: 20px;
  }
</style>
