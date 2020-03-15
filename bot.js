const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({
  partials: Object.values(["MESSAGE", "CHANNEL"]),
});
const botconfig = require("./botconfig.json");
bot.commands = new Discord.Collection();
require('dotenv').config()
const mysql = require("mysql")
const con = mysql.createConnection(process.env.JAWSDB_URL)

con.connect(e =>{
  if(e) throw (e)
  console.log('Connected to database')
})




fs.readdir("./commands/", (err, files) => {
  if (err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if (jsfile.length <= 0) {
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers`);
  bot.user.setActivity("over het GLU", {
    type: "WATCHING"
  });
});

bot.on("error", console.error);

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;
  if (!message.content.startsWith(prefix)) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args, con);
});

bot.on('guildMemberAdd', member =>{
  const channel = member.guild.channels.find(ch => ch.id ==="687969872621469845")
  const mention = member.guild.channels.find(ch => ch.name === 'regels').toString()
  if(!channel) return

  channel.send(`Welkom student ${member} van het GLU! Lees eerst ${mention}`)

  con.query(`SELECT * FROM ungrouped WHERE member_id = ${member.id}`, (err, results) =>{
    if(err) throw (err)
    if(results.length === 0){
      con.query(`INSERT INTO ungrouped (member_id, member_name) VALUES ('${member.id}', '${member.username}')`, e =>{
        if(e) throw(e)
        console.log("Successfully added " + member.username + ' to the database')
      })
    }else{
      return
    }
 })
 
  con.query(`SELECT * FROM userlevels WHERE userID = ${member.id}`, (err,results) =>{
    if(err) throw(err)
    if(results.length === 0){
      con.query(`INSERT INTO userlevels(userLevel, userId, userName) VALUES('1', '${member.id}', '${member.user.username}')`, e =>{
        if(e) throw (e)
        console.log('New member added to levels successfully!' + member.id)
      })
    }else{
      return
    }
  })
  const guest = member.guild.roles.find(r => r.name === 'Nieuw Lid')
  
  member.addRole(guest).catch(console.error)
  
})

bot.on('message', message =>{
  if(message.author.bot) return

  con.query(`SELECT * FROM ungrouped WHERE member_id = ${message.author.id}`, (err, results) =>{
    if(err) throw (err)

    if(results.length === 0){
      con.query(`INSERT INTO ungrouped (member_id, member_name) VALUES ('${message.author.id}', '${message.author.username}')`, e =>{
        if(e) throw(e)
        console.log("Successfully added " + message.author.username + ' to the database')
      })
    }else{
      return
    }
  })
})

//roles

bot.on('message', message =>{
  let args = message.content.substring(botconfig.prefix.length).split(" ")
  const member = message.member
  switch(args[0]){
    case '2MD1'.toLowerCase():
      const _2md1 = message.guild.roles.find(r => r.name ==='2MD1')
      member.addRole(_2md1).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_2md1.name}**`).then(m => m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_2md1.name}`)
      break;
    case '1WDV1'.toLowerCase():
      const _1wdv1 = message.guild.roles.find(r => r.name ==='1WDV1')
      member.addRole(_1wdv1).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_1wdv1.name}**`).then(m => m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_1wdv1.name}`)
      break;
    case '1WDV2'.toLowerCase():
      const _1wdv2 = message.guild.roles.find(r => r.name ==='1WDV2')
      member.addRole(_1wdv2).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_1wdv2.name}**`).then(m=> m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_1wdv2.name}`)
      break;
    case '2MD2'.toLowerCase():
      const _2md2 = message.guild.roles.find(r => r.name ==='2MD2')
      member.addRole(_2md2).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_2md2.name}**`).then(m => m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_2md2.name}`)
      break;
    case '3MD1'.toLowerCase():
      const _3md1 = message.guild.roles.find(r => r.name ==='3MD1')
      member.addRole(_3md1).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_3md1.name}**`).then(m => m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_3md1.name}`)
      break;
    case '1WD1'.toLowerCase():
      const _1wd1 = message.guild.roles.find(r => r.name ==='1WD1')
      member.addRole(_1wd1).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_1wd1.name}**`).then(m => m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_1wd1.name}`)
      break;
    case '1WD2'.toLowerCase():
      const _1wd2 = message.guild.roles.find(r => r.name ==='1WD2')
      member.addRole(_1wd2).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_1wd2.name}**`).then(m => m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_1wd2.name}`)
      break;
    case '1WD3'.toLowerCase():
      const _1wd3 = message.guild.roles.find(r => r.name ==='1WD3')
      member.addRole(_1wd3).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_1wd3.name}**`).then(m => m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_1wd3.name}`)
      break;
    case '2WD1'.toLowerCase():
      const _2wd1 = message.guild.roles.find(r => r.name ==='2WD1')
      member.addRole(_2wd1).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_2wd1.name}**`).then(m => m.delete(6000))
      console.log(`Successfully adeed ${message.author.username} to ${_2wd1.name}`)
      break;
    case '2WD2'.toLowerCase():
      const _2wd2 = message.guild.roles.find(r => r.name ==='2WD2')
      member.addRole(_2wd2).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_2wd2.name}**`).then(m => m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_2wd2.name}`)
      break;
    case '4IV1'.toLowerCase():
      const _4iv1 = message.guild.roles.find(r => r.name ==='4IV1')
      member.addRole(_4iv1).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_4iv1.name}**`).then(m => m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_4iv1.name}`)
      break;
    case '4IV2'.toLowerCase():
      const _4iv2 = message.guild.roles.find(r => r.name ==='4IV2')
      member.addRole(_4iv2).catch(console.error)

      message.channel.send(`Je bent nu lid van **${_4iv2.name}**`).then(m => m.delete(6000))
      console.log(`Successfully added ${message.author.username} to ${_4iv2.name}`)
      break;
  }
})


bot.on('message', message =>{
  if(message.content === botconfig.prefix + 'clear'){
    if(message.member.hasPermission("MANAGE_MESSAGES")){
      message.channel.fetchMessages().then(
        list = ()=>{
          message.channel.bulkDelete(list)
        },
        err = () =>{
          message.channel.send('Nope')
        }
      )
    }
  }
})

bot.on('message', message =>{
  const channelR = bot.channels.find(ch => ch.id === '688720597005500467')
  if(message.author.bot) return
  if(message.channel === channelR){
    message.delete(5000)
  }else{
    return
  }
})

bot.on('guildMemberRemove', member =>{
  const channel = member.guild.channels.find(ch => ch.name ==="_meuk_")
  if(!channel) return

  channel.send(`Oei, daar gaat **${member}** 😔`)
})

//level script

randomXP= () => {
  return Math.floor(Math.random() * 7) + 8;
}
bot.on('message', message => {
  if (message.author.bot) return;

  con.query(`SELECT * FROM userlevels WHERE userID = ${message.author.id}`, (err, results) => {
    if (err) throw (err)
    if (results.length === 0) {
      con.query(`INSERT INTO userlevels (userID, userXP, userLevel, userName) VALUES ('${message.author.id}', ${randomXP()}, 1, '${message.author.username}')`, err => {
        if (err) throw (err);
        console.log("Successfully added " + message.author.id + ' to the database')
      })
    } else {
      con.query(`UPDATE userlevels SET userXP = ${results[0].userXP + randomXP()} WHERE userID = ${message.author.id}`, err => {
        if (err) throw err;
        console.log("Successfully added user xp!")
      })
    }
    
    user = message.author;

    if(results.length === 0){
      return
    }else{
      let curxp = `${results[0].userXP}`;
      let curLvl = `${results[0].userLevel}`;
      let nxtLvl = `${results[0].userLevel}` * 800;
      curxp = curxp + randomXP()
      if (nxtLvl <= `${results[0].userXP}`) {
        con.query(`UPDATE userlevels SET userLevel = ${results[0].userLevel + 1} WHERE userID = ${message.author.id}`, err => {
          if (err) throw err;
          console.log("leveltje omhoog")
        })
        curLvl = `${results[0].userLevel}`;

        let lvlup = new Discord.RichEmbed()
          .setThumbnail(user.avatarURL)
          .setAuthor(user.username)
          .setTitle('Leveltje omhoog')
          .setColor("RANDOM")
          .addField("Nieuw leveltje", `${results[0].userLevel}`)
        
          const channelL = bot.channels.find(ch => ch.id ==='687975218253135884')
          if(message.author.bot) return
          channelL.send(lvlup)
      }
    }
  })
})


bot.login(process.env.TOKEN);