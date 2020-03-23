const Discord = require('discord.js')
const ms = require('ms')
const botconfig = require('../botconfig.json')
module.exports.run = async (bot, message,args) =>{
    const remindtime = args[0]

    if(!message.content.startsWith(botconfig.prefix)) return 
    if(message.author.bot) return 

    message.channel.send(`Ik zal je een dm sturen over ${remindtime}`)

    setTimeout(()=>{
        message.author.send(`Je hebt **${remindtime}** geleden een reminder gezet om water te drink. Blijf gehydrateerd!!`)
    }, ms(remindtime))
}

module.exports.help ={
    name:'drink'
}