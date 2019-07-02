import React, { Component } from 'react';
import TileButton from '../TileButton/TileButton';
import joniRamoPath from '../../assets/img/joni-ramo.jpg';
import './Buttons.scss';

export class Buttons extends Component {
  render() {
    return (
      <div className="App__buttons-container">
        <div className="App__buttons">
          <TileButton
            className="gh"
            iconClassName="fab fa-github"
            link="https://github.com/jonraem"
            label="Github"
            ariaLabel="Link to Github"
          />
          <TileButton
            className="li"
            iconClassName="fab fa-linkedin"
            link="https://fi.linkedin.com/in/joni-rämö-59668988"
            label="LinkedIn"
            ariaLabel="Link to LinkedIn"
          />
          <TileButton
            className="tw"
            iconClassName="fab fa-twitter"
            link="https://twitter.com/jonraem"
            label="Twitter"
            ariaLabel="Link to Twitter"
          />
          <TileButton
            className="me"
            iconClassName="fab fa-medium-m"
            link="https://medium.com/@jonraem"
            label="Medium"
            ariaLabel="Link to Medium"
          />
          <TileButton
            className="em"
            link="mailto:joni@joniramo.com"
            label="Send me email"
            ariaLabel="Link to send email"
            showLabelAlways={true}
          />
          <TileButton
            className="extra"
            onClick={() => {}}
            imageSrc={joniRamoPath}
            ariaLabel="Photo of Joni Rämö"
          />
        </div>
      </div>
    );
  }
}

export default Buttons;
