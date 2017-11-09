import { FETCH_PAGES }  from 'ActionTypes'
import createPostTypeReducer from './createPostTypeReducer'

module.exports = {
  ...createPostTypeReducer({
    type: 'pages',
    actions: FETCH_PAGES
  }),
  getPageBySlug: (pagesList, slug) => pagesList.find(page => page.slug === slug)
}