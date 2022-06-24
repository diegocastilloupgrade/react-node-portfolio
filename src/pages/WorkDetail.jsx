import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './WorkDetail.scss';
import { Link } from 'react-router-dom';
const WorkDetail = () => {
  //Sacamos el parametro de la ruta del navegador
  const { name } = useParams();

  const [workDiego, setWorkDiego] = useState({});

  useEffect(() => {
    const getWorkByName = async () => {
      const res = await axios.get(`http://localhost:5000/works/name/${name}`);
      setWorkDiego(res.data.data);
      console.log("workDiego",workDiego);
    };
    getWorkByName();
  });
  return (
    <div>
    <Link key={workDiego._id} to={`/works`}>Volver a trabajos</Link>
      {workDiego ? (
        <>
          <h1>{workDiego.nombre_proyecto}</h1>
          <ul>
            <li>{workDiego.descripcion_breve}</li>
            <li>{workDiego.descripcion_larga}</li>
            <li>{workDiego.url}</li>
            <li>{workDiego.date}</li>
            <li>{workDiego.img}</li>
            <li>{workDiego.disciplina}</li>
            <li>{workDiego.tecnologia}</li>
            <li>{workDiego.company}</li>
          </ul>
        </>
      ) : null}
    </div>
  );
};

export default WorkDetail;
