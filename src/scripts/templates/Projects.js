import { createTitle } from 'WPReact'
import Projects from 'components/Projects'
import DocumentTitle from 'react-document-title'

const ProjectsTemplate = props => (
  <DocumentTitle title={createTitle('Projects')}>
    <Projects
      page={props.match.params.page}
      perPage={5}
    />
  </DocumentTitle>
)

export default ProjectsTemplate