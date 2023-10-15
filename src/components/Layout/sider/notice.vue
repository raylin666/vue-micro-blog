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
      <icon-notification size="24" style="float: left" />
      <span>站点公告</span>
    </template>
    <div class="content">
      <br />
      <div>
        <a-alert type="error" :show-icon="false">联系ＱＱ: 1099013371</a-alert>
      </div>
      <div>
        <a-alert type="success" :show-icon="false">联系微信: 1099013371@kaka</a-alert>
      </div>
      <div>
        <a-alert type="warning">加好友备注来意，不备注不加 ~</a-alert>
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
  :deep(.arco-card-body) {
    .content {
      .arco-alert {
        margin-bottom: 20px;
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
