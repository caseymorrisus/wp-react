import axios              from 'axios'
import postTypeSingle     from 'hoc/postTypeSingle'
import postTypeList       from 'hoc/postTypeList'
import postTypeContainer  from 'hoc/postTypeContainer'
import { Map, List }      from 'immutable'

import { 
  API_URL,
  TITLE_PREFIX 
} from 'Constants'

const WordPressReact = {
  api(endpoint) {
    return axios.get(`${API_URL}/${endpoint}`)
  },

  setTitle(title) {
    document.title = `React WP - ${title}`
  },

  createTitle(title) {
    return TITLE_PREFIX + title
  },

  getGlobal(key) {
    return global.hasOwnProperty(key) ? global[key] : null
  },

  getRestRoutes() {
    return this.getGlobal('WP_REST_ROUTES')
  },

  getRestMenus(x) {
    return this.getGlobal('WP_REST_MENUS')
  },

  getRestInfo() {
    return this.getGlobal('WP_REST_INFO')
  },

  getRestSettings() {
    return this.getGlobal('WP_REST_SETTINGS')
  },

  createPostType({
    Single = postTypeSingle,
    List = postTypeList,
    Container = postTypeContainer,
    type,
    fetch
  }) {
    return Container(
      List(
        Single(),
        type
      ),
      type,
      fetch
    )
  },
}

module.exports = WordPressReact
module.exports.default = WordPressReact