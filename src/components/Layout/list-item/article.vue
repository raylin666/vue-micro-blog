<template>
  <a-row>
    <a-col :span="8">
      <a-image width="100%" height="180" :src="listItem?.cover" />
    </a-col>
    <a-col :span="16">
      <div class="info">
        <div class="title">
          <a v-on:click="jumpArticleInfo(listItem?.id)">{{
            listItem?.title
          }}</a>
        </div>
        <div style="float: left">
          <a-space size="large">
            <a-avatar :size="20">
              <img alt="avatar" :src="listItem?.avatar" />
            </a-avatar>
            <span class="username"
              ><a-tag color="rgb(251 251 251)">{{
                listItem?.author
              }}</a-tag></span
            >
          </a-space>
        </div>
        <div class="tag">
          <a-space>
            <span v-for="(item, index) in listItem?.category" :key="index">
              <a-tag :color="item.color">{{ item.name }}</a-tag>
            </span>
          </a-space>
        </div>
        <div class="desc">
          {{ listItem?.summary }}
        </div>
        <div class="action">
          <a-row>
            <a-col :span="12">
              <IconClockCircle class="time-icon" />
              <div class="time">{{ listItem?.time }}</div>
            </a-col>
            <a-col :span="12">
              <a-space size="large" style="float: right; margin-top: 5px">
                <div>
                  <IconThumbUp class="ac-icon" />
                  <div class="ac-value">{{ listItem?.zanCount }}</div>
                </div>
                <div>
                  <IconHeart class="ac-icon" />
                  <div class="ac-value">{{ listItem?.collectionCount }}</div>
                </div>
                <div>
                  <IconMessage class="ac-icon" />
                  <div class="ac-value">{{ listItem?.commentCount }}</div>
                </div>
                <div>
                  <IconEye class="ac-icon" />
                  <div class="ac-value">{{ listItem?.viewCount }}</div>
                </div>
              </a-space>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
  import {
    IconThumbUp,
    IconHeart,
    IconEye,
    IconMessage,
    IconClockCircle
  } from '@arco-design/web-vue/es/icon'
  import { ArticleListItem } from '@/types/article'
  import { useRouter } from 'vue-router'
  import { PropType } from 'vue'
  const router = useRouter()

  defineProps({
    listItem: Object as PropType<ArticleListItem>
  })

  function jumpArticleInfo(id: number | undefined) {
    router.push({ name: 'articleInfo', params: { id: id } })
  }
</script>

<style lang="less" scoped>
  .info {
    padding-left: 20px;
    .title,
    a {
      color: transparent;
      background: linear-gradient(to right, #181819, #2a3231, #8210e9, #000000);
      -webkit-background-clip: text;
      font-size: 18px;
      font-weight: 420;
      margin-bottom: 14px;
      cursor: pointer;
    }
    .tag {
      float: right;
      margin-bottom: 14px;
    }
    .desc {
      clear: both;
      font-size: 14px;
      line-height: 24px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      margin-bottom: 12px;
      height: 71px;
    }
    .action {
      color: #b2b2b2;
      .time-icon {
        font-size: 20px;
        margin-top: 6px;
        float: left;
      }
      .time {
        float: left;
        margin-top: 8px;
        margin-left: 5px;
      }
      .ac-icon {
        font-size: 20px;
        float: left;
      }
      .ac-value {
        float: left;
        margin-top: 2px;
        margin-left: 4px;
      }
    }
  }
</style>
