# == Schema Information
#
# Table name: events
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  body        :string           not null
#  openings    :integer          not null
#  location_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Event < ApplicationRecord
  validates :openings, :body, :name, presence: true
  validates :openings, numericality: { less_than_or_equal_to: 6,  only_integer: true }

  belongs_to :location
  has_many :users
  has_one :host, 
  through: :users,
  source: :user
end
