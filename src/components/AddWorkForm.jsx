import React from 'react';
import { useForm } from 'react-hook-form';
import { API } from '../services/apiauth';
const AddWorkForm = () => {
  //Estas dos funcionalidades vienen por defecto en useForm
  //register no es que registre en la base de datos si no que recoge la informacion de un formulario y la podemos implementar en cualquier funcionalidad del back
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
    API.post('works/addwork', formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <p>Añadir trabajo</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='formField'>
          <label htmlFor='email'>nombre_proyecto</label>
          <input
            type='text'
            id='nombre_proyecto'
            {...register('nombre_proyecto', { required: true })}
          />
        </div>
        <div className='formField'>
          <label htmlFor='descripcion_breve'>descripcion Breve:</label>
          <input
            type='text'
            id='descripcion_breve'
            {...register('descripcion_breve', { required: true })}
          />
        </div>
        <div className='formField'>
          <label htmlFor='descripcion_larga'>Descripcion Larga:</label>
          <input
            type='text'
            id='descripcion_larga'
            {...register('descripcion_larga', { required: true })}
          />
        </div>
        <div className='formField'>
          <label htmlFor='url'>URL:</label>
          <input
            type='text'
            id='url'
            {...register('url', { required: true })}
          />
        </div>
        <div className='formField'>
          <label htmlFor='date'>Date:</label>
          <input
            type='text'
            id='date'
            {...register('date', { required: true })}
          />
        </div>
        <div className='formField'>
          <label htmlFor='img'>Imagen:</label>
          <input
            type='text'
            id='img'
            {...register('img', { required: true })}
          />
        </div>

        <div className='formField'>
          <label htmlFor='disciplina'>Disciplina:</label>
          <input
            type='text'
            id='disciplina'
            {...register('disciplina', { required: true })}
          />
        </div>

        <button type='submit'>Añadir trabajo</button>
      </form>
    </>
  );
};

export default AddWorkForm;
