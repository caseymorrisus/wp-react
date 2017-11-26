import { createTitle } from 'WPReact'
import Works from 'components/Works'
import DocumentTitle from 'react-document-title'

const WorksTemplate = props => (
  <DocumentTitle title={createTitle('Works')}>
    <Works
      page={props.match.params.page}
      perPage={3}
    />
  </DocumentTitle>
)


export default WorksTemplate