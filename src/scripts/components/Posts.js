import { fetchType } from 'reducers/posts'
import { createPostType } from 'WPReact'

export default createPostType({
  type: 'posts',
  fetch: fetchType
})