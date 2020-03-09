const Discord = require('discord.js')
const botconfig = ('../botconfig.json')

module.exports.run = async (bot, message, args)=>{
    if(!args[0]) return message.channel.send('Welke vragen wil je stellen?')

    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setFooter('Reageer om te stemmen')
        .setDescription(args.join(' '))
        .setTitle(`Deze poll is gemaakt door ${message.author.username}`)

        let msg = await message.channel.send(embed)

        await msg.react('👍')
        await msg.react('👎')
}

module.exports.help ={
    name:'poll'
}