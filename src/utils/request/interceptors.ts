import { resolveResError } from './helper'

export function reqResolve(config: any) {
  // 处理不需要token的请求
  if (config.noNeedToken) {
    return config
  }

  config.headers.Accept = 'application/json'

  return config
}

export function reqReject(error: any) {
  return Promise.reject(error)
}

export function resResolve(response: any) {
  const { data, status, statusText } = response
  if (status >= 400) {
    const code = status

    const message = resolveResError(code, data?.message ?? statusText)

    return Promise.reject(new Error(message))
  }
  return Promise.resolve(data)
}

export function resReject(error: any) {
  if (!error || !error.response) {
    const code = error?.code
    const message = resolveResError(code, error.message)
    return Promise.reject(new Error(message))
  }
  const { data, status } = error.response
  const code = data?.code ?? status
  const message = resolveResError(code, data?.message ?? error.message)
  return Promise.reject(new Error(message))
}