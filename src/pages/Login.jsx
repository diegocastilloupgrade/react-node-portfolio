import React from 'react';
import LoginForm from '../components/LoginForm';
import './Login.scss';
import './Forms.scss';
const Login = () => {
  return (
    <div className='form login'>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
