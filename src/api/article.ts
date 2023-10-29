import axios from 'axios'
import { ArticleInfo, ArticleList } from '@/types/article'

// 请求首页文章列表接口
export function requestIndexArticleList(page: number, size: number) {
  return axios.get<ArticleList>('/api/article/list', {
    params: { page, size }
  })
}

// 请求文章详情接口
export function requestArticleInfo(id: number) {
  return axios.get<ArticleInfo>('/api/article/info/' + id)
}
