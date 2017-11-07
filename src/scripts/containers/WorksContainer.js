import { fetchWorks }     from 'reducers/works'
import containerPostType  from 'hoc/containerPostType'
import Works              from 'components/Works'

const WorksContainer = containerPostType(Works, 'works', fetchWorks)

export default WorksContainer