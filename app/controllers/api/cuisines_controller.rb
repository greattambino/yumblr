class Api::CuisinesController < ApplicationController
  def index
    @cuisines = Cuisine.all
    render json: index
  end
end
