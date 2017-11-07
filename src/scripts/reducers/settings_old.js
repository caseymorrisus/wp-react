import { 
  FETCH_SETTINGS_REQUEST, 
  FETCH_SETTINGS_SUCCESS,
  FETCH_SETTINGS_FAILURE
} from 'ActionTypes'

import { Map } from 'immutable'

const initialState = Map({
  settings: null,
  isFetching: false,
  hasError: false,
  errorMsg: null
})

const settings = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_SETTINGS_REQUEST:
      return state.set('isFetching', true)
    case FETCH_SETTINGS_SUCCESS:
      return state.merge(Map({
        isFetching: false,
        settings: action.settings
      }))
    case FETCH_SETTINGS_FAILURE:
      return state.merge(Map({
        isFetching: false,
        hasError: true,
        errorMsg: action.error
      }))
    default:
      return state
  }
}

export const fetchSettingsRequest = () => ({
  type: FETCH_SETTINGS_REQUEST
})

export const settingsRequestSuccess = settings => ({
  type: FETCH_SETTINGS_SUCCESS,
  settings
})

export const settingsRequestFailure = error => ({
  type: FETCH_SETTINGS_FAILURE,
  error
})

export const fetchSettings = callback => dispatch => {
  dispatch(fetchSettingsRequest())

  Utils.api('settings')
    .then(response => {
      if (callback) callback(response.data)
      dispatch(settingsRequestSuccess(response.data))
    }).catch(err => {
      dispatch(settingsRequestFailure('Error fetching post.'))
    })
}

export default settings