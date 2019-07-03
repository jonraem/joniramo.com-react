import React from 'react';
import classnames from 'classnames';
import './TileText.scss';

const getTextForTile = hoveredTile => {
  switch (hoveredTile) {
    case 'extra':
      return 'Hi! My name is Joni.';
    case 'github':
      return 'Check out my Github page.';
    case 'linkedin':
      return 'Network with me on LinkedIn.';
    case 'twitter':
      return 'Send me a Tweet.';
    case 'email':
      return 'Drop me an email.';
    default:
      break;
  }
}

const TileText = ({ hoveredTile }) => {
  const tileClassName = classnames('tile-text', hoveredTile);
  return (
    <div className={tileClassName}>{getTextForTile(hoveredTile)}</div>
  );
}

export default TileText;
