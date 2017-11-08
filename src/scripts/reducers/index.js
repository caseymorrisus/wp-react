import { combineReducers }            from 'redux'
import posts,     * as fromPosts      from './posts'
import pages,     * as fromPages      from './pages'
import works,     * as fromWorks      from './works'
import projects,  * as fromProjects   from './projects'

export default combineReducers({
  posts,
  pages,
  projects,
  works
})