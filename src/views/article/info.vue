<template>
  <div class="detail">
    <a-row>
      <a-col :span="12">
        <div class="tag">
          <a-space>
            <span v-for="(item, index) in info?.category" :key="index">
              <a-tag :color="item.color">{{ item.name }}</a-tag>
            </span>
          </a-space>
        </div>
      </a-col>
      <a-col :span="12">
        <a-space size="large" style="float: right; margin-top: 8px;">
          <div>
            <IconThumbUp /> {{ info?.zanCount }}
          </div>
          <div>
            <IconHeart /> {{ info?.collectionCount }}
          </div>
          <div>
            <IconMessage /> {{ info?.commentCount }}
          </div>
          <div>
            <IconEye /> {{ info?.viewCount }}
          </div>
        </a-space>
      </a-col>
    </a-row>
    <a-divider orientation="center" style="border-color: white">
      <a-tag color="arcoblue">作者 {{ info?.author }} 于 {{ info?.time }} - {{ info?.date }} 发布</a-tag>
    </a-divider>
    <div class="cover" :style="{backgroundImage: `url(${info?.cover})`}"></div>
    <a-row>
      <a-col :span="24" class="title">
        {{ info?.title }}
      </a-col>
    </a-row>
    <a-divider orientation="right" style="margin-top: 25px;"></a-divider>
    <div class="content">
      <MdEditor 
        v-model="infoContent"
        :previewTheme="previewTheme"
        :previewOnly="true"
      />
    </div>
    <a-divider />
    <a-row>
      <a-col :span="10">
        <div class="prev-title" v-if="info?.prevArticle?.id">
          <router-link :to="{ name: 'articleInfo', params: { id: info?.prevArticle?.id } }">上一篇: {{ info?.prevArticle.title }}</router-link>
        </div>
      </a-col>
      <a-col :span="10" :offset="4">
        <div class="next-title" v-if="info?.nextArticle?.id">
          <router-link :to="{ name: 'articleInfo', params: { id: info?.nextArticle?.id } }">下一篇: {{ info?.nextArticle.title }}</router-link>
        </div>
      </a-col>
    </a-row>
    <div class="content-from">
      <div><a-alert>文章作者: {{ info?.copyrightAuthor }}</a-alert></div>
      <div><a-alert type="success">文章链接: {{ info?.copyrightLink }}</a-alert></div>
      <div><a-alert type="warning">版权声明: {{ info?.copyrightStatement }}</a-alert></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { IconThumbUp, IconHeart, IconEye, IconMessage } from '@arco-design/web-vue/es/icon'
import { requestArticleInfo } from '@/api/article'
import { ArticleInfo } from '@/types/article';
import { isArray } from '@/utils/is';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const router = useRouter()

const id = ref(0)
const info = ref<ArticleInfo>()
// 预览内容主题: 'default' | 'github' | 'vuepress' | 'mk-cute' | 'smart-blue' | 'cyanosis'
const previewTheme = 'vuepress'
const infoContent = ref('')
onMounted(() => {
  if (isArray(router.currentRoute.value.params.id)) {
    id.value = parseInt(router.currentRoute.value.params.id[0])
  } else {
    id.value = parseInt(router.currentRoute.value.params.id)
  }

  // 请求文章详情数据
  requestArticleInfo(id.value).then(response => {
    info.value = response.data
    infoContent.value = info.value.content
  })
})

watch(router.currentRoute, () => {
  if (router.currentRoute.value.name !== 'articleInfo') {
    return 
  }

  if (isArray(router.currentRoute.value.params.id)) {
    id.value = parseInt(router.currentRoute.value.params.id[0])
  } else {
    id.value = parseInt(router.currentRoute.value.params.id)
  }

  // 请求文章详情数据
  requestArticleInfo(id.value).then(response => {
    info.value = response.data
    infoContent.value = info.value.content
    // 滚到顶部
    window.scrollTo(0, 0)
  })
})
</script>

<style lang="less" scoped>
.detail {
  :deep(.arco-divider-text) {
    margin-top: 11px;
    padding: 0;
  }
  .cover {
    padding: 240px 0;
    margin-top: -20px;
    opacity: 1;
    background-image: url('http://cdn.ls331.com/storage/blogHomeBackgroundImage2021.jpg');
    background-size: cover;
    // background-position: center center;
    border-radius: 3px;
  }
  .title {
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    margin: 30px 0 10px 0;
  }
  .content-from {
    margin-top: 20px;
    div {
      font-size: 14px;
      line-height: 30px;
      margin: 5px 0;
    }
  }
  .content {
    padding: 0;
    line-height: 40px;
  }
  .prev-title {
    text-align: left;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    border-bottom: 1px solid #c9c8c847;
    line-height: 50px;
    padding: 0 16px;
    font-size: 14px;
    a {
      color: transparent;
      background: linear-gradient(to right, #0042ff, #7d00cb, #3d00ff, #291bfd);
      -webkit-background-clip: text;
    }
  }
  .next-title {
    text-align: right;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    border-bottom: 1px solid #c9c8c847;
    line-height: 50px;
    padding: 0 16px;
    font-size: 14px;
    a {
      color: transparent;
      background: linear-gradient(to right, #0042ff, #7d00cb, #3d00ff, #291bfd);
      -webkit-background-clip: text;
    }
  }
}
</style>
