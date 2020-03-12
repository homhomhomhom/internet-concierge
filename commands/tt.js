const Discord = require('discord.js')

module.exports.run = async(bot, message, args, con) =>{
    ticket_name = args.join(" ")

    con.query(`SELECT * FROM tickets where ticket_name = '${ticket_name}'`, (e, tickets)=>{
        if (e) throw e

        if(tickets.length === 0){
            message.channel.send(`Ticket **${ticket_naam}** bestaat niet`)
            return
        }else{
            con.query(`SELECT * FROM groups`, (e, groups) =>{
                if(e) throw e

                if(groups.length === 0){
                    message.channel.send('Er zijn geen groepen in de database')
                }else{
                    con.query(`INSERT INTO c_tickets(group_id, group_name, ticket_id, ticket_name) VALUES ('${groups[0].group_id}', '${groups[0].group_name}', '${tickets[0].ticket_id}', '${ticket_name}')`, e =>{
                        if (e) throw e

                        console.log(`${message.author.username} heeft succesvol ${ticket_name} geclaimed`)

                        message.channel.send(`Je hebt successvol **${ticket_name}** geclaimed`)
                    })
                }
            })
        }
    })
}

module.exports.help ={
    name:"tt"
}