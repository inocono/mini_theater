class Theater < ApplicationRecord
  belongs_to :area

  validates :name, presence: true
end
