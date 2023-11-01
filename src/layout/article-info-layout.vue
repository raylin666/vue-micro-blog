<template>
  <Particles />
  <div id="header">
    <LayoutHeaderMenu />

    <a-row>
      <a-col :span="24" class="header-content">
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
      </a-col>
    </a-row>
  </div>

  <div id="content" ref="view-content">
    <a-row>
      <a-col :span="3"></a-col>
      <a-col :span="20">
        <a-row>
          <a-col :span="16">
            <router-view></router-view>
          </a-col>

          <a-col :span="6">
            <LayoutSider />
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="3"></a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, watch } from 'vue'
  import {
    LayoutHeaderMenu,
    LayoutSider,
    Particles,
    VueTyped
  } from '@/components'
  import { articleInfoStore } from '@/store'

  const infoStore = articleInfoStore()

  const title = ref('')
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

  onMounted(() => {
    const backgroundImage =
      'https://p8.qhimg.com/bdr/__85/t01eb86d36c1180054b.jpg'
    let idHeader = document.getElementById('header')
    if (idHeader) {
      idHeader.style.backgroundImage = `url(` + backgroundImage + `)`
    }
  })

  watch(
    () => infoStore.getInfo(),
    info => {
      title.value = info?.title || ''
    }
  )
</script>

<style scoped>
  #header {
    background-image: url('@/assets/image/background/1.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 50vh;
    transition: background-image 2s ease-in-out;
  }
  #header .header-content {
    padding-top: 15vh;
    height: 43vh;
    box-shadow: 0 100px 100px #ebfdfb;
  }
  #header .header-content .center-text {
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

  #content {
    background-color: #fafafa;
    padding-top: 40px;
  }
</style>
