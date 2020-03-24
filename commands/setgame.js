module.exports.run = async(bot, message, args) =>{
    if(!message.author.id === '634039627744804875') return message.reply("Alleen Gio kan dit doen")
    if(!args[0]) return
    if(args[0] === 'game') return message.reply('Wat moet ik spelen')
    if(args[0] === 'default'){
        args = `GLU bot WEB. gemaakt met ❤️ door Gio`
        message.reply(`Ik speel nu \`${args}\`.`)
        bot.user.setPresence({game: {name:args, type:0}})
    }else{
        args = args.join(" ")
        message.reply(`Ik speel nu \`${args}\`.`)
        bot.user.setPresence({game: {name:args, type:0}})
    }
}

module.exports.help ={
    name:"game"
}