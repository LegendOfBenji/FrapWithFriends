class Api::EventsController < ApplicationController
    def index
        @events = Event.all
        render 'api/events/index'
    end

    def show
        @event = Event.find_by(:host_id)
        render 'api/events/show'
    end

    def create
        @event = Event.new(event_params)
        @event.host_id = current_user.id
        if @event.save
            render 'api/events/show'
        else
            render ['Missing a parameter'], status: 422
        end
    end

    def destroy
        @event = Event.find_by(:host_id)
        @event.destroy
        render 'api/events/index'
    end

    private
    def event_params
        params.require(:event).permit(:name, :body)
    end
end

