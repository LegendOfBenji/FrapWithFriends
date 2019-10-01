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

User.create!(username: "Kiki", email: "Kiki@KikisDeliveryService.com", password: "password")
User.create!(username: "Totoro", email: "Totoro@MyNeighborTotoro.com", password: "password")
User.create!(username: "Howl", email: "Howl@HowlsMovingCastle.com", password: "password")
User.create!(username: "Mononoke", email: "Mononoke@PrincessMononoke.com", password: "password")

# Location.create!(lat: long:)
# Location.create!(lat: long:)
# Location.create!(lat: long:)
# Location.create!(lat: long:)

Event.create!(name: "Witch gathering", body: "Witches unite! Spells, recipes, & more.", openings: 3)
Event.create!(name: "Fuzzy get together", body: "Come if you are/if you like stuffed animals", openings: 3)
Event.create!(name: "Castle time", body: "Welcome to my moving castle, you will be sure to enjoy your stay.", openings: 3)
Event.create!(name: "Princesses only", body: "Are you royalty? You better be, because this is one exclusive gathering.", openings: 3)
