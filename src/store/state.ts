import { storage } from '../utils'

interface Session {
  id?: string
  username?: string
  name?: string
  avatar?: string
  type?: string
  access?: string
  refresh?: string
  expires?: number
}

export interface State {
  name: string
  session: Session
  sidebarCollapsed: boolean
  count: number
}

const state: State = {
  name: import.meta.env.VITE_NAME as string,
  session: storage.get('session') ?? {},
  sidebarCollapsed: storage.get('sidebar_collapsed') ?? false,
  // ==================== DEMO ====================
  count: storage.get('demo_count') ?? 0
}

export default state
