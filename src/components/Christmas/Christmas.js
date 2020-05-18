import React from 'react';
import { ReactSVG } from 'react-svg';
import classnames from 'classnames';
import christmasLights from '../../assets/svg/christmas-lights.svg';
import './Christmas.scss';

const Christmas = () => {
  return (
    <div className="Christmas">
      <ReactSVG
        src={christmasLights}
        className={classnames(
          'Christmas__christmas-lights-icon',
          'Christmas__christmas-lights-icon--left'
        )}
      />
      <div className="Christmas__snowfall-one" />
      <div className="Christmas__snowfall-two" />
      <div className="Christmas__snowfall-three" />
      <ReactSVG
        src={christmasLights}
        className={classnames(
          'Christmas__christmas-lights-icon',
          'Christmas__christmas-lights-icon--right'
        )}
      />
    </div>
  );
};

export default Christmas;
