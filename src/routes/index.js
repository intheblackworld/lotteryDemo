import { Home, Lottery } from '../views'

const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/lottery',
    component: Lottery,
    exact: true,
  },
]

export default routes
