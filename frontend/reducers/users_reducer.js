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
      break;
    case REMOVE_EVENT:
      newState = state;
      break;
    default:
      return state;
  }
};

export default usersReducer;
