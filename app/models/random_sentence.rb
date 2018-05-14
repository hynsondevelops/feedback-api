class RandomSentence < ApplicationRecord
	belongs_to :student_level, optional: true
end
