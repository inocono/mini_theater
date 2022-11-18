class TheatersController < ApplicationController
  before_action :set_params, :set_lat_long_name, only: %i[show]

  def index
    @theaters = Theater.all
    gon.theaters = Theater.all
  end
  
  def show
  end

  private

  # URLから送られてきた値や入力された値の受け渡し
  def set_params
    @theater = Theater.find(params[:id])
  end

  def set_lat_long_name
    gon.theater_name = @theater.name
    gon.latitude = @theater.latitude
    gon.longitude = @theater.longitude
    gon.address = @theater.address
  end
end
