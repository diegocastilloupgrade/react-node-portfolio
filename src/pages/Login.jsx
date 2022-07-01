import React from 'react';
import LoginForm from '../components/LoginForm';
import './Login.scss';
import './Forms.scss';
const Login = () => {
  return (
    <section className='pfContainer'>
      <div className='form login'>
        <h2>Login</h2>
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
