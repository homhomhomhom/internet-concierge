const Discord = require("discord.js")
const errors = require("../utils/errors")
module.exports.run = async(bot,message,args,con) =>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        errors.noPerms(message, "MANAGE_MESSAGES")
    }else{
        group_name = args.join(" ")
        randomId = () =>{
            return Math.floor(Math.random() * 900)
        }

        con.query(`SELECT * FROM groups WHERE group_name = '${group_name}'`, (e, r)=>{
            if(e) throw e
            if(r.length === 0 && group_name.length > 2){
                con.query(`INSERT INTO groups(group_name, group_id) VALUES ('${group_name}', ${randomId()})`, e =>{
                    if(e) throw e
                    console.log(`${message.author.username} heeft ${group_name} aangemaakt`)
                    message.channel.send(`Group **${group_name}** is succesvol aangemaakt`)
                })
            }
            else if (r.length > 0){
                message.channel.send(`Group **${group_name}** bestaat al`)
            }else{
                message.channel.send('Welke naam wil je dat de groep heeft?')
            }
        })
    }
}

module.exports.help={
    name:"cg"
}