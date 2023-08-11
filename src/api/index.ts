import { request } from '@/utils/request'

export default function getGameList() {
  return request.get('/list')
}