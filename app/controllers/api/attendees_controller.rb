class Api::AttendeesController < ApplicationController
  def create
    @attendee = Attendee.new({event_id: attendee_params})
    @attendee.user_id = current_user.id
    @event = Event.find_by(host_id: current_user.id)
    @user = current_user
    msg = UserMailer.user_email(current_user)
    msg.deliver_now
    if @attendee.save
      @event.openings -= 1
      @event.save!
      render 'api/users/show'
    else
      render @attendee.errors.full_messages
    end
  end

  def destroy
    @attendee = Attendee.find(params[:user_id])
    @user = current_user
    @event = Event.find_by(host_id: current_user.id)
    if @attendee.destroy
      @event.openings += 1
      @event.save!
      render 'api/users/show'
    end
  end

  private
  def attendee_params
    params.require(:eventId)
  end
end

