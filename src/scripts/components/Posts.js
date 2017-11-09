import { fetchType } from 'reducers/posts'

export default WPReact.createPostType({
  type: 'posts',
  fetch: fetchType
})