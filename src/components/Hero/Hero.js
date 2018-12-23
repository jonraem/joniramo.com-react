import React, { Component } from 'react';
import moment from 'moment';
import ReactSVG from 'react-svg';

import Snowfall from '../Snowfall/Snowfall';
import signature from '../../assets/img/signature.svg';
import './Hero.css';

export class Hero extends Component {
  render() {
    const isChristmasTime = moment().month() === 11;

    return (
      <div className="App__hero">
        <div className="App__hero-overlay">
          {isChristmasTime && (
            <Snowfall />
          )}
        </div>
        <div className="App__hero-logo">
          <ReactSVG path={signature} alt="Logo" />
        </div>
      </div>
    );
  }
}

export default Hero;
