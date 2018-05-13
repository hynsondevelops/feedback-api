require 'rails_helper'

RSpec.describe "McmTopics", type: :request do
  describe "GET /mcm_topics" do
    it "works! (now write some real specs)" do
      get mcm_topics_path
      expect(response).to have_http_status(200)
    end
  end
end
