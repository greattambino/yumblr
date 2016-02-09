class Api::CategoriesController < ApplicationController
  def index
    if params[:search]
      @categories = Category.find_by_substring(params[:search])
    else
      @categories = Category.all
    end

    render :index
  end

  def show
    @category = Category.includes(:food_items, :restaurants).find(params[:id])
    render :show
  end
end
