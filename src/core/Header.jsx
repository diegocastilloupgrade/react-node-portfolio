import React from 'react';
import Navigator from './Navigator';
import './Header.scss';

const Header = () => {
  return (
    <>
      <div className='header'>
        <Navigator></Navigator>
      </div>
    </>
  );
};

export default Header;
