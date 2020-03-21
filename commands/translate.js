const translate = require('google-translate-api')
const Discord = require('discord.js')

module.exports.run = (bot, message, args) =>{
    let lang = args[0]
    let suffix = args.slice(1).join(' ')
    if(!suffix) message.channel.send({
        embed: {
            color: 0xff2727,
            description: `:warning: **${message.author.username}**, Wat moet ik vertalen.\n{.translate \`language\` \`input\`}`,
            timestamp: new Date(),
            footer: {
                text: 'API latency is ' + `${Date.now() - message.createdTimestamp}` + ' ms'
            }
        }
    })

    console.log(suffix)

    if(!lang) return
    translate(suffix, {from: 'en', to: lang}).then(res =>{
        let embed = new Discord.RichEmbed()
            .setColor(`#4885ed`)
            .setAuthor(`Taal gedecteerd: "${lang}"`)
            .setDescription(`**Origineel**: ${suffix}\n**Vertaling**: ${res.text}`)
            .setTimestamp()
            .setFooter(`API latency is ${Date.now() - messge.createdTimestamp} ms`, message.author.displayAvatarURL)
            return message.channel.send({
                embed:embed
            })
    }).catch(e => message.channel.send({
        embed:{
            color:0xff2727,
            description: `:warning: **${message.author.username}**, ${e}`,
            timestamp:new Date(),
            footer:{
                text:`API latency is ${Date.now() - message.createdTimestamp} ms`
            }
        }
    }))
}

module.exports.help ={
    name:'translate'
}