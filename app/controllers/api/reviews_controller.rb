class Api::ReviewsController < ApplicationController
  before_action :require_signed_in!, only: [:create, :update, :destroy]

  def index
    @reviews = Review.where("food_item_id = ?", params[:food_item_id]).includes(:user)
    render :index
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      render :create
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.user_id == current_user.id
      @review.destroy
      render :destroy
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])

    if @review.save
      render json: {}
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :food_item_id, :rating, :body)
  end
end
