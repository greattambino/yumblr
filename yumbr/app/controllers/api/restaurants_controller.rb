class Api::RestaurantsController < ApplicationController
  def index
    @restaurants = Restaurant.all
    render :index
  end

  def show
    restaurant = Restaurant.find(params[:id])
    @restaurant = restaurant.includes(:food_items)
    render :show
  end

  private

  def restaurant_params
    params.require(:restaurant).permit(:name, :price, :image_url, :restaurant_id)
  end
end
