import React from 'react';
import ReactDOM from 'react-dom';
import Snowfall from './Snowfall';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Snowfall />, div);
});
