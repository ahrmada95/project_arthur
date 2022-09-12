# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "📃 Seeding data..."

25.times do
    User.create!(first_name: Faker::Name.unique.first_name ,last_name: Faker::Name.unique.last_name ,email: Faker::Internet.email, password_digest: ???????????? )
end

client1 = Client.create!(user_id: User.all.sample.id)
client2 = Client.create!(user_id: User.all.sample.id)
client3 = Client.create!(user_id: User.all.sample.id)
client4 = Client.create!(user_id: User.all.sample.id)
client5 = Client.create!(user_id: User.all.sample.id)

20.times do
    Seller.create!(user_id: User.all.sample.id, raiting:???????, bio: Faker::Lorem.paragraph_by_chars)
end


20.times do
    Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: ????????????????? , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: ????????? )
end

20.times do
    Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: ????????????????? , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: ????????? )
end


50.times do
    Review.create!(seller_id: Seller.all.sample.id, client_id: Client.all.sample.id, score: Faker::Number.within(range: 1..5))
end

# Listing can have few transactions
# Seller can have few transation
# Client can have few transation
50.times do
    Transaction.create!(listing_id: Listing.all.sample.id, seller_id: Seller.all.sample.id, client_id: Client.all.sample.id, status: "test")
end

# Should have Unique transaction!
transactions = Transaction.all
transactions.each do |t|
    Invoice.create!(transaction_id: t.id, paid: [true, false].sample)
end

puts "✅ Done seeding"