# == Schema Information
#
# Table name: events
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  openings   :integer          not null
#  host_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  date       :string           not null
#  time       :string           not null
#  summary    :string
#  story      :string
#  discussion :string
#  quote      :string
#  lat        :float
#  lng        :float
#

class Event < ApplicationRecord
  validates :openings, :date, :name, :time, :lat, :lng, presence: true
  validates :openings, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 6,  only_integer: true }

  belongs_to :host,
  foreign_key: :host_id,
  class_name: :User

  has_many :attendees,
  foreign_key: :event_id,
  class_name: :Attendee

  has_one_attached :photo

  # def decrement_openings
  #   @event = Event.find_by(params[:id])
  #   @event.openings -= 1
  # end
end
