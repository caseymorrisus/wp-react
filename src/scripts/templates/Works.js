import WorksContainer from 'containers/WorksContainer'

class Works extends React.PureComponent {
  render() {
    return(
      <DocumentTitle title={Utils.createTitle('Works')}>
        <WorksContainer />
      </DocumentTitle>
    )
  }
}

export default Works