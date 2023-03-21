class BirdHouseSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image, :price

  has_many :reviews
end
