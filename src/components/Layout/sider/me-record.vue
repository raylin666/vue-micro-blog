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
      <span>时间记录</span>
    </template>
    <div class="content">
      <div class="domain">
        本站已运行 <span style="color: #54dc63; font-weight: 720">2274</span> 天
        <a-progress
          :color="{
            '0%': '#44ff00',
            '100%': '#29baff'
          }"
          status="normal"
          size="large"
          :percent="0.6"
        />
      </div>
      <div class="today">
        今日已经过去
        <span style="color: rgb(244 48 48); font-weight: 720">21</span> 小时
        <a-progress
          :color="{
            '0%': 'rgb(244 48 48)',
            '100%': 'rgb(255 253 41)'
          }"
          status="normal"
          size="large"
          :percent="0.7"
        />
      </div>
      <div class="week">
        这周已经过去 <span style="color: #bb2beb; font-weight: 720">6</span> 天
        <a-progress
          :color="{
            '0%': '#ff44f1',
            '100%': '#ffcb97'
          }"
          status="normal"
          size="large"
          :percent="0.3"
        />
      </div>
      <div class="month">
        本月已经过去 <span style="color: #f6671f; font-weight: 720">18</span> 天
        <a-progress
          :color="{
            '0%': 'rgb(255 150 68)',
            '100%': 'rgb(239 42 42)'
          }"
          status="normal"
          size="large"
          :percent="0.5"
        />
      </div>
      <div class="year">
        今年已经过去
        <span style="color: rgb(66 52 243); font-weight: 720">187</span> 天
        <a-progress
          :color="{
            '0%': 'rgb(66 52 243)',
            '100%': 'rgb(83 255 225)'
          }"
          status="normal"
          size="large"
          :percent="0.6"
        />
      </div>
    </div>
  </a-card>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
  :deep(.arco-card-body) {
    .content {
      font-size: 16px;
      letter-spacing: 3px;
      padding: 0 10px;
      .domain,
      .today,
      .week,
      .month,
      .year {
        .arco-progress {
          margin: 10px 0 20px 0;
        }
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
