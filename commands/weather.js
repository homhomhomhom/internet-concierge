const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (bot, message, args) => {
  weather.find({
    search: args.join(" "),
    degreeType: 'C'
  }, function(err, result) {
    if (err) console.log(err);
    if (result === undefined || result.length === 0) {
      message.channel.send({
        embed: {
          "description": "**Geef een plaats op**",
          "title": "Error",
          "color": 0xff2222
        }
      }).then(msg => {
          msg.delete(5000);
      })
      return;
    }
    var current = result[0].current;
    var location = result[0].location;
    const embed = new Discord.RichEmbed()
      .setDescription(`**${current.skytext}**`)
      .setAuthor(`Weather for ${current.observationpoint}`)
      .setThumbnail(current.imageUrl)
      .setColor(0x00AE86)
      .addField('Tijdzone', `UTC${location.timezone}`, true)
      .addField('Temperatuur type', location.degreetype, true)
      .addField('Temperatuur', `${current.temperature} Graden`, true)
      .addField('Gevoels Temperatuur', `${current.feelslike} Graden`, true)
      .addField('Wind', current.winddisplay, true)
      .addField('Luchtvochtigheid', `${current.humidity}%`, true)
    message.channel.send({embed});
  })
}

exports.help ={
    name:'weather'
}