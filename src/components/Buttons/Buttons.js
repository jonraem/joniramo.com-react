import React, { Component } from 'react';

import './Buttons.css';

export class Header extends Component {
  render() {
    return (
      <div className="App-buttons-container">
        <div className="App-buttons">
          <a href="https://github.com/jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three gh" aria-label="Link to Github">
            <span className="backup-label">Github</span>
            <i className="fab fa-github" aria-hidden="true"></i>
          </a>
          <a href="https://fi.linkedin.com/in/joni-rämö-59668988" rel="noopener noreferrer" className="App-button animated-button thar-three li" aria-label="Link to LinkedIn">
            <span className="backup-label">LinkedIn</span>
            <i className="fab fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://twitter.com/jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three tw" aria-label="Link to Twitter">
            <span className="backup-label">Twitter</span>
            <i className="fab fa-twitter" aria-hidden="true"></i>
          </a>
          <a href="https://medium.com/@jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three me" aria-label="Link to Medium">
            <span className="backup-label">Medium</span>
            <i className="fab fa-medium-m" aria-hidden="true"></i>
          </a>
          <a href="https://instagram.com/jonraem" rel="noopener noreferrer" className="App-button animated-button thar-three ig" aria-label="Link to Instagram">
            <span className="backup-label">Instagr.</span>
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
