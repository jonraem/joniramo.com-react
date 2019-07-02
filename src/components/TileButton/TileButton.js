import React from 'react'
import classnames from 'classnames';
import './TileButton.scss';

const TileButton = ({ className, link, label, ariaLabel, iconClassName }) => {
  const buttonClassName = classnames('App__tile-button', 'animated-button', 'thar-three', className);
  return (
    <a className={buttonClassName} href={link} rel="noopener noreferrer" aria-label={ariaLabel}>
      <span className={!!iconClassName && 'App__tile-button-label'}>
        {label}
      </span>
      {!!iconClassName && (
        <i className={iconClassName} aria-hidden="true"></i>
      )}
    </a>
  );
}

export default TileButton;
