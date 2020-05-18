import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, { Provider } from './context/store';

ReactDOM.render(
  <Provider value={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
