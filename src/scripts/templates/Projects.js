import ProjectsContainer from 'containers/ProjectsContainer'

class Projects extends React.PureComponent {
  render() {
    return(
      <DocumentTitle title={Utils.createTitle('Projects')}>
        <ProjectsContainer />
      </DocumentTitle>
    )
  }
}

export default Projects