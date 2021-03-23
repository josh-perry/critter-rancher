import Critter from '../models/critter'

export const state = () => ({
  critter: new Critter()
})

export const mutations = {
  tick(state) {
    console.log(state.critter.sprite)
    state.critter.tick()
  }
}

export const actions = {
  async tick(context) {
    context.commit("tick")
  }
}
