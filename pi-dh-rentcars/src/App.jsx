import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MainLayout } from './components/MainLayout/mainLayout'
import { Home } from './pages/Home/home'
import { Login } from './pages/Login/login'
import { CreateAccount } from './pages/CreateAccount/createAccount'
import { UserProvider } from './context/userContext'

function App() {
  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'create-account',
          element: <CreateAccount />
        }
      ]
    }
  ])
  return (
    <UserProvider>
      <RouterProvider router={appRouter} />
    </UserProvider>
  )
}

export default App
