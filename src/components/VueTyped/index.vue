<template>
  <vuetyped
    :strings="strings"
    :loop="loop"
    :loopCount="loopCount"
    :showCursor="showCursor"
    :smart-backspace="smartBackspace"
    :typeSpeed="typeSpeed"
    :startDelay="startDelay"
    :shuffle="shuffle"
    :fadeOut="fadeOut"
  >
    <div :class="className"></div>
    <div style="display: none" :cursorEndTime="cursorEndTime"></div>
  </vuetyped>
</template>

<script setup lang="ts">
  import { PropType } from 'vue'

  const props = defineProps({
    // 输入的字符串
    strings: {
      type: Array as PropType<string[]>,
      default() {
        return []
      }
    },
    // 是否循环字符串
    loop: {
      type: Boolean as PropType<boolean>,
      default() {
        return true
      }
    },
    // 循环次数
    loopCount: {
      type: Number as PropType<number>,
      default() {
        return 3
      }
    },
    // 是否显示光标
    showCursor: {
      type: Boolean as PropType<boolean>,
      default() {
        return true
      }
    },
    // 仅退格与上一个字符串不匹配的内容
    smartBackspace: {
      type: Boolean as PropType<boolean>,
      default() {
        return false
      }
    },
    // 洗弦(打乱语句的输出顺序)
    shuffle: {
      type: Boolean as PropType<boolean>,
      default() {
        return false
      }
    },
    // 淡出而不是退格
    fadeOut: {
      type: Boolean as PropType<boolean>,
      default() {
        return false
      }
    },
    // 输入速度(以毫秒为单位)
    typeSpeed: {
      type: Number as PropType<number>,
      default() {
        return 100
      }
    },
    // 开始输入之前的时间(以毫秒为单位)
    startDelay: {
      type: Number as PropType<number>,
      default() {
        return 100
      }
    },
    // 样式类名称
    className: {
      type: String as PropType<string>,
      default() {
        return 'typing'
      }
    },
    // 光标消失的时间(以毫秒为单位)
    cursorEndTime: {
      type: Number as PropType<number>,
      default() {
        return 1000
      }
    }
  })

  /**
   * 打印机其他自定义标签属性说明：
   *
   * stringsElement - 包含字符串子元素的元素的ID - :stringsElement="'myId'"
   * typeSpeed - 输入速度(以毫秒为单位) - :typeSpeed="50"
   * startDelay - 开始输入之前的时间(以毫秒为单位) - :startDelay="1000"
   * backSpeed - 退格速度(以毫秒为单位) - :backSpeed="10"
   * smartBackspace - 仅退格与上一个字符串不匹配的内容 - :smartBackspace="true"
   * shuffle - 洗弦(打乱语句的输出顺序) - :shuffle="true"
   * backDelay - 退格前的时间(以毫秒为单位) - :backDelay="100"
   * fadeOut - 淡出而不是退格 - :fadeOut="true"
   * fadeOutClass - 淡入淡出动画CSS类 - :fadeOutClass="'fadeOutClass'"
   * fadeOutDelay - 淡出延迟(以毫秒为单位) - :fadeOutDelay="true"
   * cursorChar - 光标字符 - :cursorChar="'_'"
   * autoInsertCss - 将游标CSS插入并将HTML淡出 - :autoInsertCss="true"
   * attr - 用于输入Ex的属性：输入占位符，值或仅HTML文本 - :attr="'placeholder'"
   * bindInputFocusEvents - 如果el是文本输入，则绑定到焦点并模糊 - :bindInputFocusEvents="true"
   * contentType - 纯文本格式为“ html”或“ null” - :contentType="'html'"
   */

  // eslint-disable-next-line vue/no-setup-props-destructure
  setTimeout(function () {
    document.getElementsByClassName('typed-cursor')[0].remove()
  }, props.cursorEndTime + props.startDelay)
</script>

<style scoped></style>
