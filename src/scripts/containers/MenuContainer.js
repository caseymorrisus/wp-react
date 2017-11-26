import { APP_URL } from 'Constants'
import { flow, sortBy } from 'Utils'
import { getRestMenus } from 'WPReact'
import Menu from 'components/Menu'

const MenuContainer = props => {
  const getMenuItems = () => {
    return flow(
      getMainMenu,
      sortMenuItems,
      addURLToMenuItems
    )(getRestMenus())
  }

  const getMainMenu = (menus) => {
    return menus.find(menu => {
      return menu.slug === 'main-menu'
    }).items
  }

  const sortMenuItems = (menuItems) => {
    return sortBy(menuItems, 'menu_order', true)
  }

  const addURLToMenuItems = (menuItems) => {
    return menuItems.map(item => {
      item.to = item.url.replace(APP_URL, '')
      return item
    })
  }

  const menuItems = getMenuItems()

  return (
    <Menu menuItems={menuItems} />
  )
}

export default MenuContainer