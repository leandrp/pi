import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { MainLayout } from './components/MainLayout/mainLayout'
import { Home } from './pages/Home/home'
import { Login } from './pages/Login/login'
import { CreateAccount } from './pages/CreateAccount/createAccount'
import { UserProvider } from './context/userContext'
import { CarDetails } from './components/CarDetails/carDetails'
import carsList from './components/CarList/carsList'
import { RentCar } from './components/RentCar/rentCar'
import { ScrollToTop } from './components/ScrollToTop/scrollToTop'

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: (
            <>
              
              <Home />
            </>
          )
        },
        {
          path: 'login',
          element: (
            <>
              <ScrollToTop />
              <Login />
            </>
          )
        },
        {
          path: 'create-account',
          element: (
            <>
              <ScrollToTop />
              <CreateAccount />
            </>
          )
        },
        {
          path: 'reserva',
          element: (
            <>
              <ScrollToTop />
              <RentCar />
            </>
          )
        },
        ...carsList.map((car) => ({
          path: `carro/${car.id}`,
          element: (
            <>
              <ScrollToTop />
              <CarDetails carId={car.id} />
            </>
          ),//não funciona daqui pra frente
          children: [
            {
              path: 'reserva', //reserva
              element: (
                <>
                  <ScrollToTop />
                  <RentCar />
                </>
              )
            }
          ]
        }))
      ]
    }
  ]);
  

  return (
    <UserProvider>
      <RouterProvider router={appRouter} />
    </UserProvider>
  )
}

export default App
