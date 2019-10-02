import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, signup, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  // TESTING //
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.login = login;
  window.signup = signup;
  window.logout = logout;

  ReactDOM.render(<Root store={store} />, root)
})