const botconfig = require('../botconfig.json')
const errors = require('../utils/errors.js')
module.exports.run = async(bot, message, args)=>{
    let foei = message.guild.roles.find(r => r.name === 'Foei')
    let member = message.mentions.members.first()

    if(!message.member.hasPermission(["MANAGE_MESSAGES"])){
        errors.noPerms(message, "MANAGE_MESSAGES")
    }else if(member.roles.find(r => r.name === 'Foei')){
        message.channel.send(`${member.user.username} is vergeven`)
        member.removeRole(foei)
    }else{
        message.channel.send(`${member.user.username} is stout geweest`)
        member.addRole(foei)
    }
}

module.exports.help ={
    name: 'foei'
}