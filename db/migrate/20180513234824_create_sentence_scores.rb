class CreateSentenceScores < ActiveRecord::Migration[5.2]
  def change
    create_table :sentence_scores do |t|
      t.integer :mcm_topic_id
      t.string :sentence
      t.integer :score

      t.timestamps
    end
  end
end
