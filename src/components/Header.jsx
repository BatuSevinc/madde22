import React from 'react';
import Logo from '../assets/Exclude.png';


const Header = () => {
  return (
    <div>
      <div className="header">
        <img className="headerLogo" src={Logo} alt="Logo" />
        <h1 className="headerTitle">ETKİNLİKLER</h1>
      </div>
    </div>
  );
};

export default Header;
