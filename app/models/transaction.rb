class Transaction < ApplicationRecord
    belongs_to :seller
    has_one :invoice
end
