import { FETCH_POSTS }  from 'ActionTypes'
import createPostTypeReducer from './createPostTypeReducer'

module.exports = createPostTypeReducer({
  type: 'posts',
  actions: FETCH_POSTS
})