import Project from './Project'
import displayPostType from '../hoc/displayPostType'

const Projects = displayPostType(Project, 'projects')

export default Projects