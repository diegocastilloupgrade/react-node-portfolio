import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../services/apiauth";
const RegisterForm = () => {
  //Estas dos funcionalidades vienen por defecto en useForm
  //register no es que registre en la base de datos si no que recoge la informacion de un formulario y la podemos implementar en cualquier funcionalidad del back
  const { register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log(formData)
    API.post("users/register", formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true })}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
