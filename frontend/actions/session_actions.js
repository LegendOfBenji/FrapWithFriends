import * as ApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

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

export const signup = user => dispatch => (
  ApiUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveErrors(err.responseJSON)))
)

export const login = user => dispatch => (
  ApiUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user))),
    err => dispatch(receiveErrors(err.responseJSON))
)

export const logout = user => dispatch => (
  ApiUtil.logout(user)
    .then(() => dispatch(logoutCurrentUser(user)))
)