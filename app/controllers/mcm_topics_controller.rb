class McmTopicsController < ApplicationController
  before_action :set_mcm_topic, only: [:show, :update, :destroy]

  # GET /mcm_topics
  def index
    @mcm_topics = McmTopic.all

    render json: @mcm_topics
  end

  # GET /mcm_topics/1
  def show
    render json: @mcm_topic
  end

  # POST /mcm_topics
  def create
    @mcm_topic = McmTopic.new(mcm_topic_params)

    if @mcm_topic.save
      render json: @mcm_topic, status: :created, location: @mcm_topic
    else
      render json: @mcm_topic.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /mcm_topics/1
  def update
    if @mcm_topic.update(mcm_topic_params)
      render json: @mcm_topic
    else
      render json: @mcm_topic.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mcm_topics/1
  def destroy
    @mcm_topic.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mcm_topic
      @mcm_topic = McmTopic.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def mcm_topic_params
      params.require(:mcm_topic).permit(:user_id, :name, sentence_scores_attributes: [:id, :score, :sentence, :_destroy])
    end
end
