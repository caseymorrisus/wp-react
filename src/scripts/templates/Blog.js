import Posts from 'components/Posts'

const BlogTemplate = props => (
  <DocumentTitle title={WPReact.createTitle('Posts')}>
    <div>
      <h2>Blog</h2>
      <Posts />
    </div>
  </DocumentTitle>
)

export default BlogTemplate