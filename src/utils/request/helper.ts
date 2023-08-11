export function resolveResError(code: number, message: string) {
  switch (code) {
    case 400:
      message = message ?? '请求参数错误'
      break
    case 404:
      message = message ?? '资源或接口不存在'
      break
    case 500:
      message = message ?? '服务器异常'
      break
    default:
      message = message ?? `[${code}]: 未知异常!`
      break
  }
  return message
}