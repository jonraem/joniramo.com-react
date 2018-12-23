import React, { Component } from 'react';

import './Footer.css';

export class Footer extends Component {
  render() {
    const today = new Date();

    return (
      <footer className="App__footer">
        <p>© Joni Rämö {today.getFullYear()}</p>
      </footer>
    );
  }
}

export default Footer;
