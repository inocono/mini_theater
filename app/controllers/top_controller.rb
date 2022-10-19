class TopController < ApplicationController
  def index
    @theaters = Theater.all
  end
end
