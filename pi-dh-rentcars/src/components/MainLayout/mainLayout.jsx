import { Link, Outlet } from 'react-router-dom'
import "./styleMainLayout.scss"
import Header from '../Header/header'
import Footer from '../Footer/footer'

export function MainLayout() {
  return (

      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>

  )
}