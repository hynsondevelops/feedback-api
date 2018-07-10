class SentenceScoresController < ApplicationController
  before_action :set_sentence_score, only: [:show, :update, :destroy]

  # GET /sentence_scores
  def index
    @sentence_scores = SentenceScore.all

    render json: @sentence_scores
  end

  # GET /sentence_scores/1
  def show
    render json: @sentence_score
  end

  # POST /sentence_scores
  def create
    @sentence_score = SentenceScore.new(sentence_score_params)

    if @sentence_score.save
      render json: @sentence_score, status: :created, location: @sentence_score
    else
      render json: @sentence_score.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /sentence_scores/1
  def update
    if @sentence_score.update(sentence_score_params)
      render json: @sentence_score
    else
      render json: @sentence_score.errors, status: :unprocessable_entity
    end
  end

  # DELETE /sentence_scores/1
  def destroy
    @sentence_score.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_sentence_score
      @sentence_score = SentenceScore.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def sentence_score_params
      params.require(:sentence_score).permit(:mcm_topic_id, :sentence, :score, :quality)
    end
end
