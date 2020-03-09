const ms = require("ms");
const errors = require("../utils/errors")
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))return errors.noPerms(message, "ADMINISTRATOR");

  if (!client.lockit) client.lockit = [];
  let time = args.join(" ");
  let validUnlocks = ["unlock"];
  if (!time) return message.reply("Hoelang moet ik het kanaal sluiten?");

  if (validUnlocks.includes(time)) {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      })
      .then(() => {
        message.channel.sendMessage("Cockdown opgeheven.");
        clearTimeout(client.lockit[message.channel.id]);
        delete client.lockit[message.channel.id];
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    message.channel
      .overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      })
      .then(() => {
        message.channel
          .sendMessage(`Kanaal gesloten voor ${ms(ms(time), { long: true })}`)
          .then(() => {
            client.lockit[message.channel.id] = setTimeout(() => {
              message.channel
                .overwritePermissions(message.guild.id, {
                  SEND_MESSAGES: null
                })
                .then(message.channel.sendMessage("Lockdown opgeheven."))
                .catch(console.error);
              delete client.lockit[message.channel.id];
            }, ms(time));
          })
          .catch(error => {
            console.log(error);
          });
      });
  }
};


exports.help = {
  name: "lockdown",
};
