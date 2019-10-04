import { RECEIVE_ALL_EVENTS } from '../actions/event_actions';
import { merge } from 'lodash';

export default (state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_EVENTS:
        return merge({}, action.events)
        default:
            return state;
    }
}