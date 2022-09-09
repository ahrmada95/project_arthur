class CreateInvoices < ActiveRecord::Migration[7.0]
  def change
    create_table :invoices do |t|
      t.integer :transaction_id
      t.boolean :paid

      t.timestamps
    end
  end
end
