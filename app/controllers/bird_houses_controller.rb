class BirdHousesController < ApplicationController

    def index
        bird_houses = BirdHouse.all
        render json: bird_houses
    end

    def show
        bird_house = find_bird_house
        render json: bird_house
    end

    private

    def find_bird_house
        BirdHouse.find(params[:id])
    end

end
