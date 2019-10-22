import { RECEIVE_ATTENDEE } from '../actions/attendee_actions';

const attendeesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ATTENDEE:
      return action.attendee;
    default:
      return state;
  }
};

export default attendeesReducer;