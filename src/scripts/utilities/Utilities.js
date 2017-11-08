const Utilities = {
  def(x) {
    return typeof x !== 'undefined'
  },

  flow: (...fns) => initial => fns.reduce((result, fn) => {
    return fn(result)
  }, initial),

  sortBy(array, prop, reverse = false) {
    return reverse
      ? [...array].sort((a,b) => b[prop] - a[prop])
      : [...array].sort((a,b) => a[prop] - b[prop])
  },

  isDevelopment() {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
  },

  isProduction() {
    return !this.isDevelopment()
  },

}

module.exports = Utilities
module.exports.default = Utilities