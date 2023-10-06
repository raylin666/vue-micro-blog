import { createRouter, createWebHistory } from 'vue-router'

export const INDEX_LAYOUT = () => import('@/layout/index-layout.vue')

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
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
