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

//TODO: createEvent, updateEvent(for when a user joins an event), deleteEvent