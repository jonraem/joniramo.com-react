import React from 'react';
import classnames from 'classnames';
import './TileButton.scss';

const TileButton = props => {
  const buttonClassName = classnames(
    'tile-button',
    'animated-button',
    'thar-three',
    props.className
  );

  const TileButtonContent = () => (
    <div className="tile-button__content">
      {!!props.label && (
        <span
          className={props.showLabelAlways ? undefined : 'tile-button__label'}
        >
          {props.label}
        </span>
      )}
      {!!props.iconClassName && (
        <i
          className={classnames('tile-button__icon', props.iconClassName)}
          aria-hidden="true"
        />
      )}
      {!!props.imageSrc && (
        <img
          className={classnames('tile-button__image', props.imageClassName)}
          src={props.imageSrc}
          alt={props.ariaLabel}
        />
      )}
    </div>
  );

  if (props.link) {
    return (
      <a
        className={buttonClassName}
        href={props.link}
        rel="noopener noreferrer"
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        aria-label={props.ariaLabel}
      >
        <TileButtonContent />
      </a>
    );
  } else {
    return (
      <div
        className={buttonClassName}
        onClick={props.onClick}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        aria-label={props.ariaLabel}
      >
        <TileButtonContent />
      </div>
    );
  }
};

export default TileButton;
