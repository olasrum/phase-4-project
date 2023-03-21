class CreateBirdHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :bird_houses do |t|
      t.string :name
      t.string :description
      t.string :image
      t.integer :price

      t.timestamps
    end
  end
end
