# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding spices..."

#create users
puts 'Seeding users..'

user1 = User.create(username: 'feathers')
user2 = User.create(username: 'blackbird')
user3 = User.create(username: 'songbird')
user4 = User.create(username: 'beaky')
user5 = User.create(username: 'wings')

# create bird houses
puts 'Seeding Bird houses..'

bird_house1 = BirdHouse.create(name: 'Zen house' , description: 'Birds will love the calming vibe of this house', image: 'https://images.pexels.com/photos/2925015/pexels-photo-2925015.jpeg?auto=compress&cs=tinysrgb&w=800', price: 50)
bird_house2 = BirdHouse.create(name: 'Love nest' , description: 'For all the love birds out there', image: 'https://images.pexels.com/photos/14352624/pexels-photo-14352624.jpeg?auto=compress&cs=tinysrgb&w=800', price: 40)
bird_house3 = BirdHouse.create(name: 'Suburban dream' , description: "Ideal for those birds who like living in the 'burbs", image: 'https://images.pexels.com/photos/7965255/pexels-photo-7965255.jpeg?auto=compress&cs=tinysrgb&w=800', price: 65)
bird_house4 = BirdHouse.create(name: 'Farmers delight' , description: 'Beautiful barn style house for the country birds', image: 'https://images.pexels.com/photos/8811511/pexels-photo-8811511.jpeg?auto=compress&cs=tinysrgb&w=800', price: 60)
bird_house5 = BirdHouse.create(name: 'Fairytale castle' , description: 'Birds will live happily ever after in this house', image: 'https://images.pexels.com/photos/14988378/pexels-photo-14988378.jpeg?auto=compress&cs=tinysrgb&w=800', price: 45)
bird_house6 = BirdHouse.create(name: 'Magic garden' , description: 'This house oozes magical forest charm', image: 'https://images.pexels.com/photos/2640604/pexels-photo-2640604.jpeg?auto=compress&cs=tinysrgb&w=800', price: 55)
bird_house7 = BirdHouse.create(name: 'Scandanavian chic' , description: 'If you love Ikea you will love this house', image: 'https://images.pexels.com/photos/2604668/pexels-photo-2604668.jpeg?auto=compress&cs=tinysrgb&w=800', price: 35)
bird_house8 = BirdHouse.create(name: 'Parish house' , description: 'Perfect house for the church going birds', image: 'https://images.pexels.com/photos/15493499/pexels-photo-15493499.png?auto=compress&cs=tinysrgb&w=800', price: 45)
bird_house9 = BirdHouse.create(name: 'Vintage delight' , description: 'A quirky retreat for the more retro birds', image: 'https://images.pexels.com/photos/11589651/pexels-photo-11589651.jpeg?auto=compress&cs=tinysrgb&w=800', price: 40)
bird_house10 = BirdHouse.create(name: 'Keep it simple' , description: 'Simple design for the no fuss birds', image: 'https://images.pexels.com/photos/1359565/pexels-photo-1359565.jpeg?auto=compress&cs=tinysrgb&w=800', price: 20)

#create reviews

puts 'Seeding Reviews..'

Review.create(content: 'Peaceful paradise', rating: 5, user_id: user1.id, bird_house_id: bird_house1.id)
Review.create(content: 'Too noisy', rating: 2, user_id: user1.id, bird_house_id: bird_house1.id)
Review.create(content: 'Cosy couple retreat', rating: 4, user_id: user2.id, bird_house_id: bird_house2.id)
Review.create(content: 'Love this!', rating: 5, user_id: user2.id, bird_house_id: bird_house2.id)
Review.create(content: 'Perfect for the family', rating: 5, user_id: user1.id, bird_house_id: bird_house3.id)
Review.create(content: 'Nice but not quite for me', rating: 3, user_id: user1.id, bird_house_id: bird_house3.id)
Review.create(content: 'Great space', rating: 4, user_id: user3.id, bird_house_id: bird_house4.id)
Review.create(content: 'Perfect abode for country living', rating: 5, user_id: user3.id, bird_house_id: bird_house4.id)
Review.create(content: 'I feel like a princess in this castle', rating: 5, user_id: user4.id, bird_house_id: bird_house5.id)
Review.create(content: 'Love the big windows', rating: 4.5, user_id: user4.id, bird_house_id: bird_house5.id)
Review.create(content: 'Fits in great with the forest surroundings', rating: 4, user_id: user5.id, bird_house_id: bird_house6.id)
Review.create(content: 'The stairs are my favourite', rating: 4.5, user_id: user5.id, bird_house_id: bird_house6.id)
Review.create(content: 'Clean, minimal and stylish', rating: 5, user_id: user1.id, bird_house_id: bird_house7.id)
Review.create(content: 'Not a fan of the metal cage look', rating: 2.5, user_id: user1.id, bird_house_id: bird_house7.id)
Review.create(content: 'Just heavenly', rating: 5, user_id: user2.id, bird_house_id: bird_house8.id)
Review.create(content: 'I feel blessed having a house so nice', rating: 5, user_id: user2.id, bird_house_id: bird_house8.id)
Review.create(content: 'All metal, gets too hot!', rating: 1.5, user_id: user3.id, bird_house_id: bird_house9.id)
Review.create(content: 'Absolutely love love this', rating: 5, user_id: user4.id, bird_house_id: bird_house9.id)
Review.create(content: 'Nice and traditional nothing more needed', rating: 5, user_id: user5.id, bird_house_id: bird_house10.id)
Review.create(content: 'Functional but a bit bland', rating: 3, user_id: user3.id, bird_house_id: bird_house10.id)


puts "✅ Done seeding!"