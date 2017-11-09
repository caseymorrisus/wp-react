import { fetchType } from 'reducers/works'

const WorkSingle = () => ({data}) => (
  <div className="custom-work-single">{data.title.rendered}</div>
)

export default WPReact.createPostType({
  Single: WorkSingle,
  type: 'works',
  fetch: fetchType
})
