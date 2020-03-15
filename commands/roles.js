// const {RichEmbed} =  require ('discord.js')
// const {prefix} = require('../botconfig')

// module.exports.run = async (bot, message, args) =>{
//     if(message.author.bot) return
//     const channelR = bot.channels.find(ch => ch.id === '688720597005500467')
//     if(message.channel=== channelR){

//         const a = message.guild.roles.get('687994607828467733'); // Moderator
//         const b = message.guild.roles.get('687994568620113968'); // Administrator
//         const c = message.guild.roles.get('687976061505765411'); // Developer

//         const filter = (reaction, user) => ['🇦', '🇧', '🇨'].includes(reaction.emoji.name) && user.id === message.author.id;

//         const embed = new RichEmbed()
//             .setTitle('Beschikbare ')
//             .setDescription(`
            
//             🇦 ${a.toString()}
//             🇧 ${b.toString()}
//             🇨 ${c.toString()}
//             `)
//             .setColor(0xdd9323)
//             .setFooter(`ID: ${message.author.id}`);
            
//         message.channel.send(embed).then(async msg => {

//             await msg.react('🇦');
//             await msg.react('🇧');
//             await msg.react('🇨');

//             msg.awaitReactions(filter, {
//                 max: 1,
//                 time: 30000,
//                 errors: ['time']
//             }).then(collected => {

//                 const reaction = collected.first();

//                 switch (reaction.emoji.name) {
//                     case '🇦':
//                         if (message.member.roles.has(a.id)) {
//                             return message.channel.send('Makker, je hebt deze rol al.').then(m => m.delete(6000));
//                         }
//                         message.member.addRole(a).catch(err => {
//                             console.log(err);
//                             return message.channel.send(`Er ging iets fout toen ik je aan deze rol wou toevoegen: **${err.message}**.`);
//                         });
//                         message.channel.send(`Je bent nu lid van **${a.name}**!`).then(m => m.delete(6000));
//                         break;
//                     case '🇧':
//                         if (message.member.roles.has(b.id)) {
//                             return message.channel.send('Makker, je hebt deze rol al').then(m => m.delete(6000));
//                         }
//                         message.member.addRole(b).catch(err => {
//                             console.log(err);
//                             return message.channel.send(`Er ging iets fout toen ik je aan deze rol wou toevoegen: **${err.message}**.`);
//                         });
//                         message.channel.send(`Je bent nu lid van **${b.name}**!`).then(m => m.delete(6000));
//                         break;
//                     case '🇨':
//                         if (message.member.roles.has(c.id)) {
//                             return message.channel.send('Makker, je hebt deze rol al').then(m => m.delete(6000));
//                         }
//                         message.member.addRole(c).catch(err => {
//                             console.log(err);
//                             return message.channel.send(`Er ging iets fout toen ik je  aan deze rol wou toevoegen: **${err.message}**.`);
//                         });
//                         message.channel.send(`Je bent nu lid van **${c.name}**!`).then(m => m.delete(6000));
//                         break;
//                 }
//             }).catch(collected => {
//                 return message.channel.send(`Er is iets fouts gegaan`);
//             });
//         });
//     }else{
//         message.channel.send('Ik kan deze command niet in dit kanaal gebruiken.')
//     }
// };

// exports.help = {
//     name: 'rollen'
// };