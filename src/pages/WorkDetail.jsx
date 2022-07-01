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
      console.log('workDiego ES:', workDiego);
    };
    getWorkByName();
  }, []);

  return (
    <section className='pfContainer workDetail'>
      <Link key={workDiego._id} to={`/works`}>
        Volver a trabajos
      </Link>
      {workDiego && (
        <>
          <div className='workDetailContainer'>
            <img src={workDiego.picture} alt={workDiego.nombre_proyecto} />
            <ul>
              <li className='nombre_proyecto'>
                <h1>{workDiego.nombre_proyecto}</h1>
              </li>
              <li className='descripcion_breve'>
                {workDiego.descripcion_breve}
              </li>
              <li className='company_data'>
                <img src={workDiego.company_picture} alt={workDiego.company} />
                {workDiego.company}
              </li>
              <li className='descripcion_larga'>
                {workDiego.descripcion_larga}
              </li>
              <li className='url'>
                <a href={workDiego.url}>Ver proyecto</a>
              </li>
              <li>{workDiego.date}</li>
              <li>{workDiego.img}</li>
              <li>{workDiego.disciplina}</li>
              <li className='techContainer'>
              <span>Tecnología</span>
                <ul>
                  {workDiego.tecnologia.map((item) => (
                    <li key={item} className={item}>{item}</li>
                  ))}
                </ul>

              </li>
            </ul>
          </div>
        </>
      )}
    </section>
  );
};

export default WorkDetail;
