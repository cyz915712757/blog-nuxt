// 校验用户名是否合法 只允许4-30位中文、数字、字母和下划线
export function isvalidUsername (str) {
  const valid_map = /^[a-zA-Z0-9_\u4e00-\u9fa5]{4,30}$/
  return valid_map.test(str)
}
