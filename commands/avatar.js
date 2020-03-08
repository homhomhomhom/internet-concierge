const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {
  if (message.author.bot) return;
  let user;
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else {
    user = message.author;
  }

  let embed = new Discord.RichEmbed()
    .setAuthor(user.username)
    .setImage(user.avatarURL);
  message.channel.send(embed);
};


module.exports.help ={
    name: 'avatar'
}