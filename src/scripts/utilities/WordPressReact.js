import axios              from 'axios'
import postTypeSingle     from 'hoc/postTypeSingle'
import postTypeList       from 'hoc/postTypeList'
import postTypeContainer  from 'hoc/postTypeContainer'
import fetchPostType      from 'hoc/fetchPostType'

import { 
  API_URL,
  TITLE_PREFIX,
} from 'Constants'

export const api = ({endpoint, page, perPage, id}) => {
  const sep = page ? '&' : '?'
  let URL = `${API_URL}/${endpoint}`
  URL = id ? `${URL}/${id}` : URL
  URL = page ? `${URL}?page=${page}` : URL
  URL = perPage ? `${URL}${sep}per_page=${perPage}` : URL

  return axios.get(URL)  
}

export const createTitle = title => TITLE_PREFIX + title

export const getGlobal = key => global.hasOwnProperty(key) ? global[key] : null

export const getRestRoutes = () => getGlobal('WP_REST_ROUTES')

export const getRestMenus = () => getGlobal('WP_REST_MENUS')

export const getRestInfo = () => getGlobal('WP_REST_INFO')

export const getRestSettings = () => getGlobal('WP_REST_SETTINGS')

export const createPostType = ({
  FetchType = fetchPostType,
  Single = postTypeSingle,
  List = postTypeList,
  Container = postTypeContainer,
  type,
  fetch  
}) => FetchType(
  Container(
    List(
      Single(),
      type
    ),
    type
  ),
  fetch
)