class Api::AttendeesController < ApplicationController
  def create
    @attendee = Attendee.new({event_id: attendee_params})
    @attendee.user_id = current_user.id
    @user = current_user
    msg = UserMailer.user_email(current_user)
    msg.deliver_now

    if @attendee.save
      render 'api/users/show'
    else
      render @attendee.errors.full_messages
    end
  end

  private
  def attendee_params
    params.require(:eventId)
  end
end

