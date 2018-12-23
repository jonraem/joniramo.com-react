import React, { Component } from 'react';
import classnames from 'classnames';
import ReactSVG from 'react-svg';
import Christmas from '../Christmas/Christmas';
import { isChristmasTime } from '../../utils/helpers';
import signature from '../../assets/svg/signature.svg';
import './Hero.scss';

export class Hero extends Component {
  render() {
    let heroClassName = 'App__hero';
    if (isChristmasTime) {
      heroClassName = classnames(heroClassName, 'App__hero--xmas');
    }

    return (
      <div className={heroClassName}>
        <div className="App__hero-overlay">
          {isChristmasTime && (
            <Christmas />
          )}
        </div>
        <ReactSVG
          src={signature}
          className="App__hero-logo"
          alt="Joni Rämö"
        />
      </div>
    );
  }
}

export default Hero;
