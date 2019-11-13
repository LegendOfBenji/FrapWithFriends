import { RECEIVE_CURRENT_USER, REMOVE_ATTENDEE, REMOVE_EVENT } from "../actions/session_actions";
import { merge } from "lodash";

const usersReducer = (state = {}, action) => {
  let newState;
  let userId;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        [action.user.id]: action.user
      };
    case REMOVE_ATTENDEE:
      newState = state;
      userId = Object.keys(newState)
      newState[userId[0]].events = action.attendee.events
      return newState;
    case REMOVE_EVENT:
      newState = state;
      userId = Object.keys(newState)
      newState[userId[0]].hosted_events = action.event.hosted_events
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
