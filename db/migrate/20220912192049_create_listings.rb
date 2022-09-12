class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.string :images
      t.boolean :active
      t.integer :seller_id
      t.string :tags

      t.timestamps
    end
  end
end
