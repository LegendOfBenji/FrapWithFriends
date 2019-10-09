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

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
