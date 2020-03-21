const Discord = require('discord.js')
const fs = require('fs')
module.exports.run = async(bot, message, args) =>{
    if(message.author.id !== '634039627744804875')return message.channel.send('Sorry, maar alleen Gio kan dit doen.')
    try{
        await message.reply('Ik ben aan het herstarten...')
        fs.readdir('./commands', (err, files)=>{
            const filez = files.length
            if(err) return console.error(err)
            message.channel.send(`Refreshed \`${filez + 11}\` commands met success!`)
            console.log(`Refreshed ${filez} commands`)
            fs.forEach(file =>{
                delete require.cache[require.resolve(`./${file}`)]
            })
        })
        process.exit(1)
    }catch(e){
        console.log(e)
    }
}


module.exports.help ={
    name:'reboot'
}