json.partial! "api/users/user", user: @user

json.events do
    json.array!(@events) do |attended_event|
        json.photoUrl url_for(attended_event.photo)
        json.username attended_event.host.username
        json.date attended_event.date
        json.time attended_event.time
        json.name attended_event.name
    end
end

json.hosted_events do
    json.array!(@hosted_events) do |hosted_event|
        json.photoUrl url_for(hosted_event.photo)
        json.username hosted_event.host.username
        json.date hosted_event.date
        json.time hosted_event.time
        json.name hosted_event.name
    end
end
