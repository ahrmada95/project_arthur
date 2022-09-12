class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :seller_id
      t.integer :client_id
      t.integer :score

      t.timestamps
    end
  end
end
