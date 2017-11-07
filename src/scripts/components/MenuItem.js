import { Link } from 'react-router-dom'

const MenuItem = ({key, to, title}) => (
  <Link
    to={to}
    style={{marginRight: '10px'}}
  >
    {title}
  </Link>
)

export default MenuItem