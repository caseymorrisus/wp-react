import { connect }      from 'react-redux'
import Header           from 'components/Header'
import Loading          from 'components/Loading'
import templates        from './templates'

import { fetchType as fetchPages } from 'reducers/pages'

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
        <Router basename={WPReact.PATH_PREFIX}>
          <div>
            <Header />
            <Switch>
              <Route path="/" component={this.templates.home} exact />
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

export default connect(mapStateToProps, { fetchPages })(App)