import { fetchType } from 'reducers/projects'

export default WPReact.createPostType({
  type: 'projects',
  fetch: fetchType
})