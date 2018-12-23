import React from 'react';
import ReactDOM from 'react-dom';
import Christmas from './Christmas';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Christmas />, div);
});
