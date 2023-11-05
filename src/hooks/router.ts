import { useRouter as Router } from 'vue-router'

export default function useRouter() {
  const router = Router()

  // 是否文章详情路由
  const isArticleInfoRouter = () => {
    return router.currentRoute.value.name == 'articleInfo'
  }

  return {
    isArticleInfoRouter
  }
}
