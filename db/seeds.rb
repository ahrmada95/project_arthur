# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
tags = ['exciting', 'knowledgeable', 'exotic', 'crazy', 'cheap', 'precious', 'glamorous', 'pleasant', 'hypnotic', 'animated', 'fancy', 'overrated
', 'entertaining', 'different', 'graceful', 'instinctive']








puts "📃 Seeding data..."

25.times do
    User.create!(first_name: Faker::Name.unique.first_name ,last_name: Faker::Name.unique.last_name ,email: Faker::Internet.email, password_digest: Faker::Internet.password )
end

client1 = Client.create!(user_id: User.all.sample.id)
client2 = Client.create!(user_id: User.all.sample.id)
client3 = Client.create!(user_id: User.all.sample.id)
client4 = Client.create!(user_id: User.all.sample.id)
client5 = Client.create!(user_id: User.all.sample.id)


# what is seller raiting 
20.times do
    Seller.create!(user_id: User.all.sample.id, raiting:???????, bio: Faker::Lorem.paragraph_by_chars)
end


Listing.create!(name: ?????? , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/arthur-franklin-EIuqUQddc3Q-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/campaign-creators-yktK2qaiVHI-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/chris-ried-ieic5Tq8YMk-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/christin-hume-Hcfwew744z4-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/clement-helardot-95YRwf6CNw8-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/daniel-mccullough-80VTQEkRh1c-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/daniele-franchi-GbAEJUJKJ88-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/daniele-franchi-VP5R-n47v9Q-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/diego-ph-fIq0tET6llw-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/emile-perron-xrVDYZRGdw4-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/faisal-BI465ksrlWs-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/firmbee-com-gcsNOsPEXfs-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/firmbee-com-gcsNOsPEXfs-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/headway-5QgIuuBxKwM-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/hitesh-choudhary-D9Zow2REm8U-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/jason-goodman-Oalh2MojUuk-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/jeshoots-com-pUAM5hPaCRI-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/john-schnobrich-FlPc9_VocJ4-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/mailchimp-04X1Yp9hNH8-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/markus-winkler-IrRbSND5EUc-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/marvin-meyer-SYTO3xs06fU-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/merakist-CNbRsQj8mHQ-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/michal-czyz-ALM7RNZuDH8-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/mika-baumeister-Wpnoqo2plFA-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/client/pictures/path-digital-tR0jvlsmCuQ-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/scott-graham-OQMZwNd3ThU-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/startae-team-QEsaXprgVfQ-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/client/pictures/van-tay-media-TFFn3BYLc5s-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/markus-winkler-IrRbSND5EUc-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../client/pictures/marvin-meyer-SYTO3xs06fU-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )



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