import { createTitle, getRestSettings } from 'WPReact'
import DocumentTitle from 'react-document-title'
import Posts from 'components/Posts'

const BlogTemplate = props => (
  <DocumentTitle title={createTitle('Posts')}>
    <div className="blog">
      <h2>Blog</h2>
      <Posts 
        page={props.match.params.page}
        perPage={getRestSettings().posts_per_page}
      />
    </div>
  </DocumentTitle>
)


export default BlogTemplate