const ms = require('ms')

module.exports.run = async(bot, message, args) =>{
    let messageArray = message.content.split(" ")
    let reminder = args[0]
    let remindtime = args[1]
    if(!remindtime) return message.reply('Wanneer wil je herinnert worden?')
    
    message.reply(`Ik zal je over **${remindtime}** herinneren aan: **${reminder}**`)
    console.log(`${message.author.username} set a reminder called: ${reminder} and it will be executed in ${remindtime}`)
    setTimeout(()=>{
        message.author.send(`Je herinnering van **${remindtime}** geleden: **${reminder}**`)
        console.log(`I just send ${message.author.username} a reminder for ${reminder}`)
    }, ms(remindtime))
}

module.exports.help ={
    name:'remind'
}