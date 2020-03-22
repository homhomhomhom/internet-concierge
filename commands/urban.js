const urban = require('urban')
const {RichEmbed} = require('discord.js')
const {stripIndents} = require('common-tags')

module.exports.run = async(bot, message,args) =>{
    if(!args[0] || !['search', 'random'].includes(args[0])) return message.channel.send('.urban <search||random> (query)')
    let image = 'https://www.letsgoactive.nl/wp-content/uploads/2016/12/Grafisch-Lyceum-Utrecht.jpg'
    let search = args[1] ? urban(args.slice(1).join(" ")) : urban.random()
    try{
        search.first(res => {
            if(!res) return message.channel.send('Ik heb niets kunnen vinden')
            let {word, definition, example, thumbs_up, thumbs_down, permalink, author} = res

            let embed = new RichEmbed()
                .setColor('RANDOM')
                .setAuthor(`Urban dictionary | ${word}`, image)
                .setThumbnail(image)
                .setDescription(stripIndents `**Definition:** ${definition || 'No definition'}
                **Example:** ${example || "Geen voorbeeld"}
                **Upvote:** ${thumbs_up || 0}
                **Downvote:** ${thumbs_down || 0}
                **Link:** [link to ${word}](${permalink || "https://www.urbandictionary.com/"})`)
                .setTimestamp()
                .setFooter(`Written by ${author || "unknown"}`)

                message.channel.send(embed)
        })
    }catch(e) {
        console.log(e)
        return message.channel.send('Er is iets fout gegaan')
    }
}

module.exports.help ={
    name:"urban"
}