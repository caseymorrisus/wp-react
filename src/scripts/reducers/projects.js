import { FETCH_PROJECTS }  from 'ActionTypes'
import createPostTypeReducer from './createPostTypeReducer'

module.exports = createPostTypeReducer({
  type: 'projects',
  actions: FETCH_PROJECTS
})