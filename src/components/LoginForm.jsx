import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { API } from '../services/apiauth';
import { JwtContext } from "../context/jwtContext";

const LoginForm = () => {
  const { setJwt } = useContext(JwtContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (formData) => {
    API.post('users/login', formData).then((res) => {
      localStorage.setItem('token', res.data.data.token);
      localStorage.setItem('user', res.data.data.user.email);
      localStorage.setItem('alias', res.data.data.user.alias);
      setJwt(localStorage.getItem("token"));
      navigate('/works');
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='formField email'>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          {...register('email', { required: true })}
        />
      </div>
      <div className='formField password'>
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          {...register('password', { required: true })}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
