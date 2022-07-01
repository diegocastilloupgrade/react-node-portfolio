import React from 'react';
import { useForm } from 'react-hook-form';
import { API } from '../services/apiauth';

const ContactForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    API.post('contact/newmessage', formData).then((res) => {});
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='formField name'>
        <label htmlFor='name'>Nombre</label>
        <input
          type='text'
          id='name'
          {...register('name', { required: true })}
        />
      </div>
      <div className='formField email'>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          {...register('email', { required: true })}
        />
      </div>
      <div className='formField content'>
        <label htmlFor='content'>Texto:</label>
        <input
          type='text'
          id='content'
          {...register('content', { required: true })}
        />
      </div>
      <div className='formField tel'>
        <label htmlFor='tel'>Teléfono:</label>
        <input type='tel' id='tel' {...register('tel', { required: false })} />
      </div>
      <button type='submit'>Enviar mensaje</button>
    </form>
  );
};

export default ContactForm;
