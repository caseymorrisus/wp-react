import { Link } from 'react-router-dom'

const Menu = ({ menuItems }) => (
  <nav className="menu">
    <MenuItem to="/" title="Home" />
    {menuItems.map(item => {
      if (item.post_name != 'home') {
        return (
          <MenuItem
            key={item.ID}
            to={item.to}
            title={item.title}
          />
        )
      }
    })}
  </nav>
)

Menu.propTypes = {
  menuItems: PropTypes.array
}

const MenuItem = ({to, title}) => (
  <Link
    to={to}
    style={{marginRight: '10px'}}
  >
    {title}
  </Link>
)

MenuItem.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string
}

export default Menu