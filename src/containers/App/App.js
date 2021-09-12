import React, { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import Buttons from '../../components/Buttons/Buttons';
import Footer from '../../components/Footer/Footer';
import './App.scss';

const getRandomTagline = () => {
  const listOfTaglines = [
    'keep it fresh',
    'stay awesome',
    'strive for greatness',
    'believe in yourself',
    'remember to smile',
    'keep hustling',
    "keep on trucking'",
    'rock on',
    'eat your vegetables',
    'stay hydrated',
    'exercise regularly',
    "don't drink and drive",
    'always wear a helmet',
    'live long and prosper',
    'may the Force be with you',
    'always look on the bright side of life',
  ];
  const max = listOfTaglines.length;
  const randomIndex = Math.floor(Math.random() * Math.floor(max));

  return (
    <span className="App__intro-tagline">{listOfTaglines[randomIndex]}</span>
  );
};

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
        <Hero />
        <div className="App__content">
          <Buttons />
          <div className="App__intro">
            <p>
              Hello, my name is Joni. I'm a <u>web developer</u> currently based
              in the beautiful city of Turku. I love practical design, solving
              creative challenges and meeting new people.
            </p>
            <p>
              Find out more about me, and get in touch with me for any inquiries
              or simply to say hi.
            </p>
            <p>And {getRandomTagline()}.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
