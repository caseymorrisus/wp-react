import Works from 'components/Works'

const WorksTemplate = props => (
  <DocumentTitle title={WPReact.createTitle('Works')}>
    <Works
      page={props.match.params.page}
      perPage={3}
    />
  </DocumentTitle>
)


export default WorksTemplate