const createFetchType = (type) => ({
  REQUEST: `FETCH_${type.toUpperCase()}_REQUEST`,
  SUCCESS: `FETCH_${type.toUpperCase()}_SUCCESS`,
  FAILURE: `FETCH_${type.toUpperCase()}_FAILURE`,
  single: {
    REQUEST: `FETCH_${type.toUpperCase()}_SINGLE_REQUEST`,
    SUCCESS: `FETCH_${type.toUpperCase()}_SINGLE_SUCCESS`,
    FAILURE: `FETCH_${type.toUpperCase()}_SINGLE_FAILURE`,    
  }
})

export const FETCH_POSTS = createFetchType('posts')
export const FETCH_WORKS = createFetchType('works')
export const FETCH_PAGES = createFetchType('pages')
export const FETCH_PROJECTS = createFetchType('projects')