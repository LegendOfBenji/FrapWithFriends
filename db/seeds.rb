# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Location.delete_all
Event.delete_all

u1 = User.create!(username: "Kiki", email: "Kiki@KikisDeliveryService.com", password: "password")
u2 = User.create!(username: "Totoro", email: "Totoro@MyNeighborTotoro.com", password: "password")
u3 = User.create!(username: "Howl", email: "Howl@HowlsMovingCastle.com", password: "password")
u4 = User.create!(username: "Mononoke", email: "Mononoke@PrincessMononoke.com", password: "password")

l1 = Location.create!(lat: 40.747149, lng: -73.989218)
l2 = Location.create!(lat: 40.748359, lng: -73.985008)
l3 = Location.create!(lat: 40.741139, lng: -74.001219)
l4 = Location.create!(lat: 40.751416, lng: -73.984223)

e1 = Event.create!(name: "Witch gathering", body: "Witches unite! Spells, recipes, & more.", openings: 3, location_id: l2.id, host_id: u1.id)
e2 = Event.create!(name: "Fuzzy get together", body: "Come if you are/if you like stuffed animals", openings: 3, location_id: l1.id, host_id: u2.id)
e3 = Event.create!(name: "Castle time", body: "Welcome to my moving castle, you will be sure to enjoy your stay.", openings: 3, location_id: l3.id, host_id: u4.id)
e4 = Event.create!(name: "Princesses only", body: "Are you royalty? You better be, because this is one exclusive gathering.", openings: 3, location_id: l4.id, host_id: u3.id)

a1 = Attendee.create!(user_id: u3.id, event_id: e4.id)
a2 = Attendee.create!(user_id: u2.id, event_id: e1.id)
a3 = Attendee.create!(user_id: u1.id, event_id: e2.id)
a4 = Attendee.create!(user_id: u4.id, event_id: e3.id)