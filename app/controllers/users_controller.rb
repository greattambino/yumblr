class UsersController < ApplicationController
  before_action :require_signed_out!, only: [:new, :create]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      flash[:success] = "Welcome back, #{@user.username}!"
      redirect_to root_url
    else
      flash.now[:danger] = @user.errors.full_messages
      render :new
    end
  end

  def show
    if current_user.nil?
      redirect_to new_session_url
      return
    end

    @user = User.find(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :first_name,
                                 :last_name, :password)
  end
end
