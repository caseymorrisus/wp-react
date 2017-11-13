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

  return pages.map((page, i) => (
    <Route
      key={i}
      component={getTemplate(page.slug)}
      path={`/${page.slug}`}
      exact
    />
  ))
}

export const buildPaginatedRoutes = (postTypes, routesToAdd) => {
  return [...postTypes, ...routesToAdd].map((name, i) => (
    <Route
      key={i}
      component={getTemplate(name)}
      path={`/${name}/:page`}
      exact
    />
  ))
}

export const buildPostSingles = (routes) => {
  const posts = routes.filter(route => route.type !== 'page')
  console.log('posts', posts)

  return posts.map((post, i) => (
    <Route
      key={i}
      component={getTemplate(post.type.slice(0, -1))}
      path={`/${post.type.slice(0, -1)}/${post.slug}`}
      exact
    />
  ))
}

export const getCustomPostTypes = (postTypes) => {
  return Object.keys(postTypes).filter(postType => postType !== 'post')
}

export const buildRoutes = (pagesOLD) => {
  const settings = WPReact.getRestSettings()
  const routes = WPReact.getRestRoutes()

  // routes for all pages eg: /blog, /projects, /contact
  const pageRoutes = buildPageRoutes(routes)

  // paginated routes eg: /blog/2, /projects/2, /works/3
  // const postTypes = Object.keys(settings.post_types)
  const postTypes = getCustomPostTypes(settings.post_types)
  const paginatedRoutes = buildPaginatedRoutes(postTypes, ROUTES_TO_ADD)

  // post single routes eg: /projects/project-title, /works/works-title, /post/post-title
  //const singleRoutes = buildPostSingles(routes)
  const singles = ['work', 'project']
  const singleRoutes = singles.map((single, i) => {
    return (
      <Route
        key={i}
        component={getTemplate(single)}
        path={`/${single}/:slug`}
        exact
      />
    )
  })

  const postSingles = (
    <Route
      component={getTemplate('post')}
      path={`/post/:slug`}
      exact
    />
  )

  return [...pageRoutes, ...paginatedRoutes, ...singleRoutes, postSingles]
}

export const getRoutes = (pages) => {
  return (
    <Router basename={WPReact.PATH_PREFIX}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={templates.home} exact />
          {buildRoutes(pages)}
          <Route render={() => { return <Redirect to="/" />}}/>
        </Switch>
      </div>
    </Router>
  )
}