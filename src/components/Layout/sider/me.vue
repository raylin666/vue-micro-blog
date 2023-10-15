<template>
  <a-card
    :bordered="false"
    :style="{
      width: '100%',
      height: '360px',
      border: '1px solid rgb(244 244 244)',
      borderRadius: '6px',
      padding: '1px',
      boxShadow: '0px 3px 5px #f4f4f4'
    }"
  >
    <div class="me-main">
      <div class="avatar">
        <a-avatar :size="80" :style="{ padding: '3px', marginLeft: '38%' }">
          <img alt="avatar" fit="cover" :src="image2" />
        </a-avatar>
      </div>
      <div class="username">
        <a-tag
          size="large"
          color="green"
          style="font-size: 14px; padding: 0 10px"
          >林 山</a-tag
        >
      </div>
      <div class="desc"> 心中无女人，代码自然神 </div>
      <div class="main">
        <a-row>
          <a-col :span="8">
            <div class="item">
              <div class="num"> 11 </div>
              <div class="name"> 文章数 </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="item">
              <div class="num"> 19 </div>
              <div class="name"> 标签数 </div>
            </div>
          </a-col>
          <a-col :span="8">
            <div class="item">
              <div class="num"> 1371 </div>
              <div class="name"> 评论数 </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts">
  import image2 from '@/assets/image/background_1.jpg'
</script>

<style lang="less" scoped>
  :deep(.arco-card-body) {
    background: url('@/assets/image/sider_author_image.jpg') center no-repeat;
    background-size: cover;
    height: 120px;

    .me-main {
      width: 100%;
      margin-top: 86px;
      .username {
        padding: 20px 0;
        text-align: center;
        font-size: 20px;
        font-weight: 720;
        color: #ccc;
      }
      .desc {
        text-align: center;
        font-size: 18px;
        padding-top: 10px;
        padding-bottom: 30px;
      }
      .main {
        .item {
          text-align: center;
          .num {
            font-size: 30px;
          }
          .name {
            margin-top: 10px;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>
