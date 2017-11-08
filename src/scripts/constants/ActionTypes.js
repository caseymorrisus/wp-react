const createFetchType = (type) => ({
  REQUEST: `FETCH_${type.toUpperCase()}_REQUEST`,
  SUCCESS: `FETCH_${type.toUpperCase()}_SUCCESS`,
  FAILURE: `FETCH_${type.toUpperCase()}_FAILURE`
})

export const FETCH_POSTS = createFetchType('posts')

export const FETCH_PROJECTS = createFetchType('projects')

export const FETCH_WORKS = createFetchType('works')

export const FETCH_PAGES = createFetchType('pages')

export const FETCH_SETTINGS = createFetchType('settings')

/*export const FETCH_PAGES_REQUEST = 'FETCH_PAGES_REQUEST'
export const FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS'
export const FETCH_PAGES_FAILURE = 'FETCH_PAGES_FAILURE'

export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST'
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS'
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE'

export const FETCH_SETTINGS_REQUEST = 'FETCH_SETTINGS_REQUEST'
export const FETCH_SETTINGS_SUCCESS = 'FETCH_SETTINGS_SUCCESS'
export const FETCH_SETTINGS_FAILURE = 'FETCH_SETTINGS_FAILURE'

export const FETCH_WORKS_REQUEST = 'FETCH_WORKS_REQUEST'
export const FETCH_WORKS_SUCCESS = 'FETCH_WORKS_SUCCESS'
export const FETCH_WORKS_FAILURE = 'FETCH_WORKS_FAILURE'

export const FETCH_SETTINGS = 'FETCH_SETTINGS'*/
