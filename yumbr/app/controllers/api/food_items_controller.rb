class Api::FoodItemsController < ApplicationController
  def index
    @food_items = Restaurant.find(params[:restaurant_id]).food_items
    render json: @food_items
  end

  def show
    @food_item = FoodItem.find(params[:id])
    render json: @food_item
  end
  
  private

  def food_item_params
    params.require(:food_item).permit(:name, :price, :image_url, :restaurant_id)
  end
end
