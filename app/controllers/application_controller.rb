class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  # Expose these methods to the views
  helper_method :current_user, :signed_in?

  private

  def current_user
    @current_user ||= User.find_by_session_token(session[:token])
  end

  def signed_in?
    !!current_user
  end

  def sign_in(user)
    @current_user = user
    session[:token] = user.reset_session_token!
  end

  def sign_out
    current_user.try(:reset_session_token!)
    session[:token] = nil
  end

  def require_signed_in!
    unless signed_in?
      flash[:danger] = "Please log in or sign up"
      render json: "Please log in or sign up first"
    end
    # redirect_to new_session_url unless signed_in?
  end

  def require_signed_out!
    redirect_to root_url if signed_in?
    # redirect_to user_url(current_user) if signed_in?
  end
end
