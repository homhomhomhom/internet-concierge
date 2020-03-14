const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {


    let embedH = new Discord.RichEmbed()
        .setTitle('**commando lijst**')

        .addField('Normale commandos', '`.help` - laat je de commando lijst zijn')
        .addField('`.level` - laat je je level zien', '`.serverinfo` - laat je informatie over jou en de server zien')
        .addField('`.latency` - pingt de bot en geeft de snelheid weer', '`.weather` - laat je het weer zien van de stad die je erachter zet, bijvoorbeeld *.weather praag*')
        .addField('`.avatar` - laat je avatar zien', '`.botinfo` - geeft informatie over de bot')
        .addField('`.userinfo` - laat informatie over de gebruiker zien', 'ticket commandos')
        .addField('`.ticket_add` - voegt een ticket toe', '`.ticket_del` - verwijderd een ticket')
        .addField('`.tickets` - laat alle tickets zien', '`.cg` - maakt een groep aan')
        .addField('`.jg` - voegt jou toe in een groep', '`.group` - groepeerd je')
        .addField('`.lg` - verlaat een groep', '`.groups` - laat alle groepen zien')
        .addField('`.tt` - claimt een ticket', 'admin commandos')
        .addField('`.addrole` - voegt een rol toe aan de server', '`.purge` - purge een aantal berichten')
        .addField('`.mute/.unmute` - mute/unmute een gebruiker', '`.tempmute` - mute een gebruiker voor een bepaalde tijd')
        .addField('`.foei` - geef een gebruiker de foei rol, voor als deze stout is geweest', '`.ban` - verban een gebruiker van de server')
        .addField('`.announce` - maak een announcement', '`.say` - laat de bot iets zeggen')
        .addField('`.lockdown` - zet een kanaal op slot', '`.ic` - zegt dat de bot uit gaat maar doet het(nog) niet')
        
       
    message.author.send(embedH)
    message.channel.send('Heb je een berichtje gestuurd.')


}

module.exports.help = {
    name: "help"
}