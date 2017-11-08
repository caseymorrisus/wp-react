import Projects from 'components/Projects'

const ProjectsTemplate = props => (
  <DocumentTitle title={Utils.createTitle('Projects')}>
    <Projects />
  </DocumentTitle>
)

export default ProjectsTemplate