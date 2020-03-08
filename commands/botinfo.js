const Discord = require("discord.js")

module.exports.run = async (bot,message,args)=>{
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setDescription("Bot informatie")
        .setColor('#15f153')
        .setThumbnail(bicon)
        .addField("Bot naam", bot.user.username)
        .addField("Gemaakt op", bot.user.createdAt)
    message.channel.send(botembed)

}
module.exports.help = {
    name:"botinfo"
}