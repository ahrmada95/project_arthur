class Listing < ApplicationRecord
belongs_to :seller
has_many :transactions
has_many :invoices, through: :transactions

end
