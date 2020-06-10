import React from 'react';
import ReactDOM from 'react-dom';

import './scss/styles.scss';

import App from './components/App';

const container = document.getElementById('root-container');

if (container != null) {
  ReactDOM.render(
      <App />,
      container);
}
