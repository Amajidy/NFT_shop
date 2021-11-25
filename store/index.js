export const state = () => ({
  navigation_draweber : false
})

export const mutations = {
  open_close(state) {
    state.navigation_draweber = !state.navigation_draweber
  },
  close_draweber(state){
    state.navigation_draweber = false
  }
}
