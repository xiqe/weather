import { Navigate, useRoutes } from 'react-router-dom'

import Home from '@/views/home'
import Details from '@/views/detail'

const Router = useRoutes([
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Details />
  }
])

export default Router
