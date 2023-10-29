<template>
  <a-row
    style="
      border: 1px solid rgb(244, 244, 244);
      border-radius: 6px;
      padding: 10px;
      box-shadow: rgb(244, 244, 244) 0px 3px 5px;
      margin-bottom: 20px;
    "
  >
    <a-col :span="8">
      <a-image class="cover" alt="cover" fit="cover" :src="listItem?.cover" />
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
              <img
                class="avatar"
                alt="avatar"
                fit="cover"
                :src="listItem?.avatar"
              />
            </a-avatar>
            <span class="username">{{ listItem?.author }}</span>
          </a-space>
        </div>
        <div class="tag">
          <a-space>
            <span v-for="(item, index) in listItem?.category" :key="index">
              <a-tag :color="item.color">
                <icon-tag style="color: #ffffff" /> &nbsp;{{ item.name }}</a-tag
              >
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
              <div class="time">{{ listItem?.created_at }}</div>
            </a-col>
            <a-col :span="12">
              <a-space size="large" style="float: right; margin-top: 5px">
                <div>
                  <IconThumbUp class="ac-icon" />
                  <div class="ac-value">{{ listItem?.zan_count }}</div>
                </div>
                <div>
                  <IconHeart class="ac-icon" />
                  <div class="ac-value">{{ listItem?.collection_count }}</div>
                </div>
                <div>
                  <IconMessage class="ac-icon" />
                  <div class="ac-value">{{ listItem?.comment_count }}</div>
                </div>
                <div>
                  <IconEye class="ac-icon" />
                  <div class="ac-value">{{ listItem?.view_count }}</div>
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
  :deep(.arco-image.cover) {
    .arco-image-img {
      width: 100%;
      height: 220px;
    }
  }
  .info {
    padding-left: 20px;
    .title,
    a {
      color: transparent;
      background: linear-gradient(to right, #0d459f, #040101, #0074e7, #000000);
      -webkit-background-clip: text;
      font-size: 24px;
      font-weight: 420;
      height: 40px;
      line-height: 40px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-bottom: 14px;
      cursor: pointer;
    }
    .tag {
      float: right;
      margin-bottom: 16px;
    }
    .desc {
      clear: both;
      font-size: 16px;
      line-height: 28px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      margin-bottom: 18px;
      height: 82px;
      color: #5f5f5f;
    }
    .username {
      font-size: 16px;
      margin-left: -20px;
      color: #5f5f5f;
    }
    .action {
      color: #5f5f5f;
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
