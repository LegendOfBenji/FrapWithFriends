import { RECEIVE_ALL_EVENTS, RECEIVE_EVENT } from '../actions/event_actions';
import { merge } from 'lodash';

const eventsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
        return action.events;
        case RECEIVE_EVENT:
        return  {
            [action.event.id]: action.event
        }
        default:
        return state;
    }
}

export default eventsReducer;