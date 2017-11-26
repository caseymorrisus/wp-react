export const def = x => typeof x !== 'undefined'

export const flow = (...fns) => initial => fns.reduce((result, fn) => {
  return fn(result)
}, initial)

export const sortBy = (array, prop, reverse = false) => reverse
  ? [...array].sort((a,b) => b[prop] - a[prop])
  : [...array].sort((a,b) => a[prop] - b[prop])

export const isDevelopment = () => !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

export const isProduction = () => !isDevelopment()

export const pluralize = str => `${str}s`