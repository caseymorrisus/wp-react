import { fetchPosts } from 'reducers/posts'

export default Utils.createPostType({
  type: 'posts',
  fetch: fetchPosts
})