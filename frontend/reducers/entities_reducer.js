import { combineReducers } from 'redux';
// TODO events/locations go here
import users from './users_reducer';
import events from './events_reducer';
import attendees from './attendees_reducer';

export default combineReducers({
  users,
  events,
  attendees
})