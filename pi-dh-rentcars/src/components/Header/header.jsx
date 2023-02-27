import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import './styleHeader.scss';

const Header = () => {
  return (
    <header className="headerStyle">
      <div className="header_left">
        <Link to="/">
          <img src={logo} alt="Logo" />
          <span className="slogan">Sinta-se em casa</span> 
        </Link>
      </div>
      <div className="header_right">
        <Link to="/create-account">
          <button className="btn-create-account">Criar conta</button>
        </Link>
        <Link to="/login">
          <button className="btn-login padding">Iniciar sessão</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;