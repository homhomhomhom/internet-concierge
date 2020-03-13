const Discord = require('discord.js')
const errors = require("../utils/errors")
const botconfig = require('../botconfig.json')
module.exports.run = async (bot, message, args)=>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        return errors.noPerms(message, "MANAGE_MESSAGES")
    }else{
        if(message.author.bot) return
        let messageArray = message.content.split(" ")
        let command = messageArray[0]
        let args = messageArray.slice(1)

        if(message.channel.type==="dm") return

        if(!message.content.startsWith(botconfig.prefix + 'ic')) return

        if(command === botconfig.prefix + 'ic'){
            message.delete()
            let channel = message.guild.channels.get("687997383854129260")
            let announcement = args.slice(0).join(" ")
            channel.send(announcement)
        }
    }
}

module.exports.help ={
    name:"ic"
}