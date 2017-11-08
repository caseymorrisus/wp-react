import { fetchWorks }     from 'reducers/works'
import postTypeContainer  from 'hoc/postTypeContainer'
import Works              from 'components/Works'

const WorksContainer = postTypeContainer(Works, 'works', fetchWorks)

export default WorksContainer