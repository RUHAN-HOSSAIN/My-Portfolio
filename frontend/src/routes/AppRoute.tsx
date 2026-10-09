import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { ROUTES } from '../constants/routes'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.HOME, element: <Home /> },
      // About, Skills, Projects ... pore ekhane add korbe
    ],
  },
  { path: '*', element: <NotFound /> },
])