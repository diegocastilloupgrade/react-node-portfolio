import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import Caricatura from '../assets/img/casual-life-3d-young-man-sitting-in-front-of-laptop.png';
const Home = () => {
  return (
    <section className='pfContainer'>
      <div className='homeContainer'>
        <div className='homeLeft'>
          <img src={Caricatura} alt='Caricatura de Diego' />
        </div>
        <div className='homeRight'>
          <h1>My Portfolio</h1>
          <Link to='/works' className='homeButton'>
            Ver trabajos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
