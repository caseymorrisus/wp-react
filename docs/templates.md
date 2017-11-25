## Templates

Templates are the outer-most component that is rendered by specific routes. When building routes, it checks the export object of `templates/index.js` to map slugs to components. If a slug cannot be matched, it serves the component under the slug of `default`. On download, the default template that is rendered is the `Page` component.  Templates should ideally contain a `DocumentTitle` component to change the site title. The title can be created using `WPReact.createTitle(string)`, this will prepend the string supplied with the global `TITLE_PREFIX` within `Constants.js`.