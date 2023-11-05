import { requestArticleInfo } from '@/api/article'
import { ArticleInfo } from '@/types/article'
import { defineStore } from 'pinia'

const articleInfoStore = defineStore('article.info', {
  state() {
    return {
      info: null as ArticleInfo | null
    }
  },
  actions: {
    setInfo(info: ArticleInfo) {
      this.$state.info = info
    },

    getInfo(): ArticleInfo | null {
      return this.$state.info
    }
  }
})

export default articleInfoStore
