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

  const TileButtonContent = () => (
    <div className="App__tile-button-content">
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
    </div>
  );

    
  if (props.link) {
    return (
      <a className={buttonClassName} href={props.link} rel="noopener noreferrer" aria-label={props.ariaLabel}>
        <TileButtonContent />
      </a>
    );
  } else {
    return (
      <div className={buttonClassName} onClick={props.onClick} aria-label={props.ariaLabel}>
        <TileButtonContent />
      </div>
    );
  }
}

export default TileButton;
