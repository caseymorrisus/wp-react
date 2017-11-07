const displayPostType = (PostTypeSingle, type) => props => {
  const {isFetching, errorMsg, hasError, posts} = props

  const loadingDOM = <div className={type + "-loading"}>Loading...</div>

  const errorDOM = <div className={type + "-error"}>{errorMsg}</div>

  const defaultDOM = <div className={type + "-default"}>No {type} to display.</div>

  const postsDOM = posts ? posts.map(post => (
    <PostTypeSingle data={post} key={post.id} />
  )) : null

  const postSize = posts ? posts.size : 0

  const createLoadingDOM = () => isFetching && !postSize ? loadingDOM : null
  const createErrorDOM = () => !isFetching && hasError ? errorDOM : null
  const createDefaultDOM = () => !isFetching && !postSize && !hasError ? defaultDOM : null
  const createPostsDOM = () => postSize && !hasError ? postsDOM : null

  return (
    <div className={type}>
      {createLoadingDOM()}
      {createDefaultDOM()}
      {createErrorDOM()}
      {createPostsDOM()}
    </div>
  )
}

export default displayPostType