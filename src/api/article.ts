import request from '@/utils/axios/request'
import { ArticleInfo, ArticleList, NewArticleListItem } from '@/types/article'

// 请求首页文章列表接口
export function requestIndexArticleList(page: number, size: number) {
  return request.get<ArticleList>('/api/article/list', {
    params: { page, size }
  })
}

// 请求最新文章列表接口
export function requestNewArticleList() {
  return request.get<NewArticleListItem[]>('/api/article/newList')
}

// 请求文章详情接口
export function requestArticleInfo(id: number) {
  return request.get<ArticleInfo>('/api/article/info' + id)
}
