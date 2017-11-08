import { FETCH_SETTINGS } from 'ActionTypes'

import { Map } from 'immutable'

const initialState = Map({
  settings: {
    'site_name': 'DEFAULT_SITE_NAME'
  }
})

const settings = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_SETTINGS:
      return state.set('settings', action.settings)
    default:
      return state
  }
}

export const fetchSettingsAction = settings => ({
  type: FETCH_SETTINGS,
  settings
})

export const fetchSettings = () => dispatch => {
  console.log('fetching settings')
  console.log('WORDPRESS:', WORDPRESS)
  const settings = Utils.getWordPressSettings()
  dispatch(fetchSettingsAction(settings))
}

export const initSettings = settings => dispatch => {
  console.log('initSettings ->', settings)
  dispatch(fetchSettingsAction(settings))
}

export default settings