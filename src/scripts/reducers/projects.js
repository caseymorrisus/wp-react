import { 
  FETCH_PROJECTS_REQUEST, 
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE
} from 'ActionTypes'

import { Map, List } from 'immutable'

const initialState = Map({
  projects: List(),
  isFetching: false,
  hasError: false,
  errorMsg: null
})

const projects = (state = initialState, action = {}) => {
  switch(action.type) {
    case FETCH_PROJECTS_REQUEST:
      return state.set('isFetching', true)
    case FETCH_PROJECTS_SUCCESS:
      return state.merge(Map({
        isFetching: false,
        projects: state.get('projects').merge(List(action.projects))
      }))
    case FETCH_PROJECTS_FAILURE:
      return state.merge(Map({
        isFetching: false,
        hasError: true,
        errorMsg: action.error
      }))
    default:
      return state
  }
}

export const fetchProjectsRequest = () => ({
  type: FETCH_PROJECTS_REQUEST
})

export const projectsRequestSuccess = projects => ({
  type: FETCH_PROJECTS_SUCCESS,
  projects
})

export const projectsRequestFailure = error => ({
  type: FETCH_PROJECTS_FAILURE,
  error
})

export const fetchProjects = callback => dispatch => {
  dispatch(fetchProjectsRequest())

  Utils.api('projects')
    .then(response => {
      if (callback) callback(response.data)
      dispatch(projectsRequestSuccess(response.data))
    }).catch(err => {
      dispatch(projectsRequestFailure('Error fetching post.'))
    })
}

export default projects