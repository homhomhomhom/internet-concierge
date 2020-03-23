const {RichEmbed} = require('discord.js')
const superagent = require('superagent')
const sf = require('snekfetch')

module.exports.run = async(bot, message, args) =>{
    if(!args[0] || args[0] === 'help') return message.reply('Ik heb een hex code zonder de # nodig')
    var isOk = /^[0-9A-F]{6}$/i.test(args[0])
    if(isOk === false) return message.reply('Graag een hex code zonder de #')
    const {body} = await superagent
    .get(`https://api.alexflipnote.dev/color/${args[0]}`)
    const embed = new RichEmbed()
        .setColor('#ff9900')
        .setTitle(body.name)
        .setDescription(`Hex: ${body.hex}\n RGB: ${body.rgb}`)
        .setImage(body.image)
        .setFooter(`uwu`)

    message.channel.send(embed)
}

module.exports.help ={
    name:'color'
}