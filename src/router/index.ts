import { createRouter, createWebHistory } from 'vue-router'
import { storage } from '../utils'
import routes from './routes'

const history = createWebHistory()

const router = createRouter({ history, routes })

// Authorize (Make sure that is the first hook.)
router.beforeEach(to => {
  const token = storage.get('token')
  // allreay authorized
  if (to.name === 'login' && token != null) {
    return to.query.redirect?.toString() ?? '/'
  }
  // need authorize & token is invalid
  if (to.meta.requiresAuth === true && token == null) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }
})

router.afterEach(to => {
  // TODO: title from sfc custom block?
  // const current = to.matched[to.matched.length - 1].components.default
  // const title = current.title ?? current.name
  const items = [import.meta.env.VITE_TITLE]
  to.meta.title != null && items.unshift(to.meta.title)
  document.title = items.join(' · ')
})

export default router
