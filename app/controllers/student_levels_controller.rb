class StudentLevelsController < ApplicationController
  before_action :set_student_level, only: [:show, :update, :destroy]

  # GET /student_levels
  def index
    @student_levels = StudentLevel.all

    render json: @student_levels
  end

  # GET /student_levels/1
  def show
    render json: @student_level, :include => :random_sentences
  end

  # POST /student_levels
  def create
    @student_level = StudentLevel.new(student_level_params)
    @student_level.user_id = @current_user.id
    if @student_level.save
      render json: @student_level, status: :created, location: @student_level
    else
      render json: @student_level.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /student_levels/1
  def update
    if @student_level.update(student_level_params)
      render json: @student_level, :include => :random_sentences
    else
      render json: @student_level.errors, status: :unprocessable_entity
    end
  end

  # DELETE /student_levels/1
  def destroy
    @student_level.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student_level
      @student_level = StudentLevel.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def student_level_params
      params.require(:student_level).permit(:user_id, :generic_text, :name, random_sentences_attributes: [:id, :sentence, :_destroy])
    end
end
