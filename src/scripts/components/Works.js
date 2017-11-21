import { fetchType } from 'reducers/works'
import { Link } from 'react-router-dom'

const WorkSingle = () => ({data}) => (
  <div className="custom-work-single">
    <Link to={`/work/${data.slug}`}>{data.title.rendered}</Link>
  </div>
)

export default WPReact.createPostType({
  Single: WorkSingle,
  type: 'works',
  fetch: fetchType
})
