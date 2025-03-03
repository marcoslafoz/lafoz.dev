import { createBrowserRouter } from 'react-router-dom'
import { Marcos } from '../../modules/components'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Marcos />,
    errorElement: <></>,
  },
])
