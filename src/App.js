import React from 'react'
import ProfileCard from './ProfileCard'
import Userprofile from './Userprofile'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <ProfileCard />,
  },
  {
    path: '/users/:login',
    element: <Userprofile />,
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App
