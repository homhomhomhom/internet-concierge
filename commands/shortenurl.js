const Discord = require("discord.js");
const snekfetch = require('snekfetch');
exports.run = async (client, message, args) => {
    const url = args.join("")
    try {
        const { body } = await snekfetch
            .post('urlshortener.googleapis.com')
            .query({
                longUrl: url,
                key: process.env.URL_SHORT 
            })
            .send({
                longUrl: url
            });
        message.channel.send(`Je nieuwe url is: ${body.id}`);
    } catch (err) {
        message.reply(`Er is iets fouts gegaan: \`${err.message}\`. Probeer het later nog een keer!`);
    }
}

module.exports.help ={
    name:'url'
}