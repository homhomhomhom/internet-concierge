const errors = require('../utils/errors')

module.exports.run = async(bot, message,args, con) =>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        errors.noPerms(message, "MANAGE_MESSAGES")
    }else{
        deadline_name = args.join(" ")

        randomId = () =>{
            return Math.floor(Math.random() * 900)
        }

        con.query(`SELECT * FROM deadlines WHERE deadline_name = '${deadline_name}'`, (e, r)=>{
            if(e) throw e
            if(r.length === 0){
                con.query(`INSERT INTO deadlines(deadline_name, deadline_id) VALUES ('${deadline_name}' , ${randomId()})`, e =>{
                    if(e){
                        console.error(e)
                        message.channel.send('Er is iets fout gegaan')
                    }else{
                        console.log(`${message.author.username} successfully created ${deadline_name}`)
                        message.channel.send(`Deadline **${deadline_name}** is succesvol aangemaakt`)
                    }
                })
            }else{
                message.channel.send('Deze deadline bestaat al')
            }
        })
    }
}

module.exports.help ={
    name:"add_deadline"
}