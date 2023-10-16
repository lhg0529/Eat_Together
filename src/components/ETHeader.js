import React from 'react';
import Logo from '../img/ET_Logo.png';
import '../styles/ETHeader.css';
import { Link, useLocation } from 'react-router-dom';

function ETHeader({ name }) {
  const path = useLocation().pathname;

  function HeaderName() {
    switch (path) {
      case '/ETSearch':
        name = '찾기';
        break;
      default:
    }
  }
  function mainHeader() {
    return (
      <>
        <Link to="/ETMain">
          <img className="ETMain-Logo" src={Logo}></img>
        </Link>
        <div className="input-area">
          <span className="material-symbols-outlined search-icon">search</span>
          <input className="search" type="text"></input>
        </div>
      </>
    );
  }
  function otherHeader() {
    return (
      <>
        {/* <Link to="/ETMain">
          <span className="material-symbols-outlined other-back">
            chevron_left
          </span>
        </Link> */}
        <Link to="/ETMain">
          <img className="ETMain-Logo" src={Logo}></img>
        </Link>
        <h1 className="head-name">{name}</h1>
      </>
    );
  }
  return (
    <header className="ETMain-header">
      {path === '/ETMain' ? mainHeader() : otherHeader()}
    </header>
  );
}

export default ETHeader;
