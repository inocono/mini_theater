require 'rails_helper'

RSpec.describe "Theaters", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "/theaters/index"
      expect(response).to have_http_status(:success)
    end
  end

  describe "GET /show" do
    it "returns http success" do
      get "/theaters/show"
      expect(response).to have_http_status(:success)
    end
  end

end
