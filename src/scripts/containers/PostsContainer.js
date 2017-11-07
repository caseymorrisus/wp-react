import { fetchPosts }     from 'reducers/posts'
import containerPostType  from 'hoc/containerPostType'
import Posts              from 'components/Posts'

const PostsContainer = containerPostType(Posts, 'posts', fetchPosts)

export default PostsContainer