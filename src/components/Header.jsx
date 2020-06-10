import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../assets/static/unicorn.png';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss';
const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="Video" />
    </Link>
    
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <Link to="/login">
        Iniciar sesión
      </Link>
      </ul>
    </div>
  </header>
);

export default Header;