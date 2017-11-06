import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import signature from '../../assets/img/signature.svg';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <ReactSVG
          className="App-logo"
          path={signature}
          alt="Logo"
        />
      </header>
    );
  }
}

export default Header;
