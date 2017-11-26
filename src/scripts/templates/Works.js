import { createTitle } from 'WPReact'
import Works from 'components/Works'

const WorksTemplate = props => (
  <DocumentTitle title={createTitle('Works')}>
    <Works
      page={props.match.params.page}
      perPage={3}
    />
  </DocumentTitle>
)


export default WorksTemplate