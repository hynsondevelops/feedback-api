require "rails_helper"

RSpec.describe McmTopicsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/mcm_topics").to route_to("mcm_topics#index")
    end


    it "routes to #show" do
      expect(:get => "/mcm_topics/1").to route_to("mcm_topics#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/mcm_topics").to route_to("mcm_topics#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/mcm_topics/1").to route_to("mcm_topics#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/mcm_topics/1").to route_to("mcm_topics#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/mcm_topics/1").to route_to("mcm_topics#destroy", :id => "1")
    end

  end
end
