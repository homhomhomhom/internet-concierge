const Discord = require("discord.js")
const errors = require("../utils/errors")
module.exports.run = async(bot, message, args, con)=>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        errors.noPerms(message, "MANAGE_MESSAGES")
    }else{
        ticket_name = args.join(" ")

        function randomId() {
            return Math.floor(Math.random() * 900) + 8;
        }

        con.query(`INSERT INTO tickets(ticket_name, ticket_id) VALUES('${ticket_name}', ${randomId()})`, e =>{
            if(e) throw(e)
            console.log('successfully added ticket')
        })
    }   
}

module.exports.help ={
    name:'ticket_add'
}