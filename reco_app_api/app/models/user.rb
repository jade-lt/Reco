class User < ApplicationRecord
    has_secure_password
    has_many :recos
    validates :name, uniqueness: { message: 'User already exists' }
  end