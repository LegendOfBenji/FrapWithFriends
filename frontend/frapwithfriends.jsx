import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login, signup, logout, fetchUser } from './actions/session_actions';
import { fetchEvents, fetchEvent, createEvent } from './actions/event_actions';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  // TESTING //
  window.store = store;
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.fetchEvents = fetchEvents;
  window.fetchEvent = fetchEvent;
  window.createEvent = createEvent;
  window.fetchUser = fetchUser;
  // TESTING //

  ReactDOM.render(<Root store={store} />, root)
})