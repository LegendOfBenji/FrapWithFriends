import * as attendeeApiUtil from '../util/attendee_api_util';

export const RECEIVE_ATTENDEE = "RECEIVE_ATTENDEE"
export const DELETE_ATTENDEE = "DELETE_ATTENDEE"

const receiveAttendee = attendee => ({
  type: RECEIVE_ATTENDEE,
  attendee
})

const removeAttendee = attendee => ({
  type: DELETE_ATTENDEE,
  attendee
})

export const createAttendee = attendee => dispatch => (
  attendeeApiUtil.createAttendee(attendee)
    .then(attendee => dispatch(receiveAttendee(attendee)))
)

export const deleteAttendee = id => dispatch => (
  attendeeApiUtil.deleteAttendee(id)
    .then(attendee => dispatch(removeAttendee(attendee)))
)