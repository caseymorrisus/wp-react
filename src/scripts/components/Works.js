import { fetchWorks } from 'reducers/works'

export default WPR.createPostType({
  type: 'works',
  fetch: fetchWorks
})
