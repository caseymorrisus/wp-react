import Home       from 'templates/Home'
import Page       from 'templates/Page'
import Blog       from 'templates/Blog'
import SamplePage from 'templates/SamplePage'
import Projects   from 'templates/Projects'
import Works      from 'templates/Works'

const templates = {
  // page slug    component
  'home':         Home,
  'sample-page':  SamplePage,
  'default':      Page,
  'blog':         Blog,
  'projects':     Projects,
  'works':        Works
}

export default templates