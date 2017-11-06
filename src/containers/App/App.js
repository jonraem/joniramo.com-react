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
    script.src = 'https://use.fontawesome.com/8d1def7579.js';
    script.async = true;

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
              Hello, my name is Joni Rämö. I'm a <u>web developer</u> and <u>entrepreneur</u> from the beautiful city of Turku in Finland.
            </p>
            <p>
              Find out more about me or drop me an email to say hello!
            </p>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
