class Api::FoodItemsController < ApplicationController
  def index
    @location = params[:location]
    @radius = params[:radius]

    if (params[:restaurant_id])
      @food_items = Restaurant.find(params[:restaurant_id]).food_items
    elsif (params[:searching] && (params[:cuisine] == "-1"))
      @food_items = FoodItem.find_by_query_and_location(
        params[:search], params[:location], params[:radius])
    elsif (params[:searching])
      @food_items = FoodItem.find_by_all_params(
        params[:search], params[:cuisine], params[:location], params[:radius])
    elsif(params[:search] && (params[:cuisine] == "-1") && params[:location] && params[:radius])
      Category.any_results?(params[:search]) ? klass = Category : klass = FoodItem
      @food_items = klass.find_by_query_and_location(
        params[:search], params[:location], params[:radius])
    elsif(params[:search] && params[:cuisine] && params[:location] && params[:radius])
      Category.any_results?(params[:search]) ? klass = Category : klass = FoodItem
      @food_items = klass.find_by_all_params(
        params[:search], params[:cuisine], params[:location], params[:radius])
    elsif(params[:search] && (params[:cuisine] == "-1"))
      Category.any_results?(params[:search]) ? klass = Category : klass = FoodItem
      @food_items = klass.find_by_query(params[:search])
    elsif(params[:search])
      Category.any_results?(params[:search]) ? klass = Category : klass = FoodItem
      @food_items = klass.find_by_query_and_cuisine(params[:search], params[:cuisine])
    else
      @food_items = FoodItem.includes(:restaurant).all
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
