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
  belongs_to :event
  belongs_to :user
end
