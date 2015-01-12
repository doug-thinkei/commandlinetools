require 'rubygems'
require 'json'
require 'pp'

file = File.read('result')
arrStorys = JSON.parse(file)
length = arrStorys.length
puts "We are processing #{length} records .."

#Creating arrays to store #feature, #Defects and #Task (Chore) respectively. 

features = Array.new()
defects = Array.new()
tasks = Array.new() 


#For loop -- for each stroy-- start from here. 
arrStorys.each do |story|
	current_state = story['current_state']
	if current_state == 'accepted' or current_state = 'finished'
		story_type = story['story_type']
		if 
			if story_type != nil and story_type === 'feature'
				features << story
			elsif story_type != nil and story_type === 'bug'
				defects << story
			elsif story_type != nil and story_type === 'chore'
				tasks << story
			end

		end
	end
end

puts "Features.length: #{features.length} "
puts "tasks.length: #{tasks.length} "
puts "defects length:#{defects.length}"


def processRecord(records)
	records.each { |tmp|
		id = tmp['id']
		title = tmp['name']
		story_id = tmp['id']
	#Collect labels for current story
	labels = Array.new()
	labels_input = tmp['labels']
	labels_input.each{ |tmp_label|
		labels << tmp_label['name']
	}
	#puts "Label size: #{labels.length}"
	puts "\t#{title} [\##{id}] \t #{labels} " 
}
end
#Feature part
puts "\nFeatures: "
processRecord(features)
puts "\nDefects"
processRecord(defects)
puts "\nTasks"
processRecord(tasks)

=begin
	
rescue Exception => e
	
end
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
=end


