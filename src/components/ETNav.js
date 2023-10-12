import React from 'react';
import '../styles/ETNav.css';
import { Link } from 'react-router-dom';

function ETNav() {
  return (
    <div className="nav">
      <Link to="/ETMain">
        <span className="material-symbols-outlined">format_list_bulleted</span>
      </Link>
      <Link to="/ETSearch">
        <span className="material-symbols-outlined">search</span>
      </Link>
      <span className="material-symbols-outlined">event_note</span>
      <span className="material-symbols-outlined">person</span>
    </div>
  );
}

export default ETNav;
