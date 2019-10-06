json.array!(@events) do |event|
    json.partial! 'api/events/event', event: event
       json.username event.host.username
       json.host event.host.id
       json.lat event.location.lat
       json.lng event.location.lng
       json.photoUrl url_for(event.photo)
    # json.set! :host do 
    #     event.host.username
    # end
end 