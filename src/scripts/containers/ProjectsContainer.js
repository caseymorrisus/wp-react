import { fetchProjects }  from 'reducers/projects'
import containerPostType  from 'hoc/containerPostType'
import Projects           from 'components/Projects'

const ProjectsContainer = containerPostType(Projects, 'projects', fetchProjects)

export default ProjectsContainer