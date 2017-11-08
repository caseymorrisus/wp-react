import { fetchProjects } from 'reducers/projects'

export default Utils.createPostType({
  type: 'projects',
  fetch: fetchProjects
})