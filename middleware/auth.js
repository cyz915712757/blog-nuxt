// 运行在服务端
export default ({ store, route, redirect, req }) => {

  // 权限判断，判断是否已经通过身份认证
  if (!store || !store.state.username) {
    window.location = '/login'
  }

}
