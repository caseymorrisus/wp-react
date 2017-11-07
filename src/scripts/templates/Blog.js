import PostsContainer from 'containers/PostsContainer'

class Blog extends React.PureComponent {
  render() {
    return(
      <DocumentTitle title={Utils.createTitle('Blog')}>
        <div>
          <h2>Blog</h2>
          <PostsContainer />
        </div>
      </DocumentTitle>
    )
  }
}

export default Blog