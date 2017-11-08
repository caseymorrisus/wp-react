import { fetchProjects } from 'reducers/projects'

export default WPR.createPostType({
  type: 'projects',
  fetch: fetchProjects
})