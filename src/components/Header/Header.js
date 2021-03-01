import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaseballBall } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="Header">
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 text-white">
            <FontAwesomeIcon icon={faBaseballBall} /> Cricket Manager
          </span>
        </div>
      </nav>
    </div>
  )
}

export default Header;
