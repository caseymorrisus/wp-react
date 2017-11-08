import { fetchPosts }     from 'reducers/posts'
import postTypeContainer  from 'hoc/postTypeContainer'
import Posts              from 'components/Posts'

const PostsContainer = postTypeContainer(Posts, 'posts', fetchPosts)

export default PostsContainer