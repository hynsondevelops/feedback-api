user = User.create!(email: 'test@email.com', name: 'testUser', password: 'password', password_confirmation: 'password');

def seedUser(user)
	topic = McmTopic.create!(user_id: user.id, name: "Introduction");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You started the class without any introduction of yourself. VIPKID teachers should create a strong learning environment for its students by welcoming them into class in a warm fashion.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You greeted the student at the beginning of the class in a somewhat natural fashion. In order to improve the student's learning experience, ask at least one rapport builidng question at the start of class.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You were able to create a comfortable learning environment by warmly greeting the student at the start of class, and asking rapport building questions to ease the student into the lesson.", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Class Time");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You covered some of the class materials but missed out on several key slides. The VIPKID curriculum is designed with a full 25-minute teaching session in mind and as a result, all of the class content must be covered.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You covered the majority of the material on the slides but missed some lesson content. The VIPKID curriculum is designed with a full 25-minute teaching session in mind and as a result, all of the class content must be covered.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You covered all the material on the slides and paced yourself well.", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Lesson Preparation");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "It appeared as if you were frequently reading the teacher directions during class. It would be best if you better prepared your lesson by becoming more familiar with the lesson objectives and better laid our your props. This will create a strong learning environment for the student and ensure the class flows smoothly.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "It appeared as if you were frequently reading the teacher directions during class. It would be best if you better prepared your lesson by becoming familiar with the lesson objectives and better laid out your props. This will create a strong learning environment for the student and ensure the class flows smoothly.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You appeared to be mostly familiar with the content of the slides and you had materials and tools prepared to deliver the content. However, at times, it appeared as if you were unsure about what the upcoming class materials were about. As a result, the student appeared disinterested in the class. In a real life VIPKID classroom, it is of the utmost importance that the teacher be very familiar with the class content and plan the lesson beforehand to create an excellent learning environment.", score: 2, quality: true);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You prepared appropriate materials and tools to effectively deliver and extend the lesson content of each slide. You had smooth transitions between slides and never interrupted the class to read the teacher directions. Fun and engaging activities were created and successfully executed for each slide that helped the student achieve the learning target of the lesson. ", score: 3, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Supplementary Tools");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did not use any props/supplementary tools during the class. Props do not need to be expensive investments; look around your home for objects that can be relevant to the lesson.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You used some props but could have benefitted from a few more props. Props do not need to be expensive investments; look around your home for objects that are relevant to the lesson.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You used plenty of props to enhance the student\'s learning environment. These props created a fun setting for the student and you were able to utilize them in a fun and exciting way. ", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Visible tool");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did not use the props/supplementary tools in a clear and visible fashion in front of the camera. Be sure to be aware of your visibility within the camera area.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You used the props/supplementary tools in a clear and visible fashion in front of the camera.", score: 1, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "mastery of English ");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You made several mistakes involving the usage of appropriate phonics, vocabulary, syntax, grammar, and diction for the age/learning level of the student. This demonstrates that you have a competent understanding of the English language; however, VIPKID teachers must have a comprehensive understanding of the English language.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You used correct phonics, vocabulary, syntax, grammar, and diction at times during the class. However, you occasionally failed to demonstrate the proper use of phonics, vocabulary, syntax, grammar, or diction at al times. This demonstrates that you have an understanding of the English language; however, VIPKID teachers must have a comprehensive understanding of the English language.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You used correct phonics, vocabulary, syntax, grammar, and diction for the majority of the class. However, you occasionally failed to demonstrate the proper use of phonics, vocabulary, syntax, grammar, or diction. This demonstrates that you have a competent understanding of the English language; however, VIPKID teachers must have a comprehensive understanding of the English language.", score: 2, quality: true);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You had no problems using correct phonics, vocabulary, syntax, grammar, and diction throughout the class. This demonstrates that you have a comprehensive understanding of the English language.", score: 3, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Speaking Speed");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "Your speaking speed was inappropriate for the student's level and you made no attempt to adapt to the speaking speed of the student. Having level-appropriate speaking speed is important for teaching ESL learners as they have varied listening proficiency.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You spoke at an inappropriate speed for the majority of the class and made limited attempts to adapt to the speaking speed of the student. Having level-appropriate speaking speed is important for teaching ESL learners as they have varied listening proficiency.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "At times you spoke at an inappropriate speed but made attempts to adjust your speaking speed. Having level-appropriate speaking speed is important for teaching ESL learners as they have varied listening proficiency.", score: 2, quality: true);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "Your speaking speed was appropriate for the student\'s level (slow for lower-level student and comparatively faster for higher-level student). Furthermore, you were able to adapt quickly to the level of the student. Having level-appropriate speaking speed is important for teaching ESL learners as they have varied listening proficiency.", score: 3, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Incidental Language");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "The complexity of words and length of sentences in your language were not appropriate for the student's level during the class. You consistently used words or sentences that were beyond the student's level. Always be sure to refer to the lesson objectives and prior knowledge list to become familiar with the student's prior english knowledge.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "The complexity of words and length of sentences in your language were not always appropriate for the student's level during the class. Oftentimes you used words or sentences that were beyond the student's level. Always be sure to refer to the lesson objectives and prior knowledge list to become familiar with the student's prior english knowledge.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "The complexity of words and length of sentences in your language were appropriate for the student's level for the majority of the class; however, at times you used words or sentences that were beyond the student's level. Always be sure to refer to the lesson objectives and prior knowledge list to become familiar with the student's prior english knowledge.", score: 2, quality: true);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "The complexity of words and length of sentences in your language were appropriate for the student\'s level throughout the class. You used language that the student would be familiar with and therefore were able to communicate with the student efficiently and effectively.", score: 3, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "TPR");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did not use TPR (Total Physical Response) techniques to assist with your teaching. Neither instructional TPR (cupping the ear, cupping the eyes, pointing to the mouth, etc) nor educational TPR (mimicking the letters, mimicking an object or an action, etc) was used by you to help the student understand classroom commands or the lesson content. ", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You used very little TPR (Total Physical Response) techniques to assist with your teaching.  Only instructional TPR (cupping ear, cupping eyes, pointing to mouth, etc) or only educational TPR (mimicking the objects or animals, mimicking the actions, etc) was used by you during the class and you used it in an inconsistent fashion. ", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You used TPR (Total Physical Response) techniques to assist with your teaching during the class. Instructional TPR (cupping ear, cupping eyes, pointing to mouth, etc) and/or educational TPR (mimicking the objects or animals, mimicking the actions, etc) was used by you to ensure active learning on the student's part. Be sure to use both types of TPR consistently throughout the lesson.", score: 2, quality: true);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did an excellent job using TPR (Total Physical Response) techniques throughout the class to assist with your teaching. You used Instructional TPR (cupping ear, cupping eyes, pointing to mouth, etc) effectively in order to help the student understand classroom commands, and educational TPR (mimicking the objects or animals, mimicking the actions, etc) to encourage student to physically respond to important lesson content in order to achieve understanding. Your use of TPR  helped the student engage in active learning.", score: 3, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Modeling");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did not give the student effective demonstration on how to complete tasks by modelling an on-screen activity or modelling a conversation first when the student was confused.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did not always give the student effective demonstration on how to complete tasks by modelling an on-screen activity or modelling a conversation first when the student was confused.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You gave the student demonstration on how to complete tasks by modelling an on-screen activity or modelling a conversation first when the student was confused for the majority of the class. However, on several occasions, you did not involve effective demonstration in your teaching to reduce the student's confusion. Remember to follow the ‘I do - we do - you do’ approach.", score: 2, quality: true);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You gave the student clear demonstrations on how to complete tasks by modelling an on-screen activity or modelling a conversation first when the student was confused. Your demonstration largely helped the student achieve the learning target effectively and efficiently.  When in the classroom, you will want to try to follow the ‘I do- we do- you do’ approach. You used a combination of TPR, props, and interacting with the slide to create an excellent learning environment. ", score: 3, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Full Sentences");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You rarely encouraged the student to speak in full sentences. You also didn't encourage the student to speak in full sentences using the target vocabulary. This is extremely important in building up student's conversational skills and increasing student output.  ", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You encouraged students to speak in full sentences in several occasions, but you allowed one word answers approximately 50% of the time. You could also benefit more from encouraging the student to use target vocabulary. This is extremely important in building up student's conversational skills and increasing student output. ", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did an excellent job encouraging the student to speak in full sentences throughout the class. This is extremely important in building up student\'s conversational skills and increasing student output. You did an excellent job focusing on the target sentences listed in the tips.", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Corrections");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You seldomly corrected student’s pronunciation and grammar mistakes. It's important to be mindful of student's errors and to correct them in a positive and accurate way in order to optimize the student's learning.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You corrected some of student’s major pronunciation and grammar mistakes in a positive fashion. However, you missed out on some other opportunities to correct the student's major mistakes to enhance their learning outcome. You could also consider making corrections in a more positive fashion so the student does not feel discouraged in class. ", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You corrected all of the student’s major pronunciation and grammar mistakes in a positive fashion. You prompted enough repetition upon student’s mistakes so as to further enhance student’s learning through their own mistakes. ", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Repetition");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You encouraged very little to no repetition of new words or sentence structures or upon correction of imperfect pronunciation, words, or sentences.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You encouraged the student to repeat some new words or sentence structures and/or upon correction of imperfect pronunciation, words, or sentences. However, the student would have benefited more from the opportunity to repeat the target vocabulary more often.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did an excellent job both in letting the student repeat new words or sentences and in encouraging repetition upon correction of imperfect pronunciation, words, or sentences. In doing so you were able to reinforce the student’s understanding and retention of new or complex content. You consistently taught the new vocabulary and had the student repeat the word multiple times before asking them to use it in a sentence. You often prompted repetition after correcting a student\'s mistake. ", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Response to Feedback");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You applied limited amounts of your Mock Class Mentor's midpoint feedback", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You accepted your Mock Class Mentor's midpoint feedback, but could have benefited more from applying it in more detail to your class", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You accepted your Mock Class Mentor\'s midpoint feedback and successfully applied it in teaching part two. In doing so, you achieved a better student learning outcome for the second teaching part. ", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Lesson Content");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did not follow the teaching objectives throughout your teaching. VIPKID has a specific curriculum in place to optimize the student's learning experience, it is very important to complete the lesson objectives. ", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You missed some of the content laid out in the teaching objectives throughout your teaching. You occasionally failed to meet the slide objectives.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You successfully covered all of the content laid out in the teaching objectives. The teaching objectives are carefully designed in a systematic way to achieve an effective learning experience for the student. ", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Extend");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did not extend beyond the lesson to help explain the class content.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You occasionally extended beyond the lesson to help explain the class content. Be sure to extend when appropriate so the student can be provided with enough opportunities to fulfill the learning objectives. ", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You extended beyond the lesson to help explain the class content and allowed for active learning in the class. The student was able to understand the class content better and study more through extension. ", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Student Output");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "The student barely spoke during the lesson. It is important to encourage student output so the student can demonstrate to the teacher that they understand the lesson content.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You tried to allow the student opportunities to practice speaking. However, oftentimes you failed to give the student enough opportunities to speak and the student was not able to fully dive into the lesson content due to a lack of practice. The student wasn't able to speak on every slide, and was mostly prompted to repeat rather than answer questions independently.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "For the majority of the class, you gave the student multiple opportunities to practice speaking based on evaluation of the student's language ability. On some occasions, you did not give the student enough opportunities to speak and the student was not able to fully dive into the content due to a lack of practice.", score: 2, quality: true);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "Throughout the class, you gave the student ample opportunities to practice speaking based on evaluation of the student\'s language ability, which is extremely important for building up the student\'s speaking proficiency. The student spoke about 50% of the time for the low level class and about 70% for the higher level class. The student was also able to speak on every slide, and was prompted to answer questions rather than repeat after the teacher.", score: 3, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Patience");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You frequently interrupted the student and did not wait a sufficient amount of time for the student to answer (3-4 seconds). At times you also appeared frustrated with the student. Please be mindful that English is not the student's first language so they will struggle when learning new languages.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You tried to be patient with the student during the class; however, you did not successfully exhibit consistent good patience by giving student ample time to respond throughout the class. On occasion (3-4 incidents) you interrupted the student to give a correction. This may cause the student to become discouraged.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You exhibited patience in waiting for the student and never displayed frustration. You rarely interrupted the student and gave the student plenty of opportunity to respond.", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "Interactivity");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You rarely smiled and did not create an encouraging or fun learning atmosphere for the student. ", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You displayed a good teaching attitude for the majoirty of the class. At times you appeared inattentive or unfriendly to the needs of the student.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You displayed excellent teaching attitude by smiling often and constantly encouraging your student, which helped build a positive and fun learning atmosphere in the classroom.", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "energy");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "Your energy level was quite low throughout the lesson. Be sure to maintain high energy levels throughout the class, especially during the introduction, activity time, and when rewarding the student.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "Overall your energy level was okay during the class, but it waned from time to time. Be sure to maintain high energy levels throughout the class, especially during the introduction, activity time, and when rewarding the student.", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "Your energy level throughout the class was great and you successfully adjusted your energy level in accordance with the teaching content. It was especially high during the introduction, activity time, and when rewarding the student.", score: 2, quality: true);
	topic = McmTopic.create!(user_id: user.id, name: "reward");
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You did not utilize a reward system to reward the student during the class. Teachers are expected to have a reward system in the classroom and use it consistently to reward the student for doing a good job.", score: 0, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You prepared a reward system for the class. However, you did not clearly introduce the reward system at the beginning of the class and/or you did not use it consistently to reward the student for doing a good job throughout the whole class. ", score: 1, quality: false);
	SentenceScore.create!(mcm_topic_id: topic.id, sentence: "You introduced an age/level-appropriate reward system at the beginning of the class and used it consistently during the class to reward the student for doing a good job, which led to a classroom environment that facilitated student learning. You also gave plenty of verbal praise.", score: 2, quality: true);
	@student_level = StudentLevel.create!(name: 'Non-Verbal PreVIP Trial', generic_text: 'It was so nice to meet name today! Listening is the first step of language learning. name did a wonderful job with paying close attention and listening well.  I think with practice in this type of setting, name will rapidly advance in the program. I think starting at a young age gives name a big advantage.   I will be happy to teach name again soon! name is an excellent candidate for VIPKID. Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)
	RandomSentence.create!(sentence: 'He listens well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He pays close attention', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an active learner', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems engaged in the lesson', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems happy to learn English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems quick to learn new words', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an enthusiastic student', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is hard working in class', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is progressing well in his learning of English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an exciting student to teach', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is cooperative in learning', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is a cute student', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He sings the songs', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is a very active learner', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Pronunciation is improving', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is repeating well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He follows the teacher well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He sings along with all of the songs', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is improving the use of the mouse', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'His attention to class is great', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'His speaking is great', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He says numbers so well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He understands big and small letters', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He can say the alphabet very well.', student_level_id: @student_level.id)
	@student_level = StudentLevel.create!(name: 'Non-Reader Trial', generic_text: 'It was so nice to meet name today! He is a hard working student. He speaks very well! He could repeat all of the words and letters. He is young and learning this type of classroom. I am impressed at how quickly name learns! He said: "happy, star, bear, bubbles, monkey, yes, ok,go". I will be happy to teach name again soon. He will feel comfortable to learn English. Excellent 5 star job! I think with practice in this type of setting, He will rapidly advance in the program. I think starting at a young age is a big advantage. name is an excellent candidate for VIPKID. Excellent 5 star job! Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)
	RandomSentence.create!(sentence: 'He listens well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He pays close attention', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an active learner', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems engaged in the lesson', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems happy to learn English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems quick to learn new words', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an enthusiastic student', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is hard working in class', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is progressing well in his learning of English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an exciting student to teach', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is cooperative in learning', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He circles the answers well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He writes letters well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He has good handwriting', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is a clever student', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is learning to read', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is quick to learn new vocabulary', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is learning to use full sentences', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He could practice using full sentences', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He could practice putting \"a\" \"an\" \"the\" in front of nouns', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He can practice answering questions', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He can circle the first letters of vocabulary words to help with reading', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: ' Pronunciation is improving', student_level_id: @student_level.id)
	@student_level = StudentLevel.create!(name: 'Reader Trial', generic_text: 'It was so nice to meet name today! He is a hard working student. name speaks very well! He could repeat all of the words and sentences. name did a good job with reading. Practice speaking with a native speaker will help name make fast progress with pronunciation. I will be happy to teach name again soon. He will feel comfortable to expand on already good English. Excellent 5 star job! I think with practice in this type of setting He will rapidly advance in the program. name is an excellent candidate for VIPKID. Excellent 5 star job! Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)

	RandomSentence.create!(sentence: 'He listens well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He pays close attention', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an active learner', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems engaged in the lesson', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems happy to learn English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems quick to learn new words', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an enthusiastic student', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is hard working in class', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is progressing well in his learning of English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an exciting student to teach', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is cooperative in learning', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is reading well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'I see progress in his reading', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He can practice reading aloud at home', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He can practice reading short stories', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He can use the workbooks to practice reading', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'I see improvement in confidence', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'I see improvement in speaking', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'I see improvement in reading', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'I see improvement in saying full sentences', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He can read short words easily', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Pronunciation is improving', student_level_id: @student_level.id)
	@student_level = StudentLevel.create!(name: 'MC PreVIP', generic_text: 'It is nice to meet adorable name. He participates fully in class. He can practice putting "a" in front of nouns. "I see a cat". name knows all of the letters and can match big to small. He can put together sentences with the help of the teacher. "I draw a line. I love Dino". name sang three songs today!! Please review the notes on the text box in the lesson video for specific words and grammar to review. Great 5 happy star job today. Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)
	RandomSentence.create!(sentence: 'He listens well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He pays close attention', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an active learner', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems engaged in the lesson', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems happy to learn English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems quick to learn new words', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an enthusiastic student', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is hard working in class', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is progressing well in his learning of English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an exciting student to teach', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is cooperative in learning', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is a cute student', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He sings the songs', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is a very active learner', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Pronunciation is improving', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is repeating well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He follows the teacher well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He sings along with all of the songs', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is improving the use of the mouse', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'His attention to class is great', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'His speaking is great', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He says numbers so well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He understands big and small letters', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He can say the alphabet very well.', student_level_id: @student_level.id)
	@student_level = StudentLevel.create!(name: 'Level 1', generic_text: 'It is nice to meet adorable name. He participates fully in class. name can practice putting "a" in front of nouns. "I see a cat". name knows all of the letters and can match big to small. He can put together sentences with the help of the teacher. " I draw a line. I love Dino". He sang three songs today!! Please review the notes on the text box in the lesson video for specific words and grammar to review. Great 5 happy star job today. Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)
	RandomSentence.create!(sentence: 'boy is progressing so well in speaking.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is listening, paying attention, and repeating very well.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy can circle first letters of words to help with reading.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy understood all of the directions and circled all of the answers correctly too.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Keep working hard.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Great job this lesson.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is progressing well in understanding.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy can follow the directions easily.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy repeats well after teacher.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is able to interact with the teacher repeating the words and sounds very well.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Excellent 5 happy star job!', student_level_id: @student_level.id)
	@student_level = StudentLevel.create!(name: 'Level 2', generic_text: 'It was very nice to see name today! He is progressing well in understanding English. He could say and read everything very well!. Excellent job. When working at home, name could underline the first letter of words in the workbook to help associate letters in addition to pictures with the words. This will help with reading. Please review the notes on the text box in the lesson video for specific words and grammar to review. Excellent 5 happy stars today! Keep working hard name! Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)

	RandomSentence.create!(sentence: 'boy is progressing well in understanding.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy can follow the directions easily.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy repeats well after teacher.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is able to interact with the teacher repeating the words and sounds very well.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Excellent 5 happy star job!', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is progressing so well in speaking.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is listening, paying attention, and repeating very well.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy can circle first letters of words to help with reading.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy understood all of the directions and circled all of the answers correctly too', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Wow. Keep working hard.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is creating own sentences expressing own ideas using correct grammar.', student_level_id: @student_level.id)
	@student_level = StudentLevel.create!(name: 'Level 3', generic_text: 'It was very nice to see name today! name is a wonderful speaker! He knows all of the lesson vocabulary. He can deepen English language understanding with conversation which name did so well today. Great work with all of the grammar and vocabulary too! He can speak in full sentences. He answered lots of questions. name did a good job correcting errors when encouraged. Please review the notes on the text box in the lesson video for specific words and grammar to review. Overall a great job--5 happy stars today! Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)
	RandomSentence.create!(sentence: '5 happy stars today! ', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is progressing well in understanding.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is a wonderful reader.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy knows all of the lesson vocabulary.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy can deepen language understanding with conversation which was done so well today.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: ' boy is wonderful and hardworking and I see progress throughout the class.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Wow - reading so fast.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is an exceptional student.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'I can see that boy is working very hard on his English.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Congratulations on a great assessment.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy spoke very well.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy did a very good job today.', student_level_id: @student_level.id)
	@student_level = StudentLevel.create!(name: 'Level 4', generic_text: 'name is a wonderful reader. Wow - name is reading so fast. He also knows all of the vocabulary very well. He can deepen English language understanding with conversation which name did so well today. He answered lots of questions and used complete sentences in the answers. name could practice reading aloud between lessons to help with fluency. Please review the notes on the text box in the lesson video for specific words and grammar to review. So nice to see name today. 5 super stars! Have a prosperous New Year! -From Teacher Deborah H', user_id: user.id)
	RandomSentence.create!(sentence: '5 happy stars today! ', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is progressing well in understanding.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: ' boy is wonderful and hardworking and I see progress throughout the class.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'boy is an exceptional student', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'I can see that boy is working very hard on his English.', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'Congratulations on a great assessment.', student_level_id: @student_level.id)
	@student_level = StudentLevel.create!(name: 'Level 5', generic_text: 'Please review the notes on the text box in the lesson video for specific words and grammar to review.', user_id: user.id)
	RandomSentence.create!(sentence: 'He read all of the paragraphs very well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He read fluidly', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is speaking well with correct pronunciation', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is well able to read long and difficult words', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'I see lots of progress in confidence', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He has excellent thinking skills', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'The words in this lesson have many syllables and are hard to say-well done', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He answered lots of questions', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He could practice saying more full sentences', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is a great learner', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He listens well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He pays close attention', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an active learner', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems engaged in the lesson', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems happy to learn English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems quick to learn new words', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an enthusiastic student', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is hard working in class', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is progressing well in his learning of English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an exciting student to teach', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is cooperative in learning', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He circles the answers well', student_level_id: @student_level.id)
	@student_level = StudentLevel.create!(name: 'Level 6', generic_text: 'Please review the notes on the text box in the lesson video for specific words and grammar to review.', user_id: user.id)
	RandomSentence.create!(sentence: 'He read all of the paragraphs very well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He read fluidly', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is speaking well with correct pronunciation', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is well able to read long and difficult words', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'I see lots of progress in confidence', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He has excellent thinking skills', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'The words in this lesson have many syllables and are hard to say-well done', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He answered lots of questions', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He could practice saying more full sentences', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is a great learner', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He listens well', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He pays close attention', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an active learner', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems engaged in the lesson', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems happy to learn English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He seems quick to learn new words', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an enthusiastic student', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is hard working in class', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is progressing well in his learning of English', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is an exciting student to teach', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He is cooperative in learning', student_level_id: @student_level.id)
	RandomSentence.create!(sentence: 'He circles the answers well', student_level_id: @student_level.id)
end

seedUser(user)