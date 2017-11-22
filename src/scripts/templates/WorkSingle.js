import { fetchSingleById } from 'reducers/works'
import postTypeSingleTemplate from 'hoc/postTypeSingleTemplate'

export default postTypeSingleTemplate(fetchSingleById, {
  type: 'work'
})