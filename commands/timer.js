const Discord = require('discord.js')
const ms = require('ms')

module.exports.run = async(bot, message, args) =>{
    let timer = args[0]

    if(!args[0]) return message.channel.send(":x: " + "| hoelang moet de timer duren?")

    if(args[0] <= 0) return message.channel.send('hoelang moet de timer duren?')

    message.channel.send(`:white_check_mark: Timer is gestart voor ${ms(ms(timer), {long:true})}`)

    setTimeout(()=>{
        message.channel.send(message.author.toString() + ` je timer voor ${ms(ms(timer), {long:true})} is afgelopen. `)
    }, ms(timer))
}

module.exports.help ={
    name:'timer'
}