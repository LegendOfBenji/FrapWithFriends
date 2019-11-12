export const login = user => (
  $.ajax({
    method: "POST",
    url: "api/session",
    data: { user }
  })
)

export const signup = user => (
  $.ajax({
    method: "POST",
    url: "api/users",
    data: { user }
  })
)

export const logout = () => (
  $.ajax({
    method: "DELETE",
    url: "api/session"
  })
)

export const receiveUser = () => (
  $.ajax({
    method: "GET",
    url: `api/users`
  })
)

export const deleteAttendee = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/attendees/${id}`,
    data: attendee
  })
)

export const deleteEvent = id => (
  $.ajax({
      method: "DELETE",
      url: `api/events/${id}`,
      data: event
  })
)