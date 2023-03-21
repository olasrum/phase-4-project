class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :content, :rating, :user_id, :bird_house_id

  belongs_to :bird_house
  belongs_to :user
end
