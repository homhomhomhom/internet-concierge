const ms = require('ms')

module.exports.run = async (bot, message, args) =>{
    let reminder = args.join(" ").slice(3)
    let remindTime = args[0]

    if(ms(remindTime)){
        message.channel.send(`Ik zal je over **${remindTime}** herinneren aan **${reminder}**`)

        setTimeout(()=>{
            message.author.send(`Hier je reminder van **${remindTime}** geleden: **${reminder}**`)
        }, ms(remindTime))
    }
}

module.exports.help ={
    name:"remind"
}