import { fetchWorks } from 'reducers/works'

export default Utils.createPostType({
  type: 'works',
  fetch: fetchWorks
})
