import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import App from './containers/App/App';
import registerServiceWorker from './utils/registerServiceWorker';
import './index.css';

import './assets/js/fontawesome-all.min.js';

ReactGA.initialize('insert-tracking-here');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
