# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Event.delete_all

u1 = User.create!(username: "Kiki", email: "Kiki@KikisDeliveryService.com", password: "password")
u2 = User.create!(username: "Totoro", email: "Totoro@MyNeighborTotoro.com", password: "password")
u3 = User.create!(username: "Howl", email: "Howl@HowlsMovingCastle.com", password: "password")
u4 = User.create!(username: "Mononoke", email: "Mononoke@PrincessMononoke.com", password: "password")
u5 = User.create!(username: "Jojo", email: "Jojo@jojo.com", password: "jojosbizzareadventure")
u6 = User.create!(username: "Dio", email: "Dio@dio.com", password: "jojosbizzareadventure")

e1 = Event.new(name: "Witch gathering", openings: 3, lat: 40.747149, lng: -73.989218, host_id: u1.id, date: "Saturday Oct 12", time: "12PM")
e4 = Event.new(name: "Come get your free breakfast", openings: 2, lat: 40.741139, lng: -74.001219, host_id: u3.id, date: "Tuesday Oct 15", time: "7AM")
e5 = Event.new(name: "Dio Time", openings: 1, lat: 40.751416, lng: -73.984223, host_id: u5.id, date: "Tuesday Oct 15", time: "7AM")
e6 = Event.new(name: "Jojo Time", openings: 5, lat: 37.798954, lng: -122.401502, host_id: u6.id, date: "Tuesday Oct 15", time: "7AM", 
summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum commodo condimentum. Aenean non est ut neque iaculis rhoncus vel sed purus.", 
story: "Duis scelerisque neque aliquet dui ornare tincidunt. Cras aliquam tellus eget ante scelerisque tincidunt.", 
discussion: "Phasellus lorem justo, euismod a arcu sed, tincidunt ultrices sapien.",  
quote: "Quisque ultrices molestie metus non finibus.")
e7 = Event.new(name: "Going for broke", openings: 2, lat: 32.790808, lng: -96.797194, host_id: u4.id, date: "Tuesday Oct 15", time: "7AM")
e8 = Event.new(name: "Princesses only", openings: 3, lat: 42.377372, lng: -71.116808, host_id: u2.id, date: "Tuesday Oct 15", time: "7AM")

file1 = open('https://frapwithfriends-seeds.s3.amazonaws.com/kiki.png')
file2 = open('https://frapwithfriends-seeds.s3.amazonaws.com/totoro.jpg')
file3 = open('https://frapwithfriends-seeds.s3.amazonaws.com/truehowl.jpeg')
file4 = open('https://frapwithfriends-seeds.s3.amazonaws.com/mononoke.jpg')
file5 = open('https://frapwithfriends-seeds.s3.amazonaws.com/jojo.png')
file6 = open('https://frapwithfriends-seeds.s3.amazonaws.com/dio.png')

e1.photo.attach(io: file1, filename: 'kiki.png')
e4.photo.attach(io: file3, filename: 'truehowl.jpeg')
e5.photo.attach(io: file5, filename: 'jojo.png')
e6.photo.attach(io: file6, filename: 'dio.png')
e7.photo.attach(io: file4, filename: 'mononoke.jpg')
e8.photo.attach(io: file2, filename: 'totoro.jpg')


e1.save!
e4.save!
e5.save!
e6.save!
e7.save!
e8.save!

a1 = Attendee.create!(user_id: u3.id, event_id: e4.id)
a2 = Attendee.create!(user_id: u2.id, event_id: e1.id)
a3 = Attendee.create!(user_id: u1.id, event_id: e4.id)
a4 = Attendee.create!(user_id: u4.id, event_id: e5.id)

