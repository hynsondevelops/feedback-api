class SentenceScore < ApplicationRecord
	belongs_to :mcm_topic, optional: true
end
