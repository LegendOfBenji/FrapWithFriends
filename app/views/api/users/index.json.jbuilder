json.partial! "api/users/user", user: @user

json.events do
    json.array! @events.each_with_index.to_a do |(attended_event, index)|
        json.id current_user.attended_events[index].id
        json.user_id current_user.id
        json.event_id attended_event.id
        json.photoUrl url_for(attended_event.photo)
        json.username attended_event.host.username
        json.date attended_event.date
        json.time attended_event.time
        json.name attended_event.name
    end
end

json.hosted_events do
    json.array!(@hosted_events) do |hosted_event|
        json.id hosted_event.id
        json.photoUrl url_for(hosted_event.photo)
        json.username hosted_event.host.username
        json.date hosted_event.date
        json.time hosted_event.time
        json.name hosted_event.name
    end
end
