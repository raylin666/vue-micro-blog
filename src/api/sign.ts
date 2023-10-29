import axios from 'axios'
import { SignList } from '@/types/sign'

// 请求签到列表接口
export function requestSignList() {
  return axios.get<SignList>('/sign/list')
}
