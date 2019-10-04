json.array!(@events) do |event|
    json.partial! 'api/events/event', event: event
       json.host event.host
end 