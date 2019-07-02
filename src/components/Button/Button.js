import React from 'react'
import classnames from 'classnames';
import './Button.scss';

const Button = (className, link, label, ariaLabel, iconClassName) => {
  const buttonClassName = classnames('App__button', 'animated-button', 'thar-three', className);
  return (
    <a className={buttonClassName} href={link} rel="noopener noreferrer" aria-label={ariaLabel}>
      <span className="App__button-label">{label}</span>
      {!!iconClassName && (
        <i className={iconClassName} aria-hidden="true"></i>
      )}
    </a>
  );
}

export default Button;
