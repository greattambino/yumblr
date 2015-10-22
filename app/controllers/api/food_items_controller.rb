class Api::FoodItemsController < ApplicationController
  def index
    # @food_items = FoodItem.select do |item|
    #   item.restaurant.distance(params[:location]) < params[:radius]
    # end
    if (params[:restaurant_id])
      @food_items = Restaurant.find(params[:restaurant_id]).food_items
    elsif(params[:search] && (params[:cuisine] == "-1") && params[:location] && params[:radius])
      @food_items = FoodItem.find_by_substring_and_location(params[:search], params[:location], params[:radius])
    elsif(params[:search] && params[:cuisine] && params[:location] && params[:radius])
      @food_items = FoodItem.find_by_all_params(params[:search], params[:cuisine], params[:location], params[:radius])
    elsif(params[:search] && (params[:cuisine] == "-1"))
      @food_items = FoodItem.find_by_substring(params[:search])
      # @food_items = FoodItem.find_by_substring(params[:search], params[:location], params[:radius])
    elsif(params[:search])
      @food_items = FoodItem.find_by_substring_and_cuisine(params[:search], params[:cuisine])
    else
      @food_items = FoodItem.all
    end
    render :index
  end

  def show
    @food_item = FoodItem.find(params[:id])
    render :show
  end

  private

  def food_item_params
    params.require(:food_item).permit(:name, :price, :image_url, :restaurant_id)
  end
end
