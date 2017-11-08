import { FETCH_WORKS }  from 'ActionTypes'
import { Map, List }    from 'immutable'

const initialState = Map({
  works: List(),
  isFetching: false,
  hasError: false,
  errorMsg: null
})

const works = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_WORKS.REQUEST:
      return state.set('isFetching', true)
    case FETCH_WORKS.SUCCESS:
      return state.merge(Map({
        isFetching: false,
        works: state.get('works').merge(List(action.works))
      }))
    case FETCH_WORKS.FAILURE:
      return state.merge(Map({
        isFetching: false,
        hasError: true,
        errorMsg: action.error
      }))
    default:
      return state
  }
}

export const fetchWorksRequest = () => ({
  type: FETCH_WORKS.REQUEST
})

export const worksRequestSuccess = works => ({
  type: FETCH_WORKS.SUCCESS,
  works
})

export const worksRequestFailure = error => ({
  type: FETCH_WORKS.FAILURE,
  error
})

export const fetchWorks = callback => dispatch => {
  dispatch(fetchWorksRequest())

  Utils.api('works')
    .then(({data}) => {
      if (callback) callback(data)
      dispatch(worksRequestSuccess(data))
    }).catch(err => {
      dispatch(worksRequestFailure('Error fetching post.'))
    })
}

export default works