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
    // 请求文章详情数据
    async info(id: number) {
      this.$reset()
      await requestArticleInfo(id).then((response: any) => {
        if (response.data.ok) {
          this.info = response.data.data
        }
      })
    },

    getInfo(): ArticleInfo | null {
      return this.info
    }
  }
})

export default articleInfoStore
