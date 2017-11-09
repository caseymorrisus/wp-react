import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'

import templates from './templates'

import Header from 'components/Header'

export const getTemplate = (slug) => {
  return templates.hasOwnProperty(slug)
    ? templates[slug]
    : templates.default
}

export const addPostTypes = (postTypeObject, postTypes) => {
  const postTypeObjectClone = Object.assign({}, postTypeObject)

  postTypes.forEach(postType => postTypeObjectClone[postType] = postType)

  return postTypeObjectClone
}

export const buildPaginatedRoutes = (postTypes) => {
  let routes = []

  for (const postType in postTypes) {
    if (postTypes.hasOwnProperty(postType)) {
      if (postType != 'attachment' && postType != 'page' && postType != 'post') {
        routes.push(postType)
      }
    }
  }

  return routes.map((name, i) => {
    return (
      <Route
        key={i}
        component={getTemplate(name)}
        path={`/${name}/:page`}
      />
    )
  })
}

export const buildRoutes = (pages) => {
  const settings = WPReact.getRestSettings()

  const pageRoutes = pages.map((page, i) => {
    return(
      <Route
        key={i}
        component={getTemplate(page.slug)}
        path={`/${page.slug}`}
        exact
      />
    )
  })

  const postTypes = addPostTypes(settings.post_types, ['blog'])

  const paginatedRoutes = buildPaginatedRoutes(postTypes)

  return [...pageRoutes, ...paginatedRoutes]
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