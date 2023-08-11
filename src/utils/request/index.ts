import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import { reqReject, reqResolve, resReject, resResolve } from './interceptors'

export function createAxios(options: CreateAxiosDefaults<any> | undefined) {
  const defaultOptions = {
    timeout: 30000,
  }
  const service = axios.create({
    ...defaultOptions,
    ...options,
  })

  service.interceptors.request.use(reqResolve, reqReject)
  service.interceptors.response.use(resResolve, resReject)
  return service
}

export const request = createAxios({
  baseURL: 'https://api.ydf.life',
})