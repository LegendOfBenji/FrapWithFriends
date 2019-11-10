export const createAttendee = eventId => (
  $.ajax({
    method: "POST",
    url: "/api/attendees",
    data: {eventId}
  })
)

export const deleteAttendee = userId => (
  $.ajax({
    method: "DELETE",
    url: `/api/attendees/${userId}`
  })
)