import React from 'react'
import Avatar from 'react-avatar'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo/logo-grande.png'
import { useUser } from '../../context/userContext'
import './styleHeader.scss'

function Header() {
  const location = useLocation()
  const { userData } = useUser()
  console.log(userData)
  return (
    <header className="headerStyle">
      <div className="header_left">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
          <span className="slogan">RentCars</span>
        </Link>
      </div>
      <div className="header_right">
        <div>{userData.hello}</div>
        {userData.name}
        {userData.auth === false && (
          <>
            {location.pathname !== '/criar-conta' && (
              <Link to="/criar-conta">
                <button className="btn-create-account padding">
                  Criar conta
                </button>
              </Link>
            )}
            {location.pathname !== '/login' && (
              <Link to="/login">
                <button className="btn-login padding">Iniciar sessão</button>
              </Link>
            )}
          </>
        )}
      </div>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCtSWMm6yq0vzHmatYjHjzTS7gbdk5o3YI"></script>
    </header>
  )
}

export default Header
