import { TagsItem } from './tags'

/**
 * 文章列表 Item 接口
 */
export interface ArticleListItem {
  id: number
  cover: string
  title: string
  created_at: string
  category?: TagsItem[]
  summary: string
  avatar: string
  author: string
  zan_count: number
  collection_count: number
  comment_count: number
  view_count: number
  share_count: number
  recommend_flag: number
  commented_flag: number
  source: string
  user_id: number
  last_commented_at?: string
}

/**
 * 文章列表接口
 */
export interface ArticleList {
  list: Array<ArticleListItem>
  total: number
}

/**
 * 文章详情接口
 */
export interface ArticleInfo {
  id: number
  cover: string
  title: string
  time: string
  date: string
  category?: TagsItem[]
  summary: string
  avatar: string
  author: string
  zan_count: number
  collection_count: number
  comment_count: number
  view_count: number
  content: string
  prevArticle?: { id: number; title: string }
  nextArticle?: { id: number; title: string }
  copyrightAuthor: string
  copyrightArticleId: number
  copyrightLink: string
  copyrightStatement: string
  contentLength?: string
}
