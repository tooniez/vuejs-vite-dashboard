import { api } from '../utils'

export interface Menu {
  id: string
  label: string
  icon?: string
  name?: string
  params?: { [key: string]: string }
  children?: Menu[]
}

export const getMenus = async (type: 'main' | 'shortcut' = 'main'): Promise<Menu[]> => {
  return await api.get('menus', { searchParams: { type } }).json()
}
