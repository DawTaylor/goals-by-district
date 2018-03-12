import axios from 'axios'
import localforage from 'localforage'

const ax = axios.create({
  baseURL: 'http://2013.deolhonasmetas.org.br/api/public',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

export const state = () => ({
  districts: [],
  goals: {},
  goalDetails: {}
})

export const mutations = {
  setDistricts ( state, districts ) {
    state.districts = districts
  },
  setGoals ( state, goals ) {
    state.goals = goals
  },
  setGoal ( state, goal ) {
    state.goal = goal
  }
}

export const actions = {
  async fetchDistricts ({ commit }) {
    try {
      const localDistricts = await localforage.getItem('districts')
      if ( localDistricts ) {
        return commit('setDistricts', localDistricts)
      }
      const { data: { districts } } = await ax.get('/districts')
      localforage.setItem('districts', districts)
      return commit('setDistricts', districts)
    } catch (err) {
      console.error('Vuex => ', err)
    }
  },
  async fetchGoals ({ commit }, district) {
    try {
      const localGoals = await localforage.getItem('goals')
      if ( localGoals && localGoals[district] ) {
        return commit('setGoals', localGoals)
      }
      const { data: { goals } } = await ax.get('/goals', { params: { region_id: district } })
      const newGoals = {
        ...state.goals,
        ...localGoals,
        [district]: goals
      }
      localforage.setItem('goals', newGoals)
      return commit('setGoals', newGoals)
    } catch (err) {
      console.error('Vuex => ', err)
    }
  },
  async fetchGoal ({ commit }, goal) {
    try {
      console.log(goal)
      commit('setGoal', {})
      const { data: goalDetails } = await ax.get(`/goals/${goal}`)
      return commit('setGoal', goalDetails)
    } catch (err) {
      console.error(err)
    }
  }
}