import templates from './templates'
import Header from 'components/Header'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

export const ROUTES_TO_ADD = ['blog']

export const getTemplate = (slug) => {
  return templates.hasOwnProperty(slug)
    ? templates[slug]
    : templates.default
}

export const buildPageRoutes = (routes) => {
  const pages = routes.filter(route => route.type === 'page')

  return pages.map((page, i) => ({
    component: getTemplate(page.slug),
    path: `/${page.slug}`,
    exact: true
  }))
}

export const buildPaginatedRoutes = (postTypes, routesToAdd) => [...postTypes, ...routesToAdd]
  .map((name, i) => ({
    component: getTemplate(name),
    path: `/${name}/:page`,
    exact: true
  }))

export const getCustomPostTypes = (postTypes) => {
  return Object.keys(postTypes).filter(postType => postType !== 'post')
}

export const buildRoutes = () => {
  const settings = WPReact.getRestSettings()
  const routes = WPReact.getRestRoutes()

  // routes for all pages eg: /blog, /projects, /contact
  const pageRoutes = buildPageRoutes(routes)

  // paginated routes eg: /blog/2, /projects/2, /works/3
  const postTypes = getCustomPostTypes(settings.post_types)
  const paginatedRoutes = buildPaginatedRoutes(postTypes, ROUTES_TO_ADD)

  // post single routes eg: /projects/project-title, /works/works-title, /post/post-title
  const singles = ['work', 'project']

  const singleRoutes = singles.map(single => ({
    component: getTemplate(single),
    path: `/${single}/:slug`,
    exact: true
  }))

  const postSingles = {
    component: getTemplate('post'),
    path: `/post/:slug`,
    exact: true
  }

  const allRoutes = [...pageRoutes, ...paginatedRoutes, ...singleRoutes, postSingles]

  return allRoutes.map((route, i) => (
    <Route
      key={i}
      component={route.component}
      path={route.path}
      exact={route.exact}
    />
  ))
}

export const getRoutes = () => (
  <Router basename={WPReact.PATH_PREFIX}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={templates.home} exact />
        {buildRoutes()}
        <Route render={() => { return <Redirect to="/" />}}/>
      </Switch>
    </div>
  </Router>
)