const Discord = require("discord.js")
const errors = require("../utils/errors")
module.exports.run = async(bot, message, args, con)=>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        errors.noPerms(message, "MANAGE_MESSAGES")
    }else{
        ticket_name = args.join(" ")

        con.query(`INSERT INTO tickets(ticket_name) VALUES('${ticket_name}')`, e =>{
            if(e) throw(e)
            console.log('successfully added ticket')
        })
    }   
}

module.exports.help ={
    name:'ticket_add'
}