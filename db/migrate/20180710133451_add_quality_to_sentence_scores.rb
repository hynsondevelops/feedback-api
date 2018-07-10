class AddQualityToSentenceScores < ActiveRecord::Migration[5.2]
  def change
  	add_column :sentence_scores, :quality, :boolean
  end
end
