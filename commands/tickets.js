const Discord = require('discord.js')

module.exports.run = async(bot, message, args, con) =>{
    con.query(`SELECT * FROM tickets`, (e, r) =>{
        if(e) throw e
        if(r.length === 0){
            message.channel.send('Er zijn geen tickets om weertegeven')
        }else{
            let sicon = message.guild.iconURL
            let tickets = new Discord.RichEmbed()
                .setTitle('**gluhub_** beschikbare tickets_')
                .setThumbnail(sicon)
                .setDescription("Hier vind je alle beschikbare tickets voor het **praag** project")
                .addField(`ticket id: ${r[0].ticket_id}`, `ticket naam: ${r[0].ticket_name}`)
                
            message.channel.send(tickets)
        }
    })
}

module.exports.help = {
    name:"tickets"
}