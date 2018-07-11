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

def arrayToActiveRecord(array)
	activeRecordFormatted = ""
	array.each do |entry|
		activeRecordFormatted += "\nRandomSentence.create!(sentence: '#{entry}', student_level_id: @student_level.id)"
	end
	return activeRecordFormatted
end

#Random Sentences
#Non verbal previp
seedFormatted += "\n@student_level = StudentLevel.create!(name: 'Non-Verbal PreVIP Trial', generic_text: 'It was so nice to meet name today! Listening is the first step of language learning. name did a wonderful job with paying close attention and listening well.  I think with practice in this type of setting, name will rapidly advance in the program. I think starting at a young age gives name a big advantage.   I will be happy to teach name again soon! name is an excellent candidate for VIPKID. Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)"

sentences = ["He listens well", "He pays close attention", "He is an active learner", "He seems engaged in the lesson", "He seems happy to learn English", "He seems quick to learn new words", "He is an enthusiastic student", "He is hard working in class", "He is progressing well in his learning of English", "He is an exciting student to teach", "He is cooperative in learning", "He is a cute student", "He sings the songs", "He is a very active learner", "Pronunciation is improving", "He is repeating well", "He follows the teacher well", "He sings along with all of the songs", "He is improving the use of the mouse", "His attention to class is great", "His speaking is great", "He says numbers so well", "He understands big and small letters", "He can say the alphabet very well."]

seedFormatted += arrayToActiveRecord(sentences)

#nonreader trial
seedFormatted += "\n@student_level = StudentLevel.create!(name: 'Non-Reader Trial', generic_text: 'It was so nice to meet name today! He is a hard working student. He speaks very well! He could repeat all of the words and letters. He is young and learning this type of classroom. I am impressed at how quickly name learns! He said: \"happy, star, bear, bubbles, monkey, yes, ok,go\". I will be happy to teach name again soon. He will feel comfortable to learn English. Excellent 5 star job! I think with practice in this type of setting, He will rapidly advance in the program. I think starting at a young age is a big advantage. name is an excellent candidate for VIPKID. Excellent 5 star job! Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)"

sentences = ['He listens well', 'He pays close attention', 'He is an active learner', 'He seems engaged in the lesson', 'He seems happy to learn English', 'He seems quick to learn new words', 'He is an enthusiastic student', 'He is hard working in class', 'He is progressing well in his learning of English', 'He is an exciting student to teach', 'He is cooperative in learning', 'He circles the answers well', 'He writes letters well', 'He has good handwriting', 'He is a clever student', 'He is learning to read', 'He is quick to learn new vocabulary', 'He is learning to use full sentences', 'He could practice using full sentences', 'He could practice putting \"a\" \"an\" \"the\" in front of nouns', 'He can practice answering questions', 'He can circle the first letters of vocabulary words to help with reading', ' Pronunciation is improving'];

seedFormatted += arrayToActiveRecord(sentences)

#reader trial
seedFormatted += "\n@student_level = StudentLevel.create!(name: 'Reader Trial', generic_text: 'It was so nice to meet name today! He is a hard working student. name speaks very well! He could repeat all of the words and sentences. name did a good job with reading. Practice speaking with a native speaker will help name make fast progress with pronunciation. I will be happy to teach name again soon. He will feel comfortable to expand on already good English. Excellent 5 star job! I think with practice in this type of setting He will rapidly advance in the program. name is an excellent candidate for VIPKID. Excellent 5 star job! Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)
"

sentences = ['He listens well', 'He pays close attention', 'He is an active learner', 'He seems engaged in the lesson', 'He seems happy to learn English', 'He seems quick to learn new words', 'He is an enthusiastic student', 'He is hard working in class', 'He is progressing well in his learning of English', 'He is an exciting student to teach', 'He is cooperative in learning', 'He is reading well', 'I see progress in his reading', 'He can practice reading aloud at home', 'He can practice reading short stories', 'He can use the workbooks to practice reading', 'I see improvement in confidence', 'I see improvement in speaking', 'I see improvement in reading', 'I see improvement in saying full sentences', 'He can read short words easily', 'Pronunciation is improving'];

seedFormatted += arrayToActiveRecord(sentences)

#MC PreVIP
seedFormatted += "\n@student_level = StudentLevel.create!(name: 'MC PreVIP', generic_text: 'It is nice to meet adorable name. He participates fully in class. He can practice putting \"a\" in front of nouns. \"I see a cat\". name knows all of the letters and can match big to small. He can put together sentences with the help of the teacher. \"I draw a line. I love Dino\". name sang three songs today!! Please review the notes on the text box in the lesson video for specific words and grammar to review. Great 5 happy star job today. Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)"

sentences = ['He listens well', 'He pays close attention', 'He is an active learner', 'He seems engaged in the lesson', 'He seems happy to learn English', 'He seems quick to learn new words', 'He is an enthusiastic student', 'He is hard working in class', 'He is progressing well in his learning of English', 'He is an exciting student to teach', 'He is cooperative in learning', 'He is a cute student', 'He sings the songs', 'He is a very active learner', 'Pronunciation is improving', 'He is repeating well', 'He follows the teacher well', 'He sings along with all of the songs', 'He is improving the use of the mouse', 'His attention to class is great', 'His speaking is great', 'He says numbers so well', 'He understands big and small letters', 'He can say the alphabet very well.'];

seedFormatted += arrayToActiveRecord(sentences)

#level 1
seedFormatted += "\n@student_level = StudentLevel.create!(name: 'Level 1', generic_text: 'It is nice to meet adorable name. He participates fully in class. name can practice putting \"a\" in front of nouns. \"I see a cat\". name knows all of the letters and can match big to small. He can put together sentences with the help of the teacher. \" I draw a line. I love Dino\". He sang three songs today!! Please review the notes on the text box in the lesson video for specific words and grammar to review. Great 5 happy star job today. Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)"

sentences = ['boy is progressing so well in speaking.', 'boy is listening, paying attention, and repeating very well.', 
'boy can circle first letters of words to help with reading.', 'boy understood all of the directions and circled all of the answers correctly too.', 
'Keep working hard.', 'Great job this lesson.', 'boy is progressing well in understanding.', 'boy can follow the directions easily.', 'boy repeats well after teacher.',
'boy is able to interact with the teacher repeating the words and sounds very well.', 'Excellent 5 happy star job!'];

seedFormatted += arrayToActiveRecord(sentences)

#level2
seedFormatted += "\n@student_level = StudentLevel.create!(name: 'Level 2', generic_text: 'It was very nice to see name today! He is progressing well in understanding English. He could say and read everything very well!. Excellent job. When working at home, name could underline the first letter of words in the workbook to help associate letters in addition to pictures with the words. This will help with reading. Please review the notes on the text box in the lesson video for specific words and grammar to review. Excellent 5 happy stars today! Keep working hard name! Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)
"

sentences = ['boy is progressing well in understanding.', 'boy can follow the directions easily.', 'boy repeats well after teacher.',
'boy is able to interact with the teacher repeating the words and sounds very well.', 'Excellent 5 happy star job!', 'boy is progressing so well in speaking.', 
'boy is listening, paying attention, and repeating very well.', 'boy can circle first letters of words to help with reading.', 
'boy understood all of the directions and circled all of the answers correctly too', 'Wow. Keep working hard.', 
'boy is creating own sentences expressing own ideas using correct grammar.'];

seedFormatted += arrayToActiveRecord(sentences)

#level 3
seedFormatted += "\n@student_level = StudentLevel.create!(name: 'Level 3', generic_text: 'It was very nice to see name today! name is a wonderful speaker! He knows all of the lesson vocabulary. He can deepen English language understanding with conversation which name did so well today. Great work with all of the grammar and vocabulary too! He can speak in full sentences. He answered lots of questions. name did a good job correcting errors when encouraged. Please review the notes on the text box in the lesson video for specific words and grammar to review. Overall a great job--5 happy stars today! Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)"

sentences = ['5 happy stars today! ', 'boy is progressing well in understanding.', 'boy is a wonderful reader.', 'boy knows all of the lesson vocabulary.',
'boy can deepen language understanding with conversation which was done so well today.', ' boy is wonderful and hardworking and I see progress throughout the class.',
'Wow - reading so fast.', 'boy is an exceptional student.', 'I can see that boy is working very hard on his English.', 'Congratulations on a great assessment.',
'boy spoke very well.', 'boy did a very good job today.'];

seedFormatted += arrayToActiveRecord(sentences)


#level 4
seedFormatted += "\n@student_level = StudentLevel.create!(name: 'Level 4', generic_text: 'name is a wonderful reader. Wow - name is reading so fast. He also knows all of the vocabulary very well. He can deepen English language understanding with conversation which name did so well today. He answered lots of questions and used complete sentences in the answers. name could practice reading aloud between lessons to help with fluency. Please review the notes on the text box in the lesson video for specific words and grammar to review. So nice to see name today. 5 super stars! Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)"

sentences =	['5 happy stars today! ', 'boy is progressing well in understanding.', ' boy is wonderful and hardworking and I see progress throughout the class.',
'boy is an exceptional student', 'I can see that boy is working very hard on his English.', 'Congratulations on a great assessment.'];

seedFormatted += arrayToActiveRecord(sentences)


#level 5
seedFormatted += "\n@student_level = StudentLevel.create!(name: 'Level 5', generic_text: 'Please review the notes on the text box in the lesson video for specific words and grammar to review.', user_id: user.id)"

sentences = ['He read all of the paragraphs very well', 'He read fluidly', 'He is speaking well with correct pronunciation', 'He is well able to read long and difficult words', 'I see lots of progress in confidence', 'He has excellent thinking skills', 'The words in this lesson have many syllables and are hard to say-well done', 'He answered lots of questions', 'He could practice saying more full sentences', 'He is a great learner', 'He listens well', 'He pays close attention', 'He is an active learner', 'He seems engaged in the lesson', 'He seems happy to learn English', 'He seems quick to learn new words', 'He is an enthusiastic student', 'He is hard working in class', 'He is progressing well in his learning of English', 'He is an exciting student to teach', 'He is cooperative in learning', 'He circles the answers well'];

seedFormatted += arrayToActiveRecord(sentences)


#level 6
seedFormatted += "\n@student_level = StudentLevel.create!(name: 'Level 6', generic_text: 'Please review the notes on the text box in the lesson video for specific words and grammar to review.', user_id: user.id)"

sentences = ['He read all of the paragraphs very well', 'He read fluidly', 'He is speaking well with correct pronunciation', 'He is well able to read long and difficult words', 'I see lots of progress in confidence', 'He has excellent thinking skills', 'The words in this lesson have many syllables and are hard to say-well done', 'He answered lots of questions', 'He could practice saying more full sentences', 'He is a great learner', 'He listens well', 'He pays close attention', 'He is an active learner', 'He seems engaged in the lesson', 'He seems happy to learn English', 'He seems quick to learn new words', 'He is an enthusiastic student', 'He is hard working in class', 'He is progressing well in his learning of English', 'He is an exciting student to teach', 'He is cooperative in learning', 'He circles the answers well'];

seedFormatted += arrayToActiveRecord(sentences)





File.write('seeds.rb', seedFormatted)



