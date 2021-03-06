class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

    def index
      @user = current_user
      @events = current_user.events
      @hosted_events = current_user.hosted_events
      render 'api/users/index'
    end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end