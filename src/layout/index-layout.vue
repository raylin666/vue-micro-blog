<template>
  <LayoutHeader :full-screen="true" scroll-class="content" />

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
  import { ref, onMounted } from 'vue'
  import { LayoutHeader, LayoutSider } from '@/components'
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

  onMounted(() => {
    setInterval(() => {
      currentBgIndex.value = (currentBgIndex.value + 1) % bgImages.length
      let idHeader = document.getElementById('header')
      if (idHeader) {
        idHeader.style.backgroundImage = `url(` + currentBgImage() + `)`
      }
    }, 5000)
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
  #content {
    background-color: #fafafa;
    padding-top: 40px;
  }
</style>
