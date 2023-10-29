<template>
  <a-carousel
    :autoPlay="true"
    animation-name="card"
    show-arrow="never"
    indicator-position="outer"
    indicator-type="line"
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
      <a href="#">
        <img
          :src="image"
          :style="{
            width: '100%'
          }"
        />
      </a>
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

  const images = [
    'https://p8.qhimg.com/bdr/__85/t01eb86d36c1180054b.jpg',
    'https://p8.qhimg.com/bdr/__85/t013d9edca1c249aa2f.jpg',
    'https://p9.qhimg.com/bdr/__85/t0169d6001972310e45.jpg',
    'https://p7.qhimg.com/bdr/__85/t0186e37a47bab90cd1.jpg?key=708072'
  ]

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
