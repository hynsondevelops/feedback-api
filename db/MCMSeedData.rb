require 'creek'

workbook = Creek::Book.new 'MCM3.xlsx'
worksheets = workbook.sheets


class Topic
	attr_accessor :name
	attr_accessor :pointsDescription
	def initialize(name, points, description)
		@name = name
		@pointsDescription = [[points, description, checkGood(points, description)]]
	end

	def addPointsDescription(points, description)
		@pointsDescription.push([points, description, checkGood(points, description)])
	end

	def checkGood(points, description)
		if ((@name == "Visible tool" && points.to_i == 1) ||(@name != "Visible tool" && points.to_i > 1)) #pass
			return true

		else #fail
			return false
		end
	end

	def reversePoints()
		@pointsDescription = @pointsDescription.reverse
	end

	def databaseCreateFormat()
		formatted = "\ntopic = McmTopic.create!(user_id: user.id, name: \"#{@name}\");"
		@pointsDescription.each do |p|
			formatted += "\nSentenceScore.create!(mcm_topic_id: topic.id, sentence: \"#{p[1]}\", score: #{p[0]}, " 
			if (checkGood(p[0], p[1]))
				formatted += "quality: true);"
			else
				formatted += "quality: false);"
			end
		end
		return formatted
	end
end

topics = []
current_topic = nil
worksheets.each do |worksheet|
  worksheet.rows.each do |row|
    row_cells = row.values
    #new topic
    if (row_cells[0] != nil) 
    	if (current_topic != nil)
    		current_topic.reversePoints()
    		topics.push(current_topic)
    	end
    	current_topic = Topic.new(row_cells[0], row_cells[2][0], row_cells[4].gsub("'", "\\\\'"))
    else
    	current_topic.addPointsDescription(row_cells[2][0], row_cells[4])
    end
    # do something with row_cells
  end
end

seedFormatted = "user = User.create!(email: 'test@email.com', name: 'testUser', password: 'password', password_confirmation: 'password');\n"
topics.each do |topic|
	seedFormatted += topic.databaseCreateFormat()
end

print(seedFormatted)



File.write('seeds.rb', seedFormatted)



