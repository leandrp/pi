import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/logo/logo.png'
import './styleHeader.scss'

function Header() {
  const location = useLocation()

  return (
    <header className="headerStyle">
      <div className="header_left">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <span className="slogan">Aluguel de Carros</span>
        </Link>
      </div>
      <div className="header_right">
        {location.pathname !== '/create-account' && (
          <Link to="/create-account">
            <button className="btn-create-account padding">Criar conta</button>
          </Link>
        )}
        {location.pathname !== '/login' && (
          <Link to="/login">
            <button className="btn-login padding">Iniciar sessão</button>
          </Link>
        )}
      </div>
    </header>
  )
}

export default Header
