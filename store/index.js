import axios from 'axios'

export const state = () => ({
  districts: [],
  goals: []
})

export const mutations = {
  setDistricts ( state, districts ) {
    state.districts = districts
  },
  setGoals ( state, goals ) {
    state.goals = goals
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    try {
      const { data: { districts } } = await axios.get('http://2013.deolhonasmetas.org.br/api/public/districts', { headers: { 'Accept': 'application/json' } } )
      commit('setDistricts', districts)
    } catch (err) {
      console.error('Vuex => ', err)
    }
  }
}