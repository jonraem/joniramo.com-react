import React, { Component } from 'react';

import './Buttons.css';

export class Header extends Component {
  render() {
    return (
      <div className="App-buttons-container">
        <div className="App-buttons">
          <a href="https://github.com/jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three gh" aria-label="Link to Github">
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://fi.linkedin.com/in/joni-rämö-59668988" rel="noopener noreferrer" className="App-button animated-button thar-three li" aria-label="Link to LinkedIn">
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three tw" aria-label="Link to Twitter">
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://medium.com/@jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three me" aria-label="Link to Medium">
            <i className="fab fa-medium-m" aria-hidden="true"></i>
          </a>
          <a href="https://instagram.com/jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three ig" aria-label="Link to Instagram">
            <i className="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="mailto:joni@joniramo.com" className="App-button animated-button thar-three em">
            <span>Send me email</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
