import Home       from 'templates/Home'
import Page       from 'templates/Page'
import Blog       from 'templates/Blog'
import Post       from 'templates/PostSingle'
import SamplePage from 'templates/SamplePage'
import Projects   from 'templates/Projects'
import Project    from 'templates/ProjectSingle'
import Works      from 'templates/Works'
import Work       from 'templates/WorkSingle'

const templates = {
  // page slug    component
  'home':         Home,
  'sample-page':  SamplePage,
  'default':      Page,
  'blog':         Blog,
  'post':         Post,
  'projects':     Projects,
  'project':      Project,
  'works':        Works,
  'work':         Work
}

export default templates