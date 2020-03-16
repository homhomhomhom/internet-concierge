const Discord = require("discord.js")
const errors = require("../utils/errors")
module.exports.run = async(bot, message, args, con)=>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        errors.noPerms(message, "MANAGE_MESSAGES")
    }else{
        ticket_name = args.join(" ")

        function randomId() {
            return Math.floor(Math.random() * 900);
        }

        con.query(`SELECT * FROM tickets WHERE ticket_name = '${ticket_name}'`, (err, results) => {
            if (err) throw err;
            if (results.length === 0) {

                con.query(`INSERT INTO tickets(ticket_name, ticket_id) VALUES('${ticket_name}', ${randomId()})`, e => {
                    if (e) throw (e)
                    console.log(`${message.author.username} successfully created ${ticket_name}`)
                    message.channel.send(`Ticket **${ticket_name}** succesvol toegevoegd`)
                })
            } else {
                message.channel.send("Er is al een ticket met die naam")
            }
        })
    }   
}

module.exports.help ={
    name:'ticket_add'
}