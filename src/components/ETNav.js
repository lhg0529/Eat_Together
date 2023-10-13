import React from 'react';
import '../styles/ETNav.css';
import { Link, useLocation } from 'react-router-dom';

function ETNav() {
  const path = useLocation().pathname;

  return (
    <div className="nav">
      <div className={`container ${path === '/ETMain' ? 'active' : ''}`}>
        <Link to="/ETMain">
          <span className={`material-symbols-outlined`}>
            format_list_bulleted
          </span>
        </Link>
      </div>
      <div className={`container ${path === '/ETSearch' ? 'active' : ''}`}>
        <Link to="/ETSearch">
          <span className={`material-symbols-outlined`}>search</span>
        </Link>
      </div>
      <div className={`container ${path === '/ETRVInfo' ? 'active' : ''}`}>
        <Link to="/ETRVInfo">
          <span className={`material-symbols-outlined`}>event_note</span>
        </Link>
      </div>
      <div className={`container ${path === '' ? 'active' : ''}`}>
        <Link>
          <span className={`material-symbols-outlined`}>person</span>
        </Link>
      </div>
    </div>
  );
}

export default ETNav;
