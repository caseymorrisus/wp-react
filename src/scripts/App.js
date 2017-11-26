import { fetchType as fetchPages } from 'reducers/pages'
import { connect } from 'react-redux'
import { Routes } from './routes'
import addLoader from 'hoc/addLoader'

const RoutesWithLoader = addLoader('Loading WP-React app...')(Routes)

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPages()
  }

  render() {
    return <RoutesWithLoader loading={this.props.pages.length <= 0} />
  }
}

const mapStateToProps = state => ({
  pages: state.pages.pages
})

export default connect(mapStateToProps, { fetchPages })(App)