json.partial! "api/users/user", user: @user
json.attended_photoUrl url_for(@events.photo)
json.hosted_photoUrl url_for(@hosted_events.photo)