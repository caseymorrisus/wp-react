import axios              from 'axios'
import postTypeSingle     from 'hoc/postTypeSingle'
import postTypeList       from 'hoc/postTypeList'
import postTypeContainer  from 'hoc/postTypeContainer'
import fetchPostType      from 'hoc/fetchPostType'
import { Map, List }      from 'immutable'

import { 
  API_URL,
  TITLE_PREFIX,
  PATH_PREFIX,
  APP_URL,
} from 'Constants'

const WordPressReact = {
  APP_URL,
  PATH_PREFIX,

  api({endpoint, page, perPage, id}) {
    const sep = page ? '&' : '?'
    let URL = `${API_URL}/${endpoint}`
    URL = id ? `${URL}/${id}` : URL
    URL = page ? `${URL}?page=${page}` : URL
    URL = perPage ? `${URL}${sep}per_page=${perPage}` : URL

    return axios.get(URL)
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
    FetchType = fetchPostType,
    Single = postTypeSingle,
    List = postTypeList,
    Container = postTypeContainer,
    type,
    fetch
  }) {
    return FetchType(
      Container(
        List(
          Single(),
          type
        ),
        type
      ),
      fetch
    )
  },

  /*createPostType({
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
  },*/
}

module.exports = WordPressReact
module.exports.default = WordPressReact