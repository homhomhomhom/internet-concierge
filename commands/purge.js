const Discord = require("discord.js")
const errors = require("../utils/errors")
module.exports.run = async(bot, message, args)=>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        errors.noPerms(message, "MANAGE_MESSAGES")
    }else if(!args[0]){
        return message.channel.send('Hoeveel berichten wil je verwijderd hebben? 😡')
    }else{
        message.channel.bulkDelete(args[0]).then(()=>{
            message.channel.send(`Ik heb **${args[0]}** berichten opgeveegt.`).then(msg => msg.delete(2000))
        })
    }
}

module.exports.help ={
    name:'veeg'
}