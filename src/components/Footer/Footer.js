import React, { Component } from 'react';
import { isChristmasTime } from '../../utils/helpers';
import './Footer.scss';

export class Footer extends Component {
  render() {
    const today = new Date();

    return (
      <footer className="App__footer">
        <p>© Joni Rämö {today.getFullYear()}</p>
        {isChristmasTime && (
          <div className="App__footer-attribution">Christmas icons made by <a href="https://www.flaticon.com/authors/dimitry-miroliubov" title="Dimitry Miroliubov">Dimitry Miroliubov</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>.</div>
        )}
      </footer>
    );
  }
}

export default Footer;
