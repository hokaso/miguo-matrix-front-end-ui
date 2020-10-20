const getters = {
  device: state => state.app.device,
  permission_routes: state => state.permission.routes,
  isMobile: state => state.state.app.isMobile

}
export default getters
