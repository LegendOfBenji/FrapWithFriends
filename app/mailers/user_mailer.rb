class UserMailer < ApplicationMailer
  def user_email(attendee)
    @attendee = attendee

    mail(to: @attendee.email, subject: 'Welcome to FrapWithFriends')
  end
end
