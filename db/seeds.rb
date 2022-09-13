greetings = [
    "Hello",
    "Hi",
    "Howdy",
    "Hey",
    "Greetings",
    "Salutations"
]

greetings.each do |greeting|
    Message.create!(content: greeting)
end