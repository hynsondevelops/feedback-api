require 'rails_helper'

RSpec.describe "StudentLevels", type: :request do
  describe "GET /student_levels" do
    it "works! (now write some real specs)" do
      get student_levels_path
      expect(response).to have_http_status(200)
    end
  end
end
