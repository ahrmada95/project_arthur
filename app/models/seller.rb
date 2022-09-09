class Seller < ApplicationRecord
belongs_to :user
has_many :reviews
has_many :listings 
has_many :transactions
has_many :invoices, through: :transactions


end
