import Posts from 'components/Posts'

const BlogTemplate = props => (
  <DocumentTitle title={WPReact.createTitle('Posts')}>
    <div className="blog">
      <h2>Blog</h2>
      <Posts 
        page={props.match.params.page}
        perPage={WPReact.getRestSettings().posts_per_page}
      />
    </div>
  </DocumentTitle>
)


export default BlogTemplate