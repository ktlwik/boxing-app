import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
    <AppRoutes />
  </Provider>,
  document.getElementById('root'),
);
