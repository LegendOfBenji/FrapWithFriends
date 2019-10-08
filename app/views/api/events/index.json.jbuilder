json.array!(@events) do |event|
    json.partial! 'api/events/event', event: event
       json.username event.host.username
       json.host event.host.id
       json.photoUrl url_for(event.photo)
end 