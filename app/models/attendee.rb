# == Schema Information
#
# Table name: attendees
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Attendee < ApplicationRecord
  after_create :decrement_openings
  after_destroy :increment_openings

  belongs_to :event,
  foreign_key: :event_id,
  class_name: :Event
  
  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User

  def decrement_openings
    event = Event.find_by(id: event_id)
    event.openings -= 1
    event.save!
  end

  def increment_openings
    event = Event.find_by(id: event_id)
    event.openings += 1
    event.save!
  end
end