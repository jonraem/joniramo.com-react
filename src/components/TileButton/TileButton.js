import React from 'react'
import classnames from 'classnames';
import './TileButton.scss';

const TileButton = (props) => {
  const buttonClassName = classnames(
    'App__tile-button',
    'animated-button',
    'thar-three',
    props.className
  );

  return (
    <a className={buttonClassName} href={props.link} rel="noopener noreferrer" aria-label={props.ariaLabel}>
      {!!props.label && (
        <span className={props.showLabelAlways ? undefined : "App__tile-button-label"}>
          {props.label}
        </span>
      )}
      {!!props.iconClassName && (
        <i
          className={classnames('App__tile-button-icon', props.iconClassName)}
          aria-hidden="true"
        />
      )}
      {!!props.imageSrc && (
        <img
          className={classnames('App__tile-button-image', props.imageClassName)}
          src={props.imageSrc}
          alt={props.ariaLabel}
        />
      )}
    </a>
  );
}

export default TileButton;
