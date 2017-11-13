import Loading          from 'components/Loading'
import { connect }      from 'react-redux'
import { getRoutes }    from './routes'

import { fetchType as fetchPages } from 'reducers/pages'

class App extends React.Component {
  componentWillMount() {
    this.props.fetchPages()
  }

  buildDOM() {
    const {pages} = this.props
    const pageSize = pages ? pages.size : 0

    if (pageSize) {
      return getRoutes(pages)
    } else {
      return (<Loading message="Loading Application..."/>)
    }
  }

  render() {
    return getRoutes(this.props.pages)
  }
}

const mapStateToProps = state => ({
  pages: state.pages.get('pages')
})

export default connect(mapStateToProps, { fetchPages })(App)