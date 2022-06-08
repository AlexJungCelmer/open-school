import { createStore, createLogger } from 'vuex'
import school from './school/SchoolIndex'

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    school
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
