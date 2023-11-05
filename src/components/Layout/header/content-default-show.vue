<template>
  <div class="center-text">
    <div>{{ title }}</div>
    <VueTyped
      :strings="vueTypedOptions.strings"
      :loop="vueTypedOptions.loop"
      :shuffle="vueTypedOptions.shuffle"
      :fade-out="vueTypedOptions.fadeOut"
      :class="vueTypedOptions.className"
      :cursor-end-time="vueTypedOptions.cursorEndTime"
    />
  </div>
</template>

<script setup lang="ts">
  import { VueTyped } from '@/components'
  import { PropType } from 'vue'

  defineProps({
    title: {
      type: String as PropType<string>,
      default: '梦很美 暖心窝'
    }
  })

  // 打字机配置
  const vueTypedOptions = {
    strings: [
      '总有人间一两风，填我十万八千梦',
      '山有木兮木有枝，心悦君兮君不知',
      '人生若只如初见，何事秋风悲画扇',
      '十年生死两茫茫，不思量，自难忘',
      '曾经沧海难为水，除却巫山不是云',
      '玲珑骰子安红豆，入骨相思知不知',
      '宁可枝头抱香死，何曾吹落北风中',
      '人面不知何处去，桃花依旧笑春风'
    ],
    loop: false,
    shuffle: false,
    fadeOut: false,
    className: 'vue-typed-style',
    cursorEndTime: 2500
  }
</script>

<style lang="less" scoped>
  .center-text {
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    text-shadow: 0 0.1875rem 0.3125rem #1c1f21;
    padding: 0 182px;
    letter-spacing: 0.25rem;
  }
  .vue-typed-style {
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
    text-shadow: 0 0.1875rem 0.3125rem #1c1f21;
    padding: 44px 0 44px 567px;
    letter-spacing: 0.25rem;
  }
</style>
