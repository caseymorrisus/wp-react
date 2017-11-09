import Projects from 'components/Projects'

const ProjectsTemplate = props => (
  <DocumentTitle title={WPReact.createTitle('Projects')}>
    <Projects
      page={props.match.params.page}
      perPage={5}
    />
  </DocumentTitle>
)

export default ProjectsTemplate