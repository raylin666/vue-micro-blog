<template>
  <Particles />
  <div id="header">
    <HeaderMenu />

    <a-row>
      <a-col :span="8" :offset="8" class="header-content">
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

    <a-row>
      <a-col :span="1" :offset="11" style="padding-left: 40px">
        <div id="scroll-down" @click="goContentView">
          <svg
            class="icon scroll-down-effects"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4245"
            width="50"
            height="50"
          >
            <path
              d="M940.936189 483.222583l-16.813944-16.404622c-23.277146-22.642696-60.989049-22.642696-84.258009 0L511.412622 786.512121 182.958962 466.817961c-23.26896-22.642696-60.980863-22.642696-84.214007 0L81.889055 483.222583c-23.236214 22.64065-23.236214 59.349713 0 81.954547l370.436844 360.591615c0.032746 0.040932 0.067538 0.110517 0.110517 0.152473l16.84669 16.371876c23.234167 22.64065 60.946071 22.64065 84.223217 0l16.84669-16.371876c0.044002-0.040932 0.078795-0.110517 0.110517-0.152473l370.395912-360.591615C964.205149 542.572296 964.205149 505.863233 940.936189 483.222583L940.936189 483.222583z"
              fill="#FFF"
            ></path>
          </svg>
        </div>
      </a-col>
    </a-row>

    <a-row id="content" ref="view-content">
      <a-col :span="3"></a-col>
      <a-col :span="18">
        <a-row>
          <a-col :span="18">
            <a-carousel
              :autoPlay="true"
              animation-name="card"
              show-arrow="never"
              indicator-position="outer"
              :style="{
                width: '100%',
                height: '240px'
              }"
            >
              <a-carousel-item
                v-for="image in images"
                :style="{ width: '60%' }"
                :key="image"
              >
                <img
                  :src="image"
                  :style="{
                    width: '100%'
                  }"
                />
              </a-carousel-item>
            </a-carousel>
          </a-col>

          <a-col :span="6"></a-col>
        </a-row>
      </a-col>
      <a-col :span="3"></a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
  import Particles from '@/components/Particles/index.vue'
  import VueTyped from '@/components/VueTyped/index.vue'
  import HeaderMenu from '@/components/Layout/header-menu.vue'
  import image1 from '@/assets/image/background.jpg'
  import image2 from '@/assets/image/background_1.jpg'

  const title = '梦很美 暖心窝'
  // 打字机配置
  const vueTypedOptions = {
    strings: [
      '🍂 总有人间一两风，填我十万八千梦 🍂',
      '🍂 山有木兮木有枝，心悦君兮君不知 🍂',
      '🍂 人生若只如初见，何事秋风悲画扇 🍂',
      '🍂 十年生死两茫茫，不思量，自难忘 🍂',
      '🍂 曾经沧海难为水，除却巫山不是云 🍂',
      '🍂 玲珑骰子安红豆，入骨相思知不知 🍂',
      '🍂 宁可枝头抱香死，何曾吹落北风中 🍂',
      '🍂 人面不知何处去，桃花依旧笑春风 🍂'
    ],
    loop: false,
    shuffle: false,
    fadeOut: false,
    className: 'vue-typed-style',
    cursorEndTime: 2500
  }

  // 点击滚动至内容栏
  const goContentView = function () {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })
  }

  const images = [image1, image2, image1, image2]
</script>

<style scoped>
  #header {
    background: url('@/assets/image/background.jpg') center no-repeat;
    background-size: cover;
    height: 100vh;
  }
  #header .header-content {
    padding-left: 6px;
    padding-top: 340px;
    height: 98vh;
  }
  #header .header-content .center-text {
    font-size: 2.2rem;
    font-weight: 700;
    color: #fff;
    text-align: center;
    text-shadow: 0 0.1875rem 0.3125rem #1c1f21;
    padding: 0 56px;
    letter-spacing: 0.25rem;
  }
  .vue-typed-style {
    font-size: 1.2rem;
    font-weight: 400;
    color: #fff;
    text-align: center;
    text-shadow: 0 0.1875rem 0.3125rem #1c1f21;
    padding: 40px 4px;
    letter-spacing: 0.25rem;
  }
  #scroll-down {
    position: absolute;
    z-index: 10;
    bottom: 8vh;
    cursor: pointer;
  }
  #scroll-down .scroll-down-effects {
    position: relative;
    width: 100%;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.15);
    font-size: 30px;
    line-height: 1.5;
    -webkit-animation: scroll-down-effect 1.5s alternate infinite
      cubic-bezier(0.2, 0.65, 0.6, 1);
    -moz-animation: scroll-down-effect 1.5s alternate infinite
      cubic-bezier(0.2, 0.65, 0.6, 1);
    -o-animation: scroll-down-effect 1.5s alternate infinite
      cubic-bezier(0.2, 0.65, 0.6, 1);
    -ms-animation: scroll-down-effect 1.5s alternate infinite
      cubic-bezier(0.2, 0.65, 0.6, 1);
    animation: scroll-down-effect 1.5s alternate infinite
      cubic-bezier(0.2, 0.65, 0.6, 1);
  }

  @keyframes scroll-down-effect {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(32px);
    }
  }
</style>
