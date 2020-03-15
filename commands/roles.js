const {RichEmbed} =  require ('discord.js')
const {prefix} = require('../botconfig')

module.exports.run = async (bot, message, args) =>{
    if(message.author.bot) return
    const channelR = bot.channels.find(ch => ch.id === '688720597005500467')
    if(message.channel=== channelR){

        const a = message.guild.roles.get('687994607828467733') //1WDV1
        const b = message.guild.roles.get('687994568620113968') //1WDV2
        const c = message.guild.roles.get('687976061505765411') //2MD1
        const d = message.guild.roles.get('687976206741667941') //2MD2
        const e = message.guild.roles.get('688698857420488733') //3MD1
        const f = message.guild.roles.get('688699692141379586') //1WD1
        const g = message.guild.roles.get('688698574481129529') //1WD2
        const h = message.guild.roles.get('688698682178142242') //1WD3
        const i = message.guild.roles.get('688698692655644743') //2WD1
        const j = message.guild.roles.get('688700050528010250') //2WD2
        const k = message.guild.roles.get('688700263242268691') //4IV1
        const l = message.guild.roles.get('688700433128357904') //4IV2
        const filter = (reaction, user) => ['🇦', '🇧', '🇨', '😎', '💨', '🕋', '👉', '👈', '👹', '🕺', '👀', '👁️'].includes(reaction.emoji.name) && user.id === message.author.id;

        const embed = new RichEmbed()
            .setTitle('Beschikbare ')
            .setDescription(`
            
            🇦 ${a.toString()}
            🇧 ${b.toString()}
            🇨 ${c.toString()}
            😎 ${d.toString()}
            💨 ${e.toString()}
            🕋 ${f.toString()}
            👉 ${g.toString()}
            👈 ${h.toString()}
            👹 ${i.toString()}
            🕺 ${j.toString()}
            👀 ${k.toString()}
            👁️ ${l.toString()}
            `)
            .setColor(0xdd9323)
            .setFooter(`ID: ${message.author.id}`);
            
        message.channel.send(embed).then(async msg => {

            await msg.react('🇦');
            await msg.react('🇧');
            await msg.react('🇨');
            await msg.react('😎')
            await msg.react('💨')
            await msg.react('🕋')
            await msg.react('👉')
            await msg.react('👈')
            await msg.react('👹')
            await msg.react('🕺')
            await msg.react('👀')
            await msg.react('👁️')
            msg.awaitReactions(filter, {
                max: 1,
                time: 30000,
                errors: ['time']
            }).then(collected => {

                const reaction = collected.first();

                switch (reaction.emoji.name) {
                    case '🇦':
                        if (message.member.roles.has(a.id)) {
                            return message.channel.send('Makker, je hebt deze rol al.').then(m => m.delete(6000));
                        }
                        message.member.addRole(a).catch(err => {
                            console.log(err);
                            return message.channel.send(`Er ging iets fout toen ik je je aan deze rol wou toevoegen: **${err.message}**.`);
                        });
                        message.channel.send(`Je bent nu lid van **${a.name}**!`).then(m => m.delete(6000));
                        break;
                    case '🇧':
                        if (message.member.roles.has(b.id)) {
                            return message.channel.send('Makker, je hebt deze rol al').then(m => m.delete(6000));
                        }
                        message.member.addRole(b).catch(err => {
                            console.log(err);
                            return message.channel.send(`Er ging iets fout toen ik je je aan deze rol wou toevoegen: **${err.message}**.`);
                        });
                        message.channel.send(`Je bent nu lid van **${b.name}**!`).then(m => m.delete(6000));
                        break;
                    case '🇨':
                        if (message.member.roles.has(c.id)) {
                            return message.channel.send('Makker, je hebt deze rol al').then(m => m.delete(6000));
                        }
                        message.member.addRole(c).catch(err => {
                            console.log(err);
                            return message.channel.send(`Er ging iets fout toen ik je je aan deze rol wou toevoegen: **${err.message}**.`);
                        });
                        message.channel.send(`Je bent nu lid van **${c.name}**!`).then(m => m.delete(6000));
                        break;
                    case '😎':
                        if(message.member.roles.has(d.id)){
                            return message.channel.send(`Makker, je bent al lid van **${d.name}**.`).then(m => m.delete(6000))
                        }
                        message.member.addRole(d).catch(err=>{
                            console.log(err)
                            return message.chnnel.send("Oei, er is iets fout gegaan.").then(m => m.delete(6000))
                        })
                        message.channel.send(`Je bent nu lid van **${d.name}**.`).then(m => m.delete(6000))
                        break;
                    case '💨':
                        if(message.member.roles.has(e.id)){
                            return message.channel.send(`Makker, je bent al lid van **${e.name}**.`).then(m => m.delete(6000))
                        }
                        message.member.addRole(e).catch(err=>{
                            console.log(err)
                            return message.chnnel.send("Oei, er is iets fout gegaan.").then(m => m.delete(6000))
                        })
                        message.channel.send(`Je bent nu lid van **${e.name}**.`).then(m => m.delete(6000))
                        break;
                    case '🕋':
                        if(message.member.roles.has(f.id)){
                            return message.channel.send(`Makker, je bent al lid van **${f.name}**.`).then(m => m.delete(6000))
                        }
                        message.member.addRole(f).catch(err=>{
                            console.log(err)
                            return message.chnnel.send("Oei, er is iets fout gegaan.").then(m => m.delete(6000))
                        })
                        message.channel.send(`Je bent nu lid van **${f.name}**.`).then(m => m.delete(6000))
                        break;
                    case '👉':
                        if(message.member.roles.has(g.id)){
                            return message.channel.send(`Makker, je bent al lid van **${g.name}**.`).then(m => m.delete(6000))
                        }
                        message.member.addRole(g).catch(err=>{
                            console.log(err)
                            return message.chnnel.send("Oei, er is iets fout gegaan.").then(m => m.delete(6000))
                        })
                        message.channel.send(`Je bent nu lid van **${g.name}**.`).then(m => m.delete(6000))
                        break;
                    case '👈':
                        if(message.member.roles.has(h.id)){
                            return message.channel.send(`Makker, je bent al lid van **${h.name}**.`).then(m => m.delete(6000))
                        }
                        message.member.addRole(h).catch(err=>{
                            console.log(err)
                            return message.chnnel.send("Oei, er is iets fout gegaan.").then(m => m.delete(6000))
                        })
                        message.channel.send(`Je bent nu lid van **${h.name}**.`).then(m => m.delete(6000))
                        break;
                    case '👹':
                        if(message.member.roles.has(i.id)){
                            return message.channel.send(`Makker, je bent al lid van **${i.name}**.`).then(m => m.delete(6000))
                        }
                        message.member.addRole(i).catch(err=>{
                            console.log(err)
                            return message.chnnel.send("Oei, er is iets fout gegaan.").then(m => m.delete(6000))
                        })
                        message.channel.send(`Je bent nu lid van **${i.name}**.`).then(m => m.delete(6000))
                        break;
                    case '🕺':
                        if(message.member.roles.has(j.id)){
                            return message.channel.send(`Makker, je bent al lid van **${j.name}**.`).then(m => m.delete(6000))
                        }
                        message.member.addRole(j).catch(err=>{
                            console.log(err)
                            return message.chnnel.send("Oei, er is iets fout gegaan.").then(m => m.delete(6000))
                        })
                        message.channel.send(`Je bent nu lid van **${j.name}**.`).then(m => m.delete(6000))
                      break;
                    case '👀':
                        if(message.member.roles.has(k.id)){
                            return message.channel.send(`Makker, je bent al lid van **${k.name}**.`).then(m => m.delete(6000))
                        }
                        message.member.addRole(k).catch(err=>{
                            console.log(err)
                            return message.chnnel.send("Oei, er is iets fout gegaan.").then(m => m.delete(6000))
                        })
                        message.channel.send(`Je bent nu lid van **${k.name}**.`).then(m => m.delete(6000))
                      break;
                    case '👁️':
                        if(message.member.roles.has(l.id)){
                            return message.channel.send(`Makker, je bent al lid van **${l.name}**.`).then(m => m.delete(6000))
                        }
                        message.member.addRole(l).catch(err=>{
                            console.log(err)
                            return message.chnnel.send("Oei, er is iets fout gegaan.").then(m => m.delete(6000))
                        })
                        message.channel.send(`Je bent nu lid van **${l.name}**.`).then(m => m.delete(6000))
                      break;
                }
            }).catch(collected => {
                return message.channel.send(`Ik heb je niet kunnen toevoegen`).then(m => m.delete(6000))
            });
        });
    }else{
        message.channel.send('Ik kan deze command niet in dit kanaal gebruiken.')
    }
};

exports.help = {
    name: 'rollen'
};