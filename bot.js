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
  bot.user.setActivity("over praag", {
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
  const channel = member.guild.channels.find(ch => ch.name ==="_meuk_")

  if(!channel) return

  channel.send(`Gegroet ${member}, welkom in **gluhub_** 😳`)

  con.query(`INSERT INTO ungrouped(member_id, member_name) VALUES('${member.id}', '${member.user.username}')`, e =>{
    if(e) throw (e)
    console.log('New member added successfully! ' + member.id)
  })
  console.log(member.user.username)

  const guest = member.guild.roles.find(r => r.name === '[_guest_]')
  
  member.addRole(guest).catch(console.error)

})

// bot.on('message', message =>{
//   if(message.content === botconfig.prefix + 'fetch'){
//     // con.query(`SELECT * FROM ungrouped WHERE member_id = ${message.guild.members}`, (err, results) =>{
//     //   if(err) throw (err)
//     //   if(results.length === 0){
//     //     con.query(`INSERT INTO ungrouped (member_id, member_name)`)
//     //   }
//     // })
    
//     let members = message.guild.members
  
    
    
//   }
// })

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

bot.on('guildMemberRemove', member =>{
  const channel = member.guild.channels.find(ch => ch.name ==="_meuk_")
  if(!channel) return

  channel.send(`Oei, daar gaat **${member}** 😔`)
})




bot.login(process.env.TOKEN);