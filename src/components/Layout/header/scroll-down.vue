<template>
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
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, PropType } from 'vue'

  const props = defineProps({
    scrollClass: {
      type: String as PropType<string>,
      default: 'content'
    }
  })

  // 点击滚动至内容栏
  const goContentView = function () {
    document
      .getElementById(props.scrollClass)
      ?.scrollIntoView({ behavior: 'smooth' })
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
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll, true)
  })
</script>

<style scoped>
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
</style>
