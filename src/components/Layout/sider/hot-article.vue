<template>
  <a-card
    :bordered="false"
    :style="{
      width: '100%',
      border: '1px solid rgb(244 244 244)',
      borderRadius: '6px',
      padding: '1px',
      boxShadow: '0px 3px 5px #f4f4f4'
    }"
  >
    <template #extra>
      <span class="mac"></span>
    </template>
    <template #title>
      <icon-thumb-up size="24" style="float: left" />
      <span>最热文章</span>
    </template>
    <div class="content">
      <div class="item" v-for="(item, index) in props.list" :key="index">
        <a-tag :color="colors[index]">{{ index + 1 }}</a-tag>
        {{ item.title }}
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
  import { NewArticleListItem } from '@/types/article'
  import { PropType } from 'vue'

  const colors = ['#f53f3f', '#eb0aa4', '#ff7d00', '#7816ff', '#00b42a']
  const props = defineProps({
    list: Array as PropType<NewArticleListItem[]>
  })
</script>

<style lang="less" scoped>
  :deep(.arco-card-body) {
    .content {
      font-size: 16px;
      letter-spacing: 3px;
      padding: 0 10px;
      .item {
        font-size: 16px;
        line-height: 28px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
      }
    }
  }
  :deep(.arco-card-header) {
    padding: 30px 20px;
    .arco-card-header-title {
      font-size: 18px;
      font-weight: 400;
      span {
        margin-left: 10px;
        display: block;
        float: left;
        padding-top: 3px;
      }
    }
  }
  :deep(.arco-card-header-extra) {
    .mac {
      content: ' ';
      position: absolute;
      -webkit-border-radius: 50%;
      border-radius: 50%;
      background: #fc625d;
      width: 16px;
      height: 16px;
      -webkit-box-shadow:
        30px 0 #fdbc40,
        60px 0 #35cd4b;
      box-shadow:
        30px 0 #fdbc40,
        60px 0 #35cd4b;
      float: right;
      right: 80px;
      top: 24px;
    }
  }
</style>
