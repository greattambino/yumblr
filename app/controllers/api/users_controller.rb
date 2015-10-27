class Api::UsersController < ApplicationController
  before_action :require_signed_in!,  only: [:show]

  def show
    @user = User.includes(:likings).find(params[:id])
    render :show
  end
end
