#! /usr/bin/ruby

puts "Hello Word!"
puts 3+2
puts 2/3
puts 2.1/3.0
puts 3**2 
puts Math.sqrt(9)
Math.sqrt(+10)

def h
	puts "Hello World!"
	puts "GOod"
end

def h(name)
	puts "Hello #{name.capitalize}!"
end

h('byebye')

class Greeter
	def initialize(name = "world")
		@name = name
	end

	def say_hi
		puts "Hi #{@name}"
	end

	def say_bye
		puts "Bye #{@name}, come back soon"
	end

end

g = Greeter.new("Piingpong")
g.say_bye
g.say_hi
puts "**********************************"
#puts Greeter.instance_methods
puts Greeter.instance_methods(false)
puts "******************************"

puts g.respond_to?("respond_to?")
puts g.respond_to?("good")

class Greeter
	attr_accessor :name
end

ac = Greeter.new("MhName")
puts ac.respond_to?("name")
puts ac.respond_to?("name=")
ac.say_hi
