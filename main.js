function random() {
    //variable that contains the words
    const words = [
        'lucky',
        'good',
        'bad',
        'stupid',
        'horrible',
        'normal'
    ]

    //variable that contains the messages
    let message = [
        `You will have a ${words[Math.floor(Math.random() * words.length)]} day`,
        `You will not have a ${words[Math.floor(Math.random() * words.length)]} day`
    ]

    return message[Math.floor(Math.random() * message.length)]; 
}


console.log(random());