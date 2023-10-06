/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_API_BASIC_PROXY_PASS: string
  readonly VITE_API_BASIC_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// 粒子动效
declare module 'particles.vue3'
declare module 'tsparticles'
// 打字机动效
declare module 'vue3typed'
