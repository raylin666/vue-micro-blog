import { createRouter, createWebHistory } from 'vue-router'

export const BASIC_LAYOUT = () => import('@/layout/basic-layout.vue')
export const INDEX_LAYOUT = () => import('@/layout/index-layout.vue')
export const ARTICLE_INFO_LAYOUT = () =>
  import('@/layout/article-info-layout.vue')

const routes = [
  {
    path: '/',
    name: 'index',
    component: INDEX_LAYOUT,
    meta: {},
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: {}
      }
    ]
  },
  {
    path: '/article',
    name: 'article',
    component: BASIC_LAYOUT,
    meta: {},
    children: [
      {
        path: 'info/:id',
        name: 'articleInfo',
        component: () => import('@/views/article/info.vue'),
        meta: {}
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
