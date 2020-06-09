import React from 'react';
import logo from '../assets/static/unicorn.png';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss';
const Header = () => (
  <header className="header">
    <img className="header__img" src={logo} alt="Video" />
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href="/">Cuenta</a></li>
        <li><a href="/">Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;