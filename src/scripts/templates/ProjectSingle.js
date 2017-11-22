import { fetchSingleById } from 'reducers/projects'
import postTypeSingleTemplate from 'hoc/postTypeSingleTemplate'

export default postTypeSingleTemplate(fetchSingleById, {
  type: 'project'
})