class CreateTransactions < ActiveRecord::Migration[7.0]
  def change
    create_table :transactions do |t|
      t.integer :listing_id
      t.integer :seller_id
      t.integer :client_id
      t.string :status

      t.timestamps
    end
  end
end
