import { connect } from 'react-redux'

class Home extends React.PureComponent {
  render() {
    return (
      <DocumentTitle title={Utils.createTitle('Home')}>
        <div>
          <h2>Home Page</h2>
          <p>This is the front page.</p>
        </div>
      </DocumentTitle>
    )
  }
}

const mapStateToProps = state => ({
  settings: state.settings.get('settings')
})

export default connect(mapStateToProps)(Home)