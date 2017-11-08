import { fetchProjects }  from 'reducers/projects'
import postTypeContainer  from 'hoc/postTypeContainer'
import Projects           from 'components/Projects'

const ProjectsContainer = postTypeContainer(Projects, 'projects', fetchProjects)

export default ProjectsContainer