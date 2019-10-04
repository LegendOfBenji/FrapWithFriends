export const fetchEvents = () => (
    $.ajax({
        method: "GET",
        url: "api/events"
    })
)

export const fetchEvent = () => (
    $.ajax({
        method: "GET",
        url: "api/event/"
    })
)