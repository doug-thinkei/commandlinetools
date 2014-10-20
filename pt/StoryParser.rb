require 'rubygems'
require 'json'
require 'pp'

file = File.read('pt/result.test')
arrStorys = JSON.parse(file)
length = arrStorys.length
puts length

#Creating arrays to store #feature, #Defects and #Task (Chore) respectively. 

features = Array.new()
defects = Array.new()
tasks = Array.new() 


#For loop -- for each stroy-- start from here. 
arrStorys.each do |story|
	story_type = story['story_type']
	if story_type != nil and story_type === 'feature'
		print story['kind'] + " ";  puts story['id']
		features << story
	elsif story_type != nil and story_type === 'bug'
		defects << story
	elsif story_type != nil and story_type === 'chore'
		tasks << story
	end
end
puts "Defects.length: #{defects.length} "
puts "tasks.length: #{tasks.length} "
tasks << "something else"
#features.each { |x| puts x } 

## Print generated information to screen. 

#Feature part
puts "Features: "

features.each { |tmp|
	title = tmp['name']
	story_id = tmp['id']
	#Collect labels for current story
	labels = Array.new()
	labels_input = tmp['labels']
	labels_input.each{ |tmp_label|
		labels << tmp_label['name']
	}
	#puts "Label size: #{labels.length}"

	puts "\t#{title}\t #{labels}\t[\##{tmp['id']} ] " 
}

#For loop -- for each stroy-- ends here 
