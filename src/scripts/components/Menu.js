import MenuItem from './MenuItem'

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

export default Menu