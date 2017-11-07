import { APP_URL } from 'Constants'
import Menu from './Menu'

const Header = ({pages}) => {
  const getMenuItems = () => {
    return Utils.flow(
      getMainMenu,
      sortMenuItems,
      addURLToMenuItems
    )(Utils.getRestMenus())
  }

  const getMainMenu = (menus) => {
    return menus.find(menu => {
      return menu.slug === 'main-menu'
    }).items
  }

  const sortMenuItems = (menuItems) => {
    return Utils.sortBy(menuItems, 'menu_order', true)
  }

  const addURLToMenuItems = (menuItems) => {
    return menuItems.map(item => {
      item.to = item.url.replace(APP_URL, '')
      return item
    })
  }

  const menuItems = getMenuItems()

  return (
    <div className="header">
      <Menu menuItems={menuItems} />
    </div>
  )  
}

export default Header