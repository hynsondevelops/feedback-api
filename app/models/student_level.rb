class StudentLevel < ApplicationRecord
  	has_many :random_sentences, inverse_of: :student_level
	belongs_to :user
	accepts_nested_attributes_for :random_sentences, allow_destroy: true
end
