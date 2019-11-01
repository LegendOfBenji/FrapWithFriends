import * as EventApiUtil from '../util/event_api_util';

export const RECEIVE_ALL_EVENTS = "RECEIVE_ALL_EVENTS";
export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const REMOVE_EVENT = "REMOVE_EVENT";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveAllEvents = events => ({
    type: RECEIVE_ALL_EVENTS,
    events
})

const receiveEvent = event => ({
    type: RECEIVE_EVENT,
    event
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const removeEvent = event => ({
    type: REMOVE_EVENT,
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
        .then(event => dispatch(receiveEvent(event)),
        err => dispatch(receiveErrors(err.responseJSON)))
)

export const deleteEvent = id => dispatch => (
    EventApiUtil.deleteEvent(id)
        .then(event => dispatch(removeEvent(event)))
)