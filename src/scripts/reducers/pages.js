import { 
  FETCH_PAGES_REQUEST, 
  FETCH_PAGES_SUCCESS,
  FETCH_PAGES_FAILURE
} from 'ActionTypes'

import { API_URL } from 'Constants'
import { Map, List } from 'immutable'

const initialState = Map({
  pages: List(),
  isFetching: false,
  hasError: false,
  errorMsg: null
})

const pages = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_PAGES_REQUEST:
      return state.set('isFetching', true)
    case FETCH_PAGES_SUCCESS:
      return state.merge(Map({
        isFetching: false,
        pages: state.get('pages').merge(List(action.pages))
      }))
    case FETCH_PAGES_FAILURE:
      return state.merge(Map({
        isFetching: false,
        hasError: true,
        errorMsg: action.error
      }))
    default:
      return state
  }
}

export const fetchPagesRequest = () => ({
  type: FETCH_PAGES_REQUEST
})

export const pagesRequestSuccess = pages => ({
  type: FETCH_PAGES_SUCCESS,
  pages
})

export const pagesRequestFailure = error => ({
  type: FETCH_PAGES_FAILURE,
  error
})

export const fetchPages = callback => dispatch => {
  dispatch(fetchPagesRequest())

  Utils.api('pages')
    .then(response => {
      if (callback) callback(response.data)
      dispatch(pagesRequestSuccess(response.data))
    }).catch(err => {
      dispatch(pagesRequestFailure('Error fetching pages.'))
    })
}

export const getPageBySlug = (pagesList, slug) => {
  const pages = pagesList.toArray()
  const getBySlug = (page, i) => pages[page].slug === slug
  return pages[Object.keys(pages).find(getBySlug)] || {}
}

export default pages