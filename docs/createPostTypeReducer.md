## createPostTypeReducer

Creates reducer and fetch method for given type.

@param {Object}
​ {String} type
​ {Object} actions
​   {String} REQUEST
​   {String} SUCCESS
​   {String} FAILURE    

@returns {Object}
​ {Function} reducer
​   @returns {Map}
​ {Function} fetchType
​   @returns void

### Use

Supply post type and object with request, success, and failure constants to output a new store and a fetch function.

```javascript
import { FETCH_POSTS } from 'ActionTypes'
import createPostTypeReducer from './createPostTypeReducer'

module.exports = createPostTypeReducer({
  type: 'posts',
  actions: FETCH_POSTS
})
```

You can then supply the reducer into combine reducers:

```javascript
// other reducers
import { reducer as posts } from 'reducers/posts'

export default combineReducers({
  posts,
  // other reducers
})
```

`createPostTypeReducer` also exports a `fetchType` methods which fetches data from the endpoint for the given post type and updates the Redux state to reflect the new data.

```javascript
import { fetchType } from 'reducers/posts'

fetchType()
```

Ideally, the above function be called within the `componentDidMount` method of a container function where it's data can be used by child (presentational) components.

The `fetchType` function supplied is a requirement for the `createPostType` method:

```javascript
import { fetchType } from 'reducers/posts'

export default WPReact.createPostType({
  type: 'posts',
  fetch: fetchType
})
```
### Exposes

Each reducer created will expose a state object which looks like:

```javascript
const state = {
  isFetching: Boolean,
  hasError: Boolean,
  errorMsg: String,
  [type]: Array
}
```

The last property looks a little confusing, but it corresponds to the type supplied to the `createPostTypeReducer` function. If given the type of `posts`, the state object would look like:

```javascript
const state = {
  isFetching: Boolean,
  hasError: Boolean,
  errorMsg: String,
  posts: Array
}
```

