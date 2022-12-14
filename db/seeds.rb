# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
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
user1 = User.create!(first_name: "John" ,last_name: Faker::Name.unique.last_name ,email: "john@gmail.com", password: 123 )
user2 = User.create!(first_name: "Ashley" ,last_name: Faker::Name.unique.last_name ,email: "ashley@gmail.com", password: 234 )
user3 = User.create!(first_name: "Mark" ,last_name: Faker::Name.unique.last_name ,email: "mark@gmail.com", password: 123 )
user4 = User.create!(first_name: "Jo" ,last_name: Faker::Name.unique.last_name ,email: "jo@gmail.com", password: 234 )
seller1 = Seller.create!(user_id: user4.id, rating: 0, bio: Faker::Lorem.paragraph_by_chars)
seller2 = Seller.create!(user_id: user3.id, rating: 0, bio: Faker::Lorem.paragraph_by_chars)
client1 = Client.create!(user_id: user2.id)
client2 = Client.create!(user_id: user1.id)




25.times do
    User.create!(first_name: Faker::Name.unique.first_name ,last_name: Faker::Name.unique.last_name ,email: Faker::Internet.email, password: Faker::Internet.password )
end


User.create(first_name: "Ahnaf", last_name: "Ahmad", email: "ahnaf@arthur.com", password: "password")

client1 = 
client2 = Client.create!(user_id: User.all.sample.id)
client3 = Client.create!(user_id: User.all.sample.id)
client4 = Client.create!(user_id: User.all.sample.id)
client5 = Client.create!(user_id: User.all.sample.id)


# what is seller raiting 
10.times do
    Seller.create!(user_id: User.all.sample.id, rating: 0, bio: Faker::Lorem.paragraph_by_chars)
end
    



Listing.create!(name: "I will make professional resume design or modern cv template", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../arthur-franklin-EIuqUQddc3Q-unsplash.jpg' , active: [true, false].sample , seller_id: seller1.id , tags: tags.sample(4) )
Listing.create!(name: "I will do minimalist modern and business logo design", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../campaign-creators-yktK2qaiVHI-unsplash.jpg' , active: [true, false].sample , seller_id: seller1.id , tags: tags.sample(4) )
Listing.create!(name: "I will design 3 modern minimalist logo design", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../chris-ried-ieic5Tq8YMk-unsplash.jpg' , active: [true, false].sample , seller_id: seller1.id , tags: tags.sample(4) )
Listing.create!(name: "I will design eye catching and unique infographic resume", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../christin-hume-Hcfwew744z4-unsplash.jpg' , active: [true, false].sample , seller_id:seller1.id , tags: tags.sample(4) )
Listing.create!(name: "I will write csharp gui winforms, cpp, python code for you", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../clement-helardot-95YRwf6CNw8-unsplash.jpg' , active: [true, false].sample , seller_id: seller1.id , tags: tags.sample(4) )
Listing.create!(name: "I will do python programming and python coding", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../daniel-mccullough-80VTQEkRh1c-unsplash.jpg' , active: [true, false].sample , seller_id: seller2.id , tags: tags.sample(4) )
Listing.create!(name: "I will design a graphic resume CV to stand out from competitors" , description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../daniele-franchi-GbAEJUJKJ88-unsplash.jpg' , active: [true, false].sample , seller_id: seller2.id , tags: tags.sample(4) )
Listing.create!(name: "I will do custom coding for your clickfunnels funnels", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../daniele-franchi-VP5R-n47v9Q-unsplash.jpg' , active: [true, false].sample , seller_id: seller2.id , tags: tags.sample(4) )
Listing.create!(name: "I will make a killer infographic resume design and resume writingI will make a killer infographic resume design and resume writing", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../diego-ph-fIq0tET6llw-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will design an outstanding logo", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../emile-perron-xrVDYZRGdw4-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will design modern UI UX design on adobe xd and figma", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../faisal-BI465ksrlWs-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will do UI UX design for your website", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../firmbee-com-gcsNOsPEXfs-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will be your data analyst", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../firmbee-com-gcsNOsPEXfs-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will be your data analyst and visualization expert", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../headway-5QgIuuBxKwM-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will design incredible UI for your website", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../hitesh-choudhary-D9Zow2REm8U-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will be your data analyst and database developer utilizing tableau sql python excel", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../jason-goodman-Oalh2MojUuk-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will do website ui design, dashboard, mobile app UI UX design, ui ux design", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../jeshoots-com-pUAM5hPaCRI-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will design your app ux and ui prototype wireframe", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../john-schnobrich-FlPc9_VocJ4-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will code c cpp csharp python java projects", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will tutor java, cpp, c sharp, database, python, sql and web programming", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../mailchimp-04X1Yp9hNH8-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will develop an investor ready business plan, startups, grants", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../markus-winkler-IrRbSND5EUc-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will create an explainer or commercial video for your business", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../marvin-meyer-SYTO3xs06fU-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will make ajax, javascript, PHP, mysql web app, software rest API", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../merakist-CNbRsQj8mHQ-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will build web application using react js", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../michal-czyz-ALM7RNZuDH8-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will be your expert react js developer", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../mika-baumeister-Wpnoqo2plFA-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will animate your logo with all my skill and creativity", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../path-digital-tR0jvlsmCuQ-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will teach you communication skills to make relationships thrive", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../scott-graham-OQMZwNd3ThU-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will produce you a website with my quality web design skills", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../startae-team-QEsaXprgVfQ-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will develop a business and grant proposal with financial models", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../van-tay-media-TFFn3BYLc5s-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will google adwords search, display, skill shop, and campaign completion in 1 hr", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../markus-winkler-IrRbSND5EUc-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )
Listing.create!(name: "I will be your expert react js developer", description: Faker::Lorem.paragraph_by_chars, price: Faker::Number.within(range: 1..10000) , images: '../marvin-meyer-SYTO3xs06fU-unsplash.jpg' , active: [true, false].sample , seller_id: Seller.all.sample.id , tags: tags.sample(4) )



50.times do
    Review.create!(seller_id: Seller.all.sample.id, client_id: Client.all.sample.id, score: Faker::Number.within(range: 1..5))
end

# Listing can have few transactions
# Seller can have few transation
# Client can have few transation
50.times do
    Transaction.create!(listing_id: Listing.all.sample.id, seller_id: Seller.all.sample.id, client_id: Client.all.sample.id, status: [ 'requested', 'completed', 'in-progress'].sample)
end

Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1.id, client_id: client2.id, status: 'in-progress')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1.id, client_id: client2.id, status: 'completed')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1.id, client_id: client2.id, status: 'requested')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1.id, client_id: client2.id, status: 'in-progress')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1.id, client_id: client2.id, status: 'in-progress')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1.id, client_id: client2.id, status: 'in-progress')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller2.id, client_id: client1.id, status: [ 'requested', 'completed', 'in-progress'].sample)
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller2.id, client_id: client1.id, status: [ 'requested', 'completed', 'in-progress'].sample)
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller2.id, client_id: Client.all.sample.id, status: 'requested')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller2.id, client_id: client1.id, status: 'requested')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller2.id, client_id: Client.all.sample.id, status: 'requested')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller2.id, client_id: Client.all.sample.id, status: 'requested')
# Should have Unique transaction!
new_stuff = Transaction.all
new_stuff.each do |t|
    Invoice.create!(transaction_id: t.id, paid: [true, false].sample)
end


user1000 = User.create( first_name: "ag" ,last_name: "ag" ,email: "ag@ag", password: "123" )
seller1000 = Seller.create(user_id: user1000[:id], rating: 0, bio: Faker::Lorem.paragraph_by_chars)
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: Seller.all.sample.id, client_id: Client.all.sample.id, status: [ 'requested', 'completed', 'in-progress'].sample)
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1000[:id], client_id: Client.all.sample.id, status: 'requested')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1000[:id], client_id: Client.all.sample.id, status: 'requested')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1000[:id], client_id: Client.all.sample.id, status: 'requested')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: Seller.all.sample.id, client_id: Client.all.sample.id, status: [ 'requested', 'completed', 'in-progress'].sample)
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1000[:id], client_id: Client.all.sample.id, status: 'completed')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1000[:id], client_id: Client.all.sample.id, status: 'completed')
Transaction.create!(listing_id: Listing.all.sample.id, seller_id: seller1000[:id], client_id: client2, status: 'in-progress')

puts "✅ Done seeding"