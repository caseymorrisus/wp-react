import { APP_URL } from 'Constants'
import { sortBy } from 'Utils'
import { getRestMenus } from 'WPReact'
import { compose } from 'redux'
import Menu from 'components/Menu'

const MenuContainer = props => {
  const getMenuItems = () => compose(
    addURLToMenuItems,
    sortMenuItems,
    getMainMenu
  )(getRestMenus())

  const getMainMenu = (menus) => menus.find(menu => {
    return menu.slug === 'main-menu'
  }).items

  const sortMenuItems = (menuItems) => sortBy(menuItems, 'menu_order', true)

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