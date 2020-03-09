const Discord = require("discord.js")
const fs = require("fs")
let config = require("../botconfig.json")
module.exports.noPerms = (message, perm)=>{
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setTitle("Niet genoeg permissie")
        .setColor(config.red)
        .addField("Permissie nodig", perm)

    message.channel.send(embed).then(m=> m.delete(5000))
}

module.exports.equalPerms = (message, user, perms)=>{
    let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor(config.red)
        .setTitle("Error")
        .addField(`${user}heeft permissie`, perms)

    message.channel.send(embed).then(m => m.delete(5000))
}

module.exports.botuser = (message)=>{
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Je kan een bot niet verbannen")
        .setColor(config.red)
    message.channel.send(embed).then(m => m.delete(5000))
}

module.exports.cantfindUser = (channel)=>{
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Kan de opgegeven gebruiker niet vinden")
        .setColor(config.red)
    
    channel.send(embed).then(m => m.delete(5000))
}

module.exports.noReason = (channel)=>{
    let embed = new Discord.RichEmbed()
        .setTitle("Error")
        .setDescription("Geef een reden 😡")
        .setColor(config.red)
    
        channel.send(embed).then(m => m.delete(5000))
}