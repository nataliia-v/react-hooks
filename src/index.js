import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Login from './Login';
import RegisterForm from './RegisterForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <RegisterForm />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
