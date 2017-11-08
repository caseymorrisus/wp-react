import { fetchPosts } from 'reducers/posts'

export default WPR.createPostType({
  type: 'posts',
  fetch: fetchPosts
})