import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";
export const REMOVE_ATTENDEE = "REMOVE_ATTENDEE"
export const REMOVE_EVENT = "REMOVE_EVENT"

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
}) 

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})

const deleteEvent = event => ({
  type: REMOVE_EVENT,
  event
})

const deleteAttendee = attendee => ({
  type: REMOVE_ATTENDEE,
  attendee
})

export const signup = user => dispatch => (
  ApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const login = user => dispatch => (
  ApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const logout = user => dispatch => (
  ApiUtil.logout(user)
    .then(() => dispatch(logoutCurrentUser(user)))
)

export const fetchUser = () => dispatch => (
  ApiUtil.receiveUser()
    .then(user => dispatch(receiveCurrentUser(user)))
)

export const removeAttendee = () => dispatch => (
  ApiUtil.deleteAttendee(id)
    .then((attendee) => dispatch(deleteAttendee(attendee)))
)

export const removeEvent = id => dispatch => (
    ApiUtil.deleteEvent(id)
      .then((event) => dispatch(deleteEvent(event)))
  )