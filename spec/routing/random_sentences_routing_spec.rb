require "rails_helper"

RSpec.describe RandomSentencesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/random_sentences").to route_to("random_sentences#index")
    end


    it "routes to #show" do
      expect(:get => "/random_sentences/1").to route_to("random_sentences#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/random_sentences").to route_to("random_sentences#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/random_sentences/1").to route_to("random_sentences#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/random_sentences/1").to route_to("random_sentences#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/random_sentences/1").to route_to("random_sentences#destroy", :id => "1")
    end

  end
end
