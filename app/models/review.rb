class Review < ApplicationRecord
    belongs_to :bird_house
    belongs_to :user
end
