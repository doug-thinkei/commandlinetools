#! /usr/bin/ruby

require 'json'
file=File.read('json_data_ruby_in_rails1.json')
data_hash = JSON.parse(file)

members = data_hash['members']
if members.length > 0
	puts members.length
end

member = members[1]
records = member['posts2']

#if record['1'].index('1') >= 0
#	puts record
#end

records.each do |key, value|
	#puts key.respond_to?(:to_s)
	#if key.to_s.index('1') >= 0
	 if key.to_s.index('1') != nil
	 	puts key
	 end
	#end
end