import Post from './Post'
import displayPostType from '../hoc/displayPostType'

const Posts = displayPostType(Post, 'posts')

export default Posts