import React from 'react';
import ReactDOM from 'react-dom';

import './scss/styles.scss';

const container = document.getElementById('root-container');

if (container != null) {
  ReactDOM.render(
      <div className="container">
        <h1 className="title">Hello, world!</h1>
      </div>,
      container);
}
