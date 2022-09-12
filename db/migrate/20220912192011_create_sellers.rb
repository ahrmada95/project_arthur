class CreateSellers < ActiveRecord::Migration[7.0]
  def change
    create_table :sellers do |t|
      t.integer :user_id
      t.integer :rating
      t.string :bio

      t.timestamps
    end
  end
end
