import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Buttons from '../../components/Buttons/Buttons';
import Footer from '../../components/Footer/Footer';
import './App.css';

export class App extends Component {
  componentWillMount() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css?family=Roboto+Mono';

    const script = document.createElement('script');
    script.src = 'https://use.fontawesome.com/releases/v5.0.2/js/all.js';
    script.defer = true;

    document.head.appendChild(link);
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
              Hello, my name is Joni. I'm a <u>web developer</u> from the beautiful city of Turku in Finland. I love practical design, solving creative challenges and researching business and psychology.
            </p>
            <p>
              Find out more about me and get in touch with me for any inquiries or simply to say hi.
            </p>
            <p>
              And stay awesome.
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
