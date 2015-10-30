class Api::CategoriesController < ApplicationController
  def index
    @categories = Category.all
    render json: index
  end
end
