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
      <icon-clock-circle size="24" style="float: left" />
      <span>时间记录</span>
    </template>
    <div class="content">
      <div class="today">
        今日已过去小时数
        <a-tag style="float: right" color="rgb(244 48 48)">21</a-tag>
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
      <div class="domain">
        本站已运行总天数
        <a-tag style="float: right" color="#54dc63">2274</a-tag>
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
      <div class="week">
        这周已过去总天数 <a-tag style="float: right" color="#bb2beb">6</a-tag>
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
        本月已过去总天数 <a-tag style="float: right" color="#f6671f">18</a-tag>
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
        今年已过去总天数
        <a-tag style="float: right" color="rgb(66 52 243)">187</a-tag>
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
