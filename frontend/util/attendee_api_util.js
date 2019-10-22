export const createAttendee = eventId => (
  $.ajax({
    method: "POST",
    url: "/api/attendees",
    data: {eventId}
  })
)