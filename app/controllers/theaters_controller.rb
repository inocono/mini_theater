class TheatersController < ApplicationController
  before_action :set_params, only: %i[show]

  def index
    @theaters = Theater.all
  end

  def show
  end

  private

  def set_params
    @theater = Theater.find(params[:id])
  end
end
