class Api::CategoriesController < ApplicationController
  def index
    if params[:search]
      @categories = Category.find_by_substring(params[:search])
    else
      @categories = Category.all
    end
    
    render json: @categories
  end
end
