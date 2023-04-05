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

    const time = [
        'day',
        'night'
    ]

    //variable that contains the messages
    let message = [
        `You will have a ${words[Math.floor(Math.random() * words.length)]} ${time[Math.floor(Math.random() * time.length)]}`,
        `You will not have a ${words[Math.floor(Math.random() * words.length)]} ${time[Math.floor(Math.random() * time.length)]}`
    ]

    return message[Math.floor(Math.random() * message.length)]; 
}


console.log(random());