import { RECEIVE_CURRENT_USER, REMOVE_ATTENDEE, REMOVE_EVENT } from "../actions/session_actions";
import { merge } from "lodash";

const usersReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        [action.user.id]: action.user
      };
    case REMOVE_ATTENDEE:
      newState = state;
      newState.events = newState.events.filter(event => event.id !== action.id)
      console.log(newState);
      return newState;
    case REMOVE_EVENT:
      newState = state;
      newState.hosted_events = newState.hosted_events.filter(event => event.id !== action.id)
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
