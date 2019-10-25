class Api::EventsController < ApplicationController
    def index
        @events = Event.all.includes(:host)
        render 'api/events/index'
    end

    def show
        @event = Event.find(params[:id])
        render 'api/events/show'
    end

    def create
        @event = Event.new(event_params)
        @event.host_id = current_user.id

        if @event.save
            render 'api/users/show'
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def destroy
        @event = Event.find_by(:host_id)
        @event.destroy
        render 'api/events/index'
    end

    private
    def event_params
        params.require(:event).permit(:name, :date, :time, :summary, :story, :discussion, :quote, :lat, :lng, :openings, :photo)
    end
end

