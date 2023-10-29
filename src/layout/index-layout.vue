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

    <a-row>
      <a-col :span="24" style="padding-left: 48.3vw">
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
  import { ref, onMounted, onUnmounted } from 'vue'
  import {
    LayoutHeaderMenu,
    LayoutSider,
    Particles,
    VueTyped
  } from '@/components'
  import backgroundImage from '@/assets/image/background/0.jpeg'
  import backgroundImage1 from '@/assets/image/background/1.jpeg'
  import backgroundImage2 from '@/assets/image/background/2.jpeg'
  import backgroundImage3 from '@/assets/image/background/3.jpeg'
  import backgroundImage4 from '@/assets/image/background/4.jpeg'

  const currentBgIndex = ref(0)
  const bgImages = [
    backgroundImage,
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4
  ]
  const currentBgImage = function () {
    return bgImages[currentBgIndex.value]
  }

  const title = '梦很美 暖心窝'
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

  // 点击滚动至内容栏
  const goContentView = function () {
    document.getElementById('content')?.scrollIntoView({ behavior: 'smooth' })
  }

  // 监听页面滚动事件
  const onScroll = function (e: any) {
    let scrollDown = document.getElementById('scroll-down')
    if (e.target.scrollTop > 60 && scrollDown) {
      scrollDown.getElementsByClassName(
        'scroll-down-effects'
      )[0].style.display = 'none'
    } else if (scrollDown) {
      scrollDown.getElementsByClassName(
        'scroll-down-effects'
      )[0].style.display = 'block'
    }
  }

  onMounted(() => {
    // 监听页面滚动事件
    window.addEventListener('scroll', onScroll, true)

    setInterval(() => {
      currentBgIndex.value = (currentBgIndex.value + 1) % bgImages.length
      let idHeader = document.getElementById('header')
      if (idHeader) {
        idHeader.style.backgroundImage = `url(` + currentBgImage() + `)`
      }
    }, 5000)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll, true)
  })
</script>

<style scoped>
  #header {
    background-image: url('@/assets/image/background/0.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    transition: background-image 2s ease-in-out;
  }
  #header .header-content {
    padding-top: 38vh;
    height: 93vh;
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
  #scroll-down {
    position: absolute;
    z-index: 10;
    bottom: 8vh;
    cursor: pointer;
  }
  #scroll-down .scroll-down-effects {
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
      transform: translateY(3.2rem);
    }
  }

  #content {
    background-color: #fafafa;
    padding-top: 40px;
  }
</style>
