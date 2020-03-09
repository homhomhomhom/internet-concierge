const Discord = require('discord.js')
const moment = require('moment')
module.exports.run = async(bot, message, args)=>{
    let sicon = message.guild.iconURL
    let serverembed = new Discord.RichEmbed()
        .setDescription('Server info')
        .setColor("RANDOM")
        .setThumbnail(sicon)
        .addField("Server naam :", message.guild.name)
        .addField("Gemaakt op:", `${moment.utc(message.guild.createdAt).format("DD/MM/YYYY")}`,true)
        .addField("Jij bent gejoined op:", `${moment.utc(message.member.joinedAt).format("DD/MM/YYYY")}`,true)
        .addField('Totale Leden', message.guild.memberCount)

    message.channel.send(serverembed)
}

module.exports.help ={
    name: 'serverinfo'
}