import React, { Component } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import ReactSVG from 'react-svg';

import Snowfall from '../Snowfall/Snowfall';
import signature from '../../assets/img/signature.svg';
import './Hero.scss';

export class Hero extends Component {
  render() {
    const isChristmasTime = moment().month() === 11;

    let heroClassName = 'App__hero';
    if (isChristmasTime) {
      heroClassName = classnames(heroClassName, 'App__hero--xmas');
    }

    return (
      <div className={heroClassName}>
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
