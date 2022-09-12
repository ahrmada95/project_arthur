class Client < ApplicationRecord
    belongs_to :user
    has_many :transactions
    has_many :invoices, through: :transactions
    has_many :reviews
end
