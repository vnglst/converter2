//
// Copyright (c) 2016 by Koen van Gilst (@vnglst) | MIT license
//

import React from 'react';
import './Navigation.scss';
import Link from '../Link';
import logoImg from '../App/img/logo-vangilst-38x42.png';

function Navigation() {
  return (
    <div className="Header">
      <span className="Logo">
          <a href="/" onClick={Link.handleClick}>
            <img src={logoImg} className="Logo-img" alt="Logo Van Gilst Übersetzungen"/>
          </a>
      </span>
      <ul className="Navigation" role="menu">
        <li className="Navigation-item">
          <a className="Navigation-link" href="/" onClick={Link.handleClick}>Home</a>
        </li>
        <li className="Navigation-item">
          <a className="Navigation-link" href="/about" onClick={Link.handleClick}>About</a>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
