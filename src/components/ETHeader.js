import React from 'react';
import Logo from '../img/ET_Logo.png';
import '../styles/ETHeader.css';
import { Link } from 'react-router-dom';

function ETHeader() {
  return (
    <header className="ETMain-header">
      <Link to="/ETMain">
        <img className="ETMain-Logo" src={Logo}></img>
      </Link>
      <div className="input-area">
        <span className="material-symbols-outlined search-icon">search</span>
        <input className="search" type="text"></input>
      </div>
    </header>
  );
}

export default ETHeader;
