class CreateRandomSentences < ActiveRecord::Migration[5.2]
  def change
    create_table :random_sentences do |t|
      t.integer :student_level_id
      t.string :sentence

      t.timestamps
    end
  end
end
