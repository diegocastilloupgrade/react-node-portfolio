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
  }, []);
  return (
    <section className='pfContainer worksGallery'>
      <h1>Works Diego</h1>
      <div className='worksContainerList'>
        {worksDiego.map((workDiego) => (
          <article className='workContainer' key={workDiego._id}>
            <img src={workDiego.picture} alt={workDiego.nombre_proyecto} />
            <dl className='work'>
              <dt>
                <img src={workDiego.company_picture} alt={workDiego.company} />
                <h2>{workDiego.nombre_proyecto}</h2>
              </dt>
              <dd className='short_description'>
                {workDiego.descripcion_breve}
              </dd>
              <dd className='company'>{workDiego.company}</dd>
              <dd>{workDiego.descripcion_larga}</dd>
              <dd className='tech'>
                <span>Tecnología</span>
                <ul>
                  {workDiego.tecnologia.map((item) => (
                    <li key={item} className={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <button
              className='seeDetail'
              key={workDiego._id}
              to={`/works/${workDiego.nombre_proyecto}`}>
              Ver detalle
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorksGallery;
