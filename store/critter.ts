import Critter from '../models/critter'

export const state = () => ({
  critter: new Critter()
})

export const mutations = {
  tick(state) {
    state.critter.tick()
  },

  feed(state) {
    state.critter.feed()
  }
}

export const actions = {
  async tick(context) {
    context.commit('tick')
  },

  async feed(context) {
    console.log("commiting feed")
    context.commit('feed')
  }
}
