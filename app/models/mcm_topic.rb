class McmTopic < ApplicationRecord
	belongs_to :user
	has_many :sentence_scores, inverse_of: :mcm_topic
	accepts_nested_attributes_for :sentence_scores, allow_destroy: true
end
