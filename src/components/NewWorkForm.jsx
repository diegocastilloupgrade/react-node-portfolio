import React from "react";
import { useForm } from "react-hook-form";
import { API } from "../services/apiauth";
const NewWorkForm = () => {
  //Estas dos funcionalidades vienen por defecto en useForm
  //register no es que registre en la base de datos si no que recoge la informacion de un formulario y la podemos implementar en cualquier funcionalidad del back
  const { newwork, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    console.log(formData)
    API.post("newwork", formData).then((res) => {
      console.log(res);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">nombre_proyecto</label>
      <input
        type="text"
        id="nombre_proyecto"
        {...newwork("nombre_proyecto", { required: true })}
      />

      <label htmlFor="descripcion_breve">descripcion Breve:</label>
      <input
        type="text"
        id="descripcion_breve"
        {...newwork("descripcion_breve", { required: true })}
      />

      <label htmlFor="descripcion_larga">Descripcion Larga:</label>
      <input
        type="text"
        id="descripcion_larga"
        {...newwork("descripcion_larga", { required: true })}
      />

      <label htmlFor="url">URL:</label>
      <input
        type="text"
        id="url"
        {...newwork("url", { required: true })}
      />

      <label htmlFor="date">Date:</label>
      <input
        type="text"
        id="date"
        {...newwork("date", { required: true })}
      />

      <label htmlFor="img">Imagen:</label>
      <input
        type="text"
        id="img"
        {...newwork("img", { required: true })}
      />

      <label htmlFor="disciplina">Disciplina:</label>
      <input
        type="text"
        id="disciplina"
        {...newwork("disciplina", { required: true })}
      />

      <label htmlFor="tecnologia">Tecnología:</label>
      <input
        type="text"
        id="tecnologia"
        {...newwork("tecnologia", { required: true })}
      />

      <label htmlFor="company">Imagen:</label>
      <input
        type="text"
        id="company"
        {...newwork("company", { required: true })}
      />

      <button type="submit">Añadir trabajo</button>
    </form>
  );
};

export default NewWorkForm;
