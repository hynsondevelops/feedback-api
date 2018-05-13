class CreateMcmTopics < ActiveRecord::Migration[5.2]
  def change
    create_table :mcm_topics do |t|
      t.integer :user_id
      t.string :name

      t.timestamps
    end
  end
end
