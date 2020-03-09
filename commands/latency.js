const Discord = require("discord.js")

module.exports.run =async (bot, message, args)=>{
    message.channel.send(new Date().getTime() - message.createdTimestamp + "ms").then(message =>{
        message.delete(5000)
    })
}

module.exports.help ={
    name:"latency"
}