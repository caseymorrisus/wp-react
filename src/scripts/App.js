import Loading          from 'components/Loading'
import { connect }      from 'react-redux'
import { getRoutes }    from './routes'

import { fetchType as fetchPages } from 'reducers/pages'

class App extends React.Component {
  componentDidMount() {
    this.props.fetchPages()
  }

  buildDOM() {
    const {pages} = this.props
    const pageSize = pages ? pages.size : 0

    if (pageSize) {
      return getRoutes()
    } else {
      return (<Loading message="Loading Application..."/>)
    }
  }

  render() {
    return this.buildDOM()
  }
}

const mapStateToProps = state => ({
  pages: state.pages.get('pages')
})

export default connect(mapStateToProps, { fetchPages })(App)