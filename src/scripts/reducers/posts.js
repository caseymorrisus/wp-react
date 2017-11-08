import { FETCH_POSTS } from 'ActionTypes'

import { Map, List } from 'immutable'

const initialState = Map({
  posts: List(),
  isFetching: false,
  hasError: false,
  errorMsg: null
})

const posts = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_POSTS.REQUEST:
      return state.set('isFetching', true)
    case FETCH_POSTS.SUCCESS:
      return state.merge(Map({
        isFetching: false,
        posts: state.get('posts').merge(List(action.posts))
      }))
    case FETCH_POSTS.FAILURE:
      return state.merge(Map({
        isFetching: false,
        hasError: true,
        errorMsg: action.error
      }))
    default:
      return state
  }
}

export const fetchPostsRequest = () => ({
  type: FETCH_POSTS.REQUEST
})

export const postsRequestSuccess = posts => ({
  type: FETCH_POSTS.SUCCESS,
  posts
})

export const postsRequestFailure = error => ({
  type: FETCH_POSTS.FAILURE,
  error
})

export const fetchPosts = callback => dispatch => {
  dispatch(fetchPostsRequest())

  Utils.api('posts')
    .then(response => {
      if (callback) callback(response.data)
      dispatch(postsRequestSuccess(response.data))
    }).catch(err => {
      dispatch(postsRequestFailure('Error fetching post.'))
    })
}

export default posts