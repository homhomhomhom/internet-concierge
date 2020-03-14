const ms = require('ms')
const errors= require('../utils/errors')

module.exports.run = async (bot, message, args) =>{
    if(!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES")
    if(message.member === message.author) return('Je kunt jezelf niet muten')
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    if(!tomute) return message.reply("Wie wil je gemute hebben?")
    if(tomute.hasPermission("MANAGE_ROLES")) return message.reply('Ik kan deze gebruiker niet muten.')
    let muterole = message.guild.roles.find(m => m.name ==='Muted')

    let mutetime = args[1]
    if(!mutetime) return message.reply("Hoelang moet de mute duren?")

    if(tomute === message.author.id){
        message.channel.send("Je kan jezelf niet muten.")
    }else{
        await (tomute.addRole(muterole.id))
        message.reply(`<@${tomute.id}> is gemute voor ${ms(ms(mutetime))}`)

        setTimeout(()=>{
            tomute.removeRole(muterole.id)
            message.channel.send(`<@${tomute.id}> is succesvol geunmute`)
        }, ms(mutetime))
    }
}

module.exports.help ={
    name:"tempmute"
}