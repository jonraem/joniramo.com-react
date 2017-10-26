import React, { Component } from 'react';

import './Buttons.css';

export class Header extends Component {
  render() {
    return (
      <div className="App-buttons">
        <a href="https://github.com/jonraem" target="_blank" className="App-button animated-button thar-three gh"><i className="fa fa-github" aria-hidden="true"></i></a>
        <a href="https://fi.linkedin.com/in/joni-rämö-59668988" target="_blank" className="App-button animated-button thar-three li"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        <a href="https://twitter.com/jonraem" target="_blank" className="App-button animated-button thar-three tw"><i className="fa fa-twitter" aria-hidden="true"></i></a>
        <a href="https://medium.com/@jonraem" target="_blank" className="App-button animated-button thar-three me"><i className="fa fa-medium" aria-hidden="true"></i></a>
        <a href="https://instagram.com/jonraem" target="_blank" className="App-button animated-button thar-three ig"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        <a href="mailto:joni@joniramo.com" className="App-button animated-button thar-three em">EMail me</a>
      </div>
    );
  }
}

export default Header;
