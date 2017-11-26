import { fetchType } from 'reducers/projects'
import { createPostType } from 'WPReact'

export default createPostType({
  type: 'projects',
  fetch: fetchType
})