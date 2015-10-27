class Api::LikesController < ApplicationController
  before_action :require_signed_in!, only: [:create, :destroy]

  def create
    @like = Liking.new(like_params)
    @like.user_id = current_user.id

    if @like.save
      render :create
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def destroy
    @like = Liking.find(params[:id])

    if @like.destroy
      render :destroy
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def user_index
    @likes = Liking.includes(:likable).where(user_id: params[:user_id])
    render :index
  end

  private
  def like_params
    params.require(:like).permit(:user_id, :likable_id, :likable_type)
  end
end
