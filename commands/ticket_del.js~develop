const Discord = require("discord.js")
const errors = require("../utils/errors")
module.exports.run = async(bot, message, args, con)=>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        errors.noPerms(message, "MANAGE_MESSAGES")
    }else{
        ticket_name = args.join(" ")
        
        con.query(`DELETE FROM tickets WHERE ticket_name = '${ticket_name}'`, e =>{
            if(e) throw(e)
            console.log('successfully removed ticket')
            message.channel.send(`Ik heb **${ticket_name}** verwijderd`)
        })
    }   
}

module.exports.help ={
    name:'ticket_del'
}