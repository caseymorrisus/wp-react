import Posts from 'components/Posts'

const BlogTemplate = props => (
  <DocumentTitle title={WPR.createTitle('Posts')}>
    <div>
      <h2>Blog</h2>
      <Posts />
    </div>
  </DocumentTitle>
)

export default BlogTemplate