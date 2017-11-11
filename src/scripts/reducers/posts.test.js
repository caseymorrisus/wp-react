import { FETCH_POSTS }  from '../constants/ActionTypes'
import createPostTypeReducer from './createPostTypeReducer'

const reducer = createPostTypeReducer({
  type: 'posts',
  actions: FETCH_POSTS
})

describe('post actions', () => {

  it('should create an action for requesting a post', () => {
    const expectedAction = {
      type: FETCH_POSTS.REQUEST
    }
    expect(reducer.typeRequest()).toEqual(expectedAction)
  })

  it('should create an action for a successful post request', () => {
    const data = {test: 123}
    const expectedAction = {
      type: FETCH_POSTS.SUCCESS,
      data
    }
    expect(reducer.typeRequestSuccess(data)).toEqual(expectedAction)
  })

  it('should create an action for a failed post request', () => {
    const error = 'Request failed'
    const expectedAction = {
      type: FETCH_POSTS.FAILURE,
      error
    }
    expect(reducer.typeRequestFailure(error)).toEqual(expectedAction)
  })
})