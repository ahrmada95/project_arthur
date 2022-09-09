class User < ApplicationRecord
has_many :sellers
has_many :clients

end
