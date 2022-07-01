import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { JwtContext } from '../context/jwtContext';

const ButtonLogout = () => {
  const { setJwt } = useContext(JwtContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('alias');
    setJwt(null);
    navigate('/');
  };
  return <a href="{}" onClick={logout}>Logout</a>;
};

export default ButtonLogout;
