import React, { Component } from 'react';
import ReactSVG from 'react-svg';

import signature from '../../assets/img/signature.svg';
import './Header.css';

export class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="overlay"/>
        <div className="App-logo">
          <ReactSVG path={signature} alt="Logo"/>
        </div>
      </header>
    );
  }
}

export default Header;
