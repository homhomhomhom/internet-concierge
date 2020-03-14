const Discord = require('discord.js')
const errors = require ('../utils/errors.js')

module.exports.run = async(bot, message, args, con) =>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        errors.noPerms(message, 'MANAGE_MESSAGES')
    }else{
        deadline_name = args.join(" ")

        con.query(`SELECT * FROM deadlines WHERE deadline_name = '${deadline_name}'`,(e, r) =>{
            if (e) throw e
            if(r.length === 0){
                message.channel.send(`Deadline **${deadline_name}** bestaat niet`)
            }else{
                con.query(`DELETE FROM deadlines WHERE deadline_name= '${deadline_name}'`, e =>{
                    if(e) throw e

                    message.channel.send(`Ik heb **${deadline_name}** verwijderd`)
                })
            }
        })
    }
}

module.exports.help ={
    name:"d_d"
}