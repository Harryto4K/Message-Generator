// variable that contains all the messages
const messages= [
    'The sun will shine for you today', 
    'You will accomplish big things today',
    'Today is not your day',
    'Today will be one of your best days',
    'You will have a nice day'
]


//function that will select a random message
function randomMessage(message) {
    return message[Math.floor(Math.random() * messages.length)]; 
}

//This will log to the console the message.
console.log(randomMessage(messages)); 