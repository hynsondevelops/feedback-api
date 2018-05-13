class RandomSentencesController < ApplicationController
  before_action :set_random_sentence, only: [:show, :update, :destroy]

  # GET /random_sentences
  def index
    @random_sentences = RandomSentence.all

    render json: @random_sentences
  end

  # GET /random_sentences/1
  def show
    render json: @random_sentence
  end

  # POST /random_sentences
  def create
    @random_sentence = RandomSentence.new(random_sentence_params)

    if @random_sentence.save
      render json: @random_sentence, status: :created, location: @random_sentence
    else
      render json: @random_sentence.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /random_sentences/1
  def update
    if @random_sentence.update(random_sentence_params)
      render json: @random_sentence
    else
      render json: @random_sentence.errors, status: :unprocessable_entity
    end
  end

  # DELETE /random_sentences/1
  def destroy
    @random_sentence.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_random_sentence
      @random_sentence = RandomSentence.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def random_sentence_params
      params.require(:random_sentence).permit(:student_level_id, :sentence)
    end
end
