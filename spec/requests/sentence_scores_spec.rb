require 'rails_helper'

RSpec.describe "SentenceScores", type: :request do
  describe "GET /sentence_scores" do
    it "works! (now write some real specs)" do
      get sentence_scores_path
      expect(response).to have_http_status(200)
    end
  end
end
