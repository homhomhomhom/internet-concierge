const Discord = require("discord.js");
const botconfig =require("../botconfig.json");
const superagent = require("superagent");

module.exports.run = async(bot,message,args)=>{
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("Oopsie woopsie! het lijkt erop dat je niet genoeg permissies hebt");

    let mutee = message.mentions.members.first() || message.guild.get(args[0]);
    if(!mutee) return message.channel.send("Wie moet ik muten");

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "AAAAAAAAHHHHHHHH";


    let muterole = message.guild.roles.find(`name`, "Muted");

    if(mutee === message.author){
        message.channel.send('Waarom mute jij jezelf neef?')
    }else{
        mutee.addRole(muterole.id).then(()=>{
            mutee.send(`Hey makker, je bent gemute in ${message.guild.name}. De reden hiervoor is: ${reason}`)
            message.channel.send(`${mutee.user.username} is succesvol gemute`)
        })
    }
    
}

module.exports.help ={
    name:"mute"
}