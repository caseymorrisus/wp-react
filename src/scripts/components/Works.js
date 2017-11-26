import { fetchType } from 'reducers/works'
import { createPostType } from 'WPReact'
import { Link } from 'react-router-dom'

const WorkSingle = () => ({data}) => (
  <div className="custom-work-single">
    <Link to={`/work/${data.slug}`}>{data.title.rendered}</Link>
  </div>
)

export default createPostType({
  Single: WorkSingle,
  type: 'works',
  fetch: fetchType
})
