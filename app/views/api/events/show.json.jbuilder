json.partial! 'api/events/event', event: @event
json.photoUrl url_for(@event.photo)
json.summary @event.summary
json.story @event.story
json.discussion @event.discussion
json.quote @event.quote
json.username @event.host.username
