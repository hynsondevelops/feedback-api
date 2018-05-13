class User < ApplicationRecord
	has_secure_password
	has_many :mcm_topics
	has_many :student_levels
end
