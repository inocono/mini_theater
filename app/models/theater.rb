class Theater < ApplicationRecord
  belongs_to :area

  validates :name, presence: true

  # mapに関する記入 geocodingを行うカラムの指定
  geocoded_by :address
  after_validation :geocode, if: :address_changed?
end
