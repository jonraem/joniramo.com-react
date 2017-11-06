import React, { Component } from 'react';

import './Buttons.css';

export class Header extends Component {
  render() {
    return (
      <div className="App-buttons-container">
        <div className="App-buttons">
          <a href="https://github.com/jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three gh" aria-label="Link to Github">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://fi.linkedin.com/in/joni-rämö-59668988" rel="noopener noreferrer" className="App-button animated-button thar-three li" aria-label="Link to LinkedIn">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three tw" aria-label="Link to Twitter">
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://medium.com/@jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three me" aria-label="Link to Medium">
            <i className="fa fa-medium" aria-hidden="true"></i>
          </a>
          <a href="https://instagram.com/jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three ig" aria-label="Link to Instagram">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="mailto:joni@joniramo.com" className="App-button animated-button thar-three em">
            <span>Email me</span>
            <span className="at-sign">@</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
