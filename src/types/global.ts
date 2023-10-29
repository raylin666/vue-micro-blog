export interface Pagination {
  current: number
  pageSize: number
  total?: number
}

export interface HttpResponse<T = unknown> {
  ok: boolean
  code: number
  message: string
  data: T
}

export interface TRequestParams {
  page?: number
  size?: number
}

export interface TResponse {
  list?: any[]
  total?: number
  current_page?: number
  last_page?: number
  size?: number
}
