import { Map, List } from 'immutable'
import WPReact from '../utilities/WordPressReact'

const createPostTypeReducer = ({type, actions}) => {
  const initialState = Map({
    [type]: List(),
    isFetching: false,
    hasError: false,
    errorMsg: null
  })

  const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
      case actions.REQUEST:
        return state.set('isFetching', true)
      case actions.SUCCESS:
        return state.merge(Map({
          isFetching: false,
          hasError: false,
          [type]: state.get(type).merge(List(action.data))
        }))
      case actions.FAILURE:
        return state.merge(Map({
          isFetching: false,
          hasError: true,
          errorMsg: action.error
        }))
      default:
        return state
    }
  }

  const typeRequest = () => ({
    type: actions.REQUEST
  })

  const typeRequestSuccess = data => ({
    type: actions.SUCCESS,
    data
  })

  const typeRequestFailure = error => ({
    type: actions.FAILURE,
    error
  })

  const fetchType = (page, perPage, callback) => dispatch => {
    dispatch(typeRequest())

    WPReact.api(type, page, perPage)
      .then(({data}) => {
        if (callback) callback(data)
        dispatch(typeRequestSuccess(data))
      }).catch(err => {
        dispatch(typeRequestFailure(`Error fetching ${type}.`))
      })
  }

  return {
    reducer,
    fetchType,
    typeRequest,
    typeRequestSuccess,
    typeRequestFailure
  }
}

export default createPostTypeReducer