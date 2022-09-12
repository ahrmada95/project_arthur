class Transaction < ApplicationRecord
    belongs_to :seller
    has_many :invoices
end
