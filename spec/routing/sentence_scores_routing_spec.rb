require "rails_helper"

RSpec.describe SentenceScoresController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/sentence_scores").to route_to("sentence_scores#index")
    end


    it "routes to #show" do
      expect(:get => "/sentence_scores/1").to route_to("sentence_scores#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/sentence_scores").to route_to("sentence_scores#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/sentence_scores/1").to route_to("sentence_scores#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/sentence_scores/1").to route_to("sentence_scores#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/sentence_scores/1").to route_to("sentence_scores#destroy", :id => "1")
    end

  end
end
