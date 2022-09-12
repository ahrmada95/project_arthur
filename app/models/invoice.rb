class Invoice < ApplicationRecord
    belongs_to :covenant, foreign_key: "transaction_id", class_name: "Transaction"
end
