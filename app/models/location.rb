# == Schema Information
#
# Table name: locations
#
#  id         :bigint           not null, primary key
#  lat        :float            not null
#  lng        :float            not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Location < ApplicationRecord
  validates :lat, :lng, presence: true
  
  has_many :events
end
