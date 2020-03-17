const ms = require('ms')

module.exports.run = async(bot, message, args) =>{
    let messageArray = message.content.split(" ")
    let announcement = args[0]
    let remindtime = args[1]
    if(!remindtime) return message.reply('Wanneer wil je herinnert worden?')
    
    message.reply(`Ik zal je over **${remindtime}** herinneren aan: **${announcement}**`)

    setTimeout(()=>{
        message.author.send(`Je herinnering van **${remindtime}** geleden: **${announcement}**`)
    }, ms(remindtime))
}

module.exports.help ={
    name:'remind'
}