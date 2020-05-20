import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserStateProvider } from './context/store';

ReactDOM.render(
  <UserStateProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserStateProvider>,
  document.getElementById('root')
);
