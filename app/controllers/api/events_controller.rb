class Api::EventsController < ApplicationController
    def index
        @events = Event.all.includes(:host, :location)
        render 'api/events/index'
    end

    def show
        @event = Event.find(params[:id])
        render 'api/events/show'
    end

    # def create
    #     @event = Event.new(event_params)
    #     @event.host_id = current_user.id
    #     if @event.save
    #         render 'api/events/show'
    #     else
    #         render ['Missing a parameter'], status: 422
    #     end
    # end

    # def destroy
    #     @event = Event.find_by(:host_id)
    #     @event.destroy
    #     render 'api/events/index'
    # end

    private
    #TODO fix this for create action
    # def event_params
    #     params.require(:event).permit(:name, :body)
    # end
end

