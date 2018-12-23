import React, { Component } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import ReactSVG from 'react-svg';

import signature from '../../assets/img/signature.svg';
import './Hero.css';
import './ChristmasOverlay.css';

export class Hero extends Component {
  render() {
    let overlayClassName = 'overlay';
    if (moment().month() === 11) {
      overlayClassName = classnames(overlayClassName, 'snowfall__one', 'snowfall__two', 'snowfall__three');
    }

    return (
      <div className="App__hero">
        <div className="App__hero-overlay" />
        <div className="App__hero-logo">
          <ReactSVG path={signature} alt="Logo" />
        </div>
      </div>
    );
  }
}

export default Hero;
