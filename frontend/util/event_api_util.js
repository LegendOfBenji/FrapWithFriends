export const fetchEvents = () => (
    $.ajax({
        method: "GET",
        url: "api/events"
    })
)

export const fetchEvent = id => (
    $.ajax({
        method: "GET",
        url: `api/events/${id}`
    })
)

export const createEvent = event => (
    $.ajax({
        method: "POST",
        url: "api/events",
        data: event,
        contentType: false,
        processData: false
    })
)

export const deleteEvent = id => (
    $.ajax({
        method: "DELETE",
        url: `api/events/${id}`,
        data: event
    })
)

//TODO: deleteEvent