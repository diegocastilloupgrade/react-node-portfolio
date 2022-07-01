import React from 'react';
import AddWorkForm from '../components/AddWorkForm';
import './Forms.scss';

const AddWork = () => {
  return (
    <div className='pfContainer'>
      <div className='form addWork'>
        <h2>Añadir trabajo</h2>
        <AddWorkForm />
      </div>
    </div>
  );
};

export default AddWork;
