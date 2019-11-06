import { RECEIVE_ATTENDEE, DELETE_ATTENDEE } from '../actions/attendee_actions';

const attendeesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ATTENDEE:
      return action.attendee;
    case DELETE_ATTENDEE:
      return action.attendee;
      // todo
    default:
      return state;
  }
};

export default attendeesReducer;