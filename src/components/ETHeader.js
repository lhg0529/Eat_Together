import React from 'react';
import Logo from '../img/ET_Logo.png';
import '../styles/ETHeader.css';

function ETHeader() {
  return (
    <header className="ETMain-header">
      <img className="ETMain-Logo" src={Logo}></img>
      <div className="input-area">
        <span class="material-symbols-outlined search-icon">search</span>
        <input className="search" type="text"></input>
      </div>
    </header>
  );
}

export default ETHeader;
