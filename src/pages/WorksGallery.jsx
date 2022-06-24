import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WorksGallery.scss';
import { Link } from 'react-router-dom';

const WorksGallery = () => {
  const [worksDiego, setWorksDiego] = useState([]);

  useEffect(() => {
    const getWorksDiego = async () => {
      const res = await axios.get('http://localhost:5000/works');
      setWorksDiego(res.data.data.works);
      console.log('worksDiego', worksDiego);
    };
    getWorksDiego();
  },[]);
  return (
      <section className='worksGallery'>
        <h2>Works Diego</h2>
        {worksDiego.map((workDiego) => (
          <article>
            <ul className='work'>
              <li>{workDiego._id}</li>
              <li>{workDiego.nombre_proyecto}</li>
              <li>{workDiego.descripcion_breve}</li>
              <li>{workDiego.descripcion_larga}</li>
            </ul>
            <Link key={workDiego._id} to={`/works/${workDiego.nombre_proyecto}`}>
              Ver detalle
            </Link>
          </article>
        ))}
      </section>
  );
};

export default WorksGallery;
