const postTypeList = (PostTypeSingle, type) => props => (
  <div className={type}>
    {props.posts.map(post => (
      <PostTypeSingle 
        data={post}
        key={post.id}
        type={type}
      />
    ))}
  </div>
)

export default postTypeList