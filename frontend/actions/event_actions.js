import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";

const receiveAllEvents = events => ({
    type: RECEIVE_ALL_EVENTS,
    events
})

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
})

export const fetchEvents = () => dispatch => (
    EventApiUtil.fetchEvents()
        .then(events => dispatch(receiveAllEvents(events)))
)

export const fetchEvent = id => dispatch => (
    EventApiUtil.fetchEvent(id)
        .then(event => dispatch(receiveEvent(event)))
)

export const createEvent = event => dispatch => (
    EventApiUtil.createEvent(event)
        .then(event => dispatch(receiveEvent(event)))
)