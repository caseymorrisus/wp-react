import { fetchSingleById } from 'reducers/posts'
import postTypeSingleTemplate from 'hoc/postTypeSingleTemplate'

export default postTypeSingleTemplate(fetchSingleById, {
  type: 'post',
  useSingle: true
})