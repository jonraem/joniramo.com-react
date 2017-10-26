import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Buttons from '../../components/Buttons/Buttons';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);
  }
  
  componentWillMount() {
    const script = document.createElement('script');

    script.src = 'https://use.fontawesome.com/8d1def7579.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-content">
          <Buttons/>
          <div className="App-intro">
            <p>
              Hello, my name is Joni Rämö. I'm a web developer and entrepreneur from the beautiful city of Turku in Finland.
            </p>
            <p>
              Find out more about me or drop me an email to say hello!
            </p>
          </div>
        </div>
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
