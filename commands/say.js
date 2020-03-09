const errors = require('../utils/errors.js')

module.exports.run = async (bot, message, args)=>{
    message.delete()
    if(!message.member.hasPermission("MANAGE_MESSAGES")){
        errors.noPerms(message, "MANAGE_MESSAGES")
    }else{
        let botmessage= args.join(" ")
        message.channel.send(botmessage)
    }

}

module.exports.help ={
    name: "say"
}