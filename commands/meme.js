const rp = require('random-puppy')

module.exports.run = async (bot, message, args) =>{

    let reddit = [
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "meirl",
        "me_irl",
        'surrealmemes'
    ]

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)]

    message.channel.startTyping()

    rp(subreddit).then(async url =>{
        await message.channel.send({
            files:[{
                attachment:url,
                name:'uwu.png'
            }]
        }).then(() => message.channel.stopTyping())
    }).catch(e => console.error(e))
}
module.exports.help ={
    name:'meme'
}