import React from 'react';
import Navigator from './Navigator';
import './Header.scss';
import UserAdmin from '../components/UserAdmin';
const Header = () => {
  return (
    <>
      <div className='header'>
        <Navigator></Navigator>
        <UserAdmin/>
      </div>
    </>
  );
};

export default Header;
