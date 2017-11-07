import axios from 'axios'
import { API_URL, TITLE_PREFIX } from 'Constants'

const Utilities = {
  def(x) {
    return typeof x !== 'undefined'
  },

  /*flow(...args) {
    return function(initial) {
      return args.reduce((result, fn) => fn(result), initial)
    }
  },*/

  // flow: (...args) => initial => reduce(args, (result, fn) => fn(result), initial),

  // flow: (...args) => initial => args.reduce((result, fn) => fn(result), initial),

  flow: (...fns) => initial => fns.reduce((result, fn) => {
    return fn(result)
  }, initial),

  sortBy(array, prop, reverse = false) {
    return reverse
      ? [...array].sort((a,b) => b[prop] - a[prop])
      : [...array].sort((a,b) => a[prop] - b[prop])
  },

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

  isDevelopment() {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  },

  isProduction() {
    return !this.isDevelopment()
  }
}

module.exports = Utilities
module.exports.default = Utilities