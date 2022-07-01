import React from 'react';
import { useForm } from 'react-hook-form';
import { API } from '../services/apiauth';
const RegisterUserForm = () => {
  //Estas dos funcionalidades vienen por defecto en useForm
  //register no es que registre en la base de datos si no que recoge la informacion de un formulario y la podemos implementar en cualquier funcionalidad del back
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    API.post('users/registeruser', formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <p>Añadir usuario</p>
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
        <div className='formField alias'>
          <label htmlFor='alias'>Alias:</label>
          <input
            type='alias'
            id='alias'
            {...register('alias', { required: true })}
          />
        </div>
        <button type='submit'>Register</button>
      </form>
    </>
  );
};

export default RegisterUserForm;
