require 'rails_helper'

RSpec.describe "RandomSentences", type: :request do
  describe "GET /random_sentences" do
    it "works! (now write some real specs)" do
      get random_sentences_path
      expect(response).to have_http_status(200)
    end
  end
end
