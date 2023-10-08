import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pxtovw from 'postcss-px-to-viewport'

const loderPxToVW = pxtovw({
  // 需要转换的单位
  unitToConvert: 'px',
  // UI设计稿宽度, 自己修改
  viewportWidth: 1920,
  // 转换后对精度, 即小数点位数
  unitPrecision: 6,
  // 指定转换对css属性的单位, * 代表全部css属性的单位都进行转换
  propList: ['*'],
  // 指定需要转换成的视窗单位, 默认vw
  viewportUnit: 'vw',
  // 指定字体需要转换成的视窗单位, 默认vw
  fontViewportUnit: 'vw',
  // 指定不转换为视窗单位的类名
  selectorBlackList: ['ignore-'],
  // 默认值为1, 小于或等于1px则不进行转换
  minPixelValue: 1,
  // 是否在媒体查询的css代码中也进行转换, 默认false
  mediaQuery: true,
  // 是否转换后直接更换属性值
  replace: true,
  // 是否处理横屏情况
  landscape: false
  // 横屏时使用的单位
  // landscapeUnit: 'px'
  // 横屏时使用的视窗宽度
  // landscapeWidth: 750
})

// https://vitejs.cn/config/
export default defineConfig({
  // 需要用到的插件数组。Falsy 虚值的插件将被忽略，插件数组将被扁平化（flatten）
  plugins: [vue()],
  // 配置 `@` 访问别名
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src')
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets')
      }
    ],
    extensions: ['.ts', '.js']
  },
  // 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。
  define: {
    'process.env': {}
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/assets/style/breakpoint.less'
          )}";`
        },
        javascriptEnabled: true
      }
    },
    postcss: {
      plugins: [loderPxToVW]
    }
  }
})
