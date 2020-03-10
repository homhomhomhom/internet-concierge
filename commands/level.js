const Discord = require('discord.js')

module.exports.run = async(bot, message, args, con) =>{
    let user;
    if(message.mentions.users.first()){
        user = message.mentions.users.first()
    }else{
        user = message.author
    }
    con.query(`SELECT * FROM userlevels WHERE userId = ${user.id}`, (err, results)=>{
        if(err) throw err;
  
        let lvlembed = new Discord.RichEmbed()
            .setTitle('Level informatie')
            .setDescription(`Gebruiker: ${results[0].userName}`)
            .setColor("RANDOM")
            .addField('Level', `${results[0].userLevel}`, true)
            .addField("XP", `${results[0].userXP}`, true)
            .setFooter('gluhub_', user.displayAvatarURL)

        message.channel.send(lvlembed)
        
    })
}

module.exports.help ={
    name: 'level'
}