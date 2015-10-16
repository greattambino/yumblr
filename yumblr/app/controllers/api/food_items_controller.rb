class Api::FoodItemsController < ApplicationController
  def index
    if (params[:restaurant_id])
      @food_items = Restaurant.find(params[:restaurant_id]).food_items
    elsif(params[:search])
      @food_items = FoodItem.find_by_substring(params[:search])
    else
      @food_items = FoodItem.all
    end

    render json: @food_items
  end

  def show
    @food_item = FoodItem.find(params[:id])
    render json: :show
  end

  private

  def food_item_params
    params.require(:food_item).permit(:name, :price, :image_url, :restaurant_id)
  end
end
