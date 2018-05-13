require "rails_helper"

RSpec.describe StudentLevelsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/student_levels").to route_to("student_levels#index")
    end


    it "routes to #show" do
      expect(:get => "/student_levels/1").to route_to("student_levels#show", :id => "1")
    end


    it "routes to #create" do
      expect(:post => "/student_levels").to route_to("student_levels#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/student_levels/1").to route_to("student_levels#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/student_levels/1").to route_to("student_levels#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/student_levels/1").to route_to("student_levels#destroy", :id => "1")
    end

  end
end
