import { FETCH_WORKS }  from 'ActionTypes'
import createPostTypeReducer from './createPostTypeReducer'

module.exports = createPostTypeReducer({
  type: 'works',
  actions: FETCH_WORKS
})