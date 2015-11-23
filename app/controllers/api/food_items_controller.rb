class Api::FoodItemsController < ApplicationController
  def index
    @location = params[:location]
    @radius = params[:radius]

    if (params[:restaurant_id])
      @food_items = Restaurant.find(params[:restaurant_id]).food_items
    elsif(params[:search] && (params[:cuisine] == "-1") && params[:location] && params[:radius])
      if Category.any_results?(params[:search])
        @food_items = Category.find_by_category_and_location(params[:search], params[:location], params[:radius])
      else
        @food_items = FoodItem.find_by_food_and_location(params[:search], params[:location], params[:radius])
      end
    elsif(params[:search] && params[:cuisine] && params[:location] && params[:radius])
      if Category.any_results?(params[:search])
        @food_items = Category.find_by_all_params(params[:search], params[:cuisine], params[:location], params[:radius])
      else
        @food_items = FoodItem.find_by_all_params(params[:search], params[:cuisine], params[:location], params[:radius])
      end
    elsif(params[:search] && (params[:cuisine] == "-1"))
      if Category.any_results?(params[:search])
        @food_items = Category.find_by_category(params[:search])
      else
        @food_items = FoodItem.find_by_food(params[:search])
      end
    elsif(params[:search])
      if Category.any_results?(params[:search])
        @food_items = Category.find_by_category_and_cuisine(params[:search], params[:cuisine])
      else
        @food_items = FoodItem.find_by_food_and_cuisine(params[:search], params[:cuisine])
      end
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
