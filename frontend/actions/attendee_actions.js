import * as attendeeApiUtil from '../util/attendee_api_util';

export const RECEIVE_ATTENDEE = "RECEIVE_ATTENDEE"

const receiveAttendee = attendee => ({
  type: RECEIVE_ATTENDEE,
  attendee
})


export const createAttendee = attendee => dispatch => (
  attendeeApiUtil.createAttendee(attendee)
    .then(attendee => dispatch(receiveAttendee(attendee)))
)