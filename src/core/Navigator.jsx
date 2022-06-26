import React from 'react';
import { Link } from 'react-router-dom';
import './Navigator.scss';
import Logo from '../assets/img/logoipsum-logo-9.svg';

const Navigator = () => {
  return (
    <>
      <img src={Logo} alt='logo' />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Registro</Link>
          </li>
          <li>
            <Link to="/newwork">Añadir trabajo</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigator;
