import { connect } from 'react-redux'
import Home from 'templates/Home'
import Header from 'components/Header'
import Loading from 'components/Loading'

import templates from './templates'

import { fetchPages } from 'reducers/pages'
import { initSettings } from 'reducers/settings'
import { PATH_PREFIX } from 'Constants'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.templates = templates
  }

  componentWillMount() {
    this.props.fetchPages()
  }

  buildRoutes(pages) {
    return pages.map((page, i) => {
      return(
        <Route
          key={i}
          component={this.getTemplate(page.slug)}
          path={`/${page.slug}`}
          exact
        />
      )
    })  
  }

  getTemplate(slug) {
    return this.templates.hasOwnProperty(slug)
      ? this.templates[slug]
      : this.templates.default
  }

  buildDOM() {
    const {pages} = this.props
    const pageSize = pages ? pages.size : 0

    if (pageSize) {
      return(
        <Router basename={PATH_PREFIX}>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={Home} exact />
              {this.buildRoutes(pages)}
              <Route render={() => { return <Redirect to="/" />}}/>
            </Switch>
          </div>
        </Router>
      )
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

export default connect(mapStateToProps, { fetchPages, initSettings })(App)