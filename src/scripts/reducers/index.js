import { combineReducers } from 'redux'
import posts, * as fromPosts from './posts'
import pages, * as fromPages from './pages'
import projects, * as fromProjects from './projects'
import works, * as fromWorks from './works'
import settings, * as fromSettings from './settings'

export default combineReducers({
  posts,
  pages,
  projects,
  settings,
  works
})