const Post = props => (
  <div className="post-single">
    <h2>Post: {props.match.params.slug}</h2>
  </div>
)

export default Post