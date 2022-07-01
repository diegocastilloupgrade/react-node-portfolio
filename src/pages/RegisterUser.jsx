import React from "react";
import RegisterUserForm from "../components/RegisterUserForm";
import './Register.scss';
import './Forms.scss';
const RegisterUser = () => {
  return (
    <section className="pfContainer">
    <div className='form register'>
      <h2>Nuevo usuario</h2>
      <RegisterUserForm />
    </div>
    </section>
  );
};

export default RegisterUser;
