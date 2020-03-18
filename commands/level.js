const Discord = require('discord.js')

module.exports.run = async (bot, message, args, con) => {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first()
    } else {
        user = message.author
    }
    con.query(`SELECT * FROM userlevels WHERE userId = ${user.id}`, (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            function randomXP() {
                return Math.floor(Math.random() * 7) + 8;
              }
            con.query(`INSERT INTO userlevels (userID, userXP, userLevel, userName) VALUES ('${message.author.id}', ${randomXP()}, 1, '${message.author.username}')`, err => {
                if (err) throw err;
                console.log(`Successfully added ${message.author.username} to the database`)
            })
        } else {

            let lvlembed = new Discord.RichEmbed()
                .setTitle('Level informatie')
                .setDescription(`Gebruiker: ${results[0].userName}`)
                .setColor("RANDOM")
                .addField('Level', `${results[0].userLevel}`, true)
                .addField("XP", `${results[0].userXP}`, true)
                .setFooter('berry is een held', user.displayAvatarURL)

            message.channel.send(lvlembed)
        }


    })

    console.log(`${message.author.username} used the level command`)
}

module.exports.help = {
    name: 'level'
}