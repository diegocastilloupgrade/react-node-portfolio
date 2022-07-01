import React, { useContext } from 'react';
import './Navigator.scss';
import { Link } from 'react-router-dom';
import ButtonLogout from '../components/ButtonLogout';
import { JwtContext } from '../context/jwtContext';

//import Logo from '../assets/img/logoipsum-logo-9.svg';

const Navigator = () => {
  //Usamos el contexto de jwt
  const { jwt } = useContext(JwtContext);
  const currentUser = localStorage.getItem('alias');
  console.log('usuario actual', currentUser);
  console.log('jwt es', jwt);
  return (
    <>
      <nav>
        <ul className='mainMenu'>
          <li>
            <Link to='/'>{/*<img src={Logo} alt='logo' />*/}Home</Link>
          </li>
          <li>
            <Link to='/works'>Works</Link>
          </li>
          <li>
            <Link to='/bio'>Bio</Link>
          </li>
        </ul>
        <ul className='adminMenu'>
          {!jwt && (
            <>
              <li>
                <Link to='/contact/newmessage'>Contacto</Link>
              </li>
              <li>|</li>
            </>
          )}
          {jwt && (
            <>
              <li>Hola {currentUser}</li>
              <li>|</li>
              <li>
                <Link to='/registeruser'>Crear usuario</Link>
              </li>
              <li>
                <Link to='/contact'>Mensajes</Link>
              </li>
              <li>
                <Link to='/addwork'>Añadir trabajo</Link>
              </li>
              <li>|</li>
              <li>
                <ButtonLogout />
              </li>
            </>
          )}
          {!jwt && (
            <li>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigator;
