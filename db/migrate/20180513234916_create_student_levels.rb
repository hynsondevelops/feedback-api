class CreateStudentLevels < ActiveRecord::Migration[5.2]
  def change
    create_table :student_levels do |t|
      t.integer :user_id
      t.string :generic_text
      t.string :name

      t.timestamps
    end
  end
end
