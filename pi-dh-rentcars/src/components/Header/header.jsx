import React from 'react'
import Avatar from 'react-avatar'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
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
          <img src={logo} alt="Logo" />
          <span className="slogan">Aluguel de Carros</span>
        </Link>
      </div>
      <div className="header_right">
        <div>{userData.hello}</div>
        {userData.name}
        {userData.auth === false && (
          <>
            {location.pathname !== '/create-account' && (
              <Link to="/create-account">
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
    </header>
  )
}

export default Header
