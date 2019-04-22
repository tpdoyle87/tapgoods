# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "fetching swanson quotes!"
url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes/100"
response = RestClient.get(url)
quotes = JSON.parse(response)

quotes.each do |quote|
  Quote.create(swanson: quote, length: quote.split.size, votes: 0, value: 0 )
end
puts "Quotes have been collected"
