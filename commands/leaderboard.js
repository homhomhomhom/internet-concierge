const Discord = require('discord.js')

module.exports.run = async (bot, message, args, con) =>{
    con.query(`SELECT * FROM userlevels`, (err, results)=>{
        if(err) throw err
        if(results.length === 0){
            message.channel.send('Er is geen data voor de leaderboard uwu')
        }else{
            con.query(`SELECT * FROM userlevels ORDER BY userLevel DESC LIMIT 5`,(e, results)=>{
                console.log(results)
                let sicon = message.guild.iconURL
                let embedLB = new Discord.RichEmbed()
                    .setTitle('**gluhub_** leaderboard')
                    .setThumbnail(sicon)
                    .addField('Nummer 1' , `Gebruiker: ${results[0].userName}`)
                    .addField(`Level: ${results[0].userLevel}`, `XP: ${results[0].userXP}`)
                    .addField('Nummer 2' , `Gebruiker: ${results[1].userName}`)
                    .addField(`Level: ${results[1].userLevel}`, `XP: ${results[1].userXP}`)
                    .addField('Nummer 3' , `Gebruiker: ${results[2].userName}`)
                    .addField(`Level: ${results[2].userLevel}`, `XP: ${results[2].userXP}`)
                    .addField('Nummer 4' , `Gebruiker: ${results[3].userName}`)
                    .addField(`Level: ${results[3].userLevel}`, `XP: ${results[3].userXP}`)
                    .addField('Nummer 5' , `Gebruiker: ${results[4].userName}`)
                    .addField(`Level: ${results[4].userLevel}`, `XP: ${results[4].userXP}`)
                message.channel.send(embedLB)
            })
        }
    })
}

module.exports.help ={
    name:'lb'
}