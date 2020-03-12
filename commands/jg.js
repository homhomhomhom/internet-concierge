const errors = require('../utils/errors')

module.exports.run = async(bot,message,args,con) =>{
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        errors.noPerms(message, 'MANAGE_MESSAGES')
    }else{
        group_name = args.join(" ")

        con.query(`SELECT * FROM groups WHERE group_name = '${group_name}'`, (e, r)=>{
            if(e) throw e
            if(r.length === 0){
                message.channel.send(`Groep **${group_name}** bestaat niet :/`)
            }else{
                con.query(`INSERT INTO grouped (member_id, member_name, group_name, group_id) VALUES('${message.author.id}', '${message.author.username}', '${r[0].group_name}', '${r[0].group_id}')`)
                
                console.log(`${message.author.username} joined group: ${group_name}`)

                message.channel.send(`Je bent **${group_name}** met success gejoined!`)
            }
        })
    }
}

module.exports.help ={
    name:"jg"
}