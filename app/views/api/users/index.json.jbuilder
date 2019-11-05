json.partial! "api/users/user", user: @user

json.events do
    json.array!(@events) do |attended_event|
        json.photoUrl url_for(attended_event.photo)
    end
end

json.hosted_events do
    json.array!(@hosted_events) do |hosted_event|
        json.photoUrl url_for(hosted_event.photo)
    end
end
