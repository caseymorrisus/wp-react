## createPostType

Uses higher order components to compose a post type container with a list of singles

@param {Object}
​	{Component} Single
​	{Component} List
​	{Component} Container
​	{String} type
​	{Function} fetch

## Use

Thanks to the use of defaults the bare minimum we need to supply is `type` and a `fetch` method.

```javascript
import { fetchType } from 'reducers/posts'

export default WPReact.createPostType({
  type: 'posts',
  fetch: fetchType
})
```

You can supply your own `Single`, `List`, or `Container` component like so:

```javascript
import { fetchType } from 'reducers/works'

const WorkSingle = () => ({data}) => (
  <div className="custom-work-single">{data.title.rendered}</div>
)

export default WPReact.createPostType({
  Single: WorkSingle,
  type: 'works',
  fetch: fetchType
})
```

This would pull in the default `Container` and `List`, but pass in a custom `WorkSingle` component.