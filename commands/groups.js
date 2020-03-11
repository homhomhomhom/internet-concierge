const Discord = require('discord.js')

module.exports.run = async(bot, message, args, con) =>{
    con.query(`SELECT * FROM grouped WHERE member_id = ${message.author.id}`, (e, r)=>{
        if(e) throw e

        if(r.length === 0){
            con.query(`INSERT INTO grouped (member_id, member_name) VALUES ('${message.author.id}', '${message.author.username}')`, e =>{
                if(e) throw e
                console.log(`Successfully groupd ${message.author.username} in the database`)
            })
            message.channel.send('Je bent successvol gegroepeerd')
        }else{
            message.channel.send('Je bent al gegroepeerd')
        }
    })
}

module.exports.help = {
    name:"group"
}