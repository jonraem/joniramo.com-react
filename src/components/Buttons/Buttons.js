import React, { Component } from 'react';
import TileButton from '../TileButton/TileButton';
import TileText from '../TileText/TileText';
import joniRamoPath from '../../assets/img/joni-ramo.jpg';
import './Buttons.scss';

export class Buttons extends Component {
  state = {
    hoveredTile: ''
  };

  setHoveredTile = tileName => {
    this.setState({ hoveredTile: tileName });
  };

  unsetHoveredTile = () => {
    this.setState({ hoveredTile: '' })
  }

  render() {
    return (
      <div className="App__buttons-container">
        <div className="App__buttons">
          <TileButton
            className="extra"
            onClick={() => {}}
            onMouseEnter={() => this.setHoveredTile('extra')}
            onMouseLeave={this.unsetHoveredTile}
            imageSrc={joniRamoPath}
            ariaLabel="Photo of Joni Rämö"
          />
          <TileText hoveredTile={this.state.hoveredTile} />
          <TileButton
            className="gh"
            iconClassName="fab fa-github"
            link="https://github.com/jonraem"
            onMouseEnter={() => this.setHoveredTile('github')}
            onMouseLeave={this.unsetHoveredTile}
            label="Github"
            ariaLabel="Link to Github"
          />
          <TileButton
            className="li"
            iconClassName="fab fa-linkedin"
            link="https://fi.linkedin.com/in/joni-rämö-59668988"
            onMouseEnter={() => this.setHoveredTile('linkedin')}
            onMouseLeave={this.unsetHoveredTile}
            label="LinkedIn"
            ariaLabel="Link to LinkedIn"
          />
          <TileButton
            className="tw"
            iconClassName="fab fa-twitter"
            link="https://twitter.com/jonraem"
            onMouseEnter={() => this.setHoveredTile('twitter')}
            onMouseLeave={this.unsetHoveredTile}
            label="Twitter"
            ariaLabel="Link to Twitter"
          />
          <TileButton
            className="em"
            iconClassName="fas fa-at"
            link="mailto:joni@joniramo.com"
            onMouseEnter={() => this.setHoveredTile('email')}
            onMouseLeave={this.unsetHoveredTile}
            label="Send me email"
            ariaLabel="Link to send email"
          />
          {/* <TileButton
            className="me"
            iconClassName="fab fa-medium-m"
            link="https://medium.com/@jonraem"
            onMouseEnter={() => this.setHoveredTile('medium')}
            onMouseLeave={this.unsetHoveredTile}
            label="Medium"
            ariaLabel="Link to Medium"
          /> */}
        </div>
      </div>
    );
  }
}

export default Buttons;
