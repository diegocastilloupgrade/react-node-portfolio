import React from 'react';
import LoginForm from '../components/LoginForm';

import './Login.scss';
const Login = () => {
  return (
    <div className='login'>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
