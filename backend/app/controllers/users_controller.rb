class UsersController < ApplicationController
  before_filter :authenticate
  before_filter :set_user, only: [:show, :update, :destroy]

  def index
    render json: User.all
  end

  def show
    render json: @user
  end

  def create
    user = User.create(user_params)
    render json: user, status: status_for(user)
  end

  def update
    @user.update(user_params)
    render json: @user, status: status_for(@user)
  end

  def destroy
    render json: @user.destroy
  end

private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def set_user
    @user = User.find_by_id params[:id]
    head :not_found if @user.nil?
  end
end

