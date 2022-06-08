import axios from 'axios'

const state = {
  name: '',
  email: '',
  inep: '',
  has_medium_teaching: '',
  accept_terms: ''
}

// set the state to the response of getUseSchool
const mutations = {
  setSchool (state, school) {
    for (const key in state) {
      state[key] = school[key]
    }
  }
}

const actions = {
  getUserSchools ({ commit }) {
    console.log('Testando')
    return new Promise((resolve, reject) => {
      axios.get('/api/school/my')
        .then((resp) => {
          if (resp.data.length === 1) {
            commit('setSchool', resp.data[0])
          } else {
            commit('setSchool', resp.data)
          }
          resolve(resp)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

const getters = {
  school: state => state
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
