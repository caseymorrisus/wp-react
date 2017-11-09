import { combineReducers }      from 'redux'
import { reducer as pages }     from './pages'
import { reducer as posts }     from './posts'
import { reducer as works }     from './works'
import { reducer as projects }  from './projects'

export default combineReducers({
  pages,
  posts,
  works,
  projects
})