const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(bot, message, args) => {
let usermon = message.mentions.members.first();

let usermoons = await db.fetch(`moons_${message.author.id}`)

if(!usermon){
        message.channel.send(`<a:economia:580518832792272916> **|** ${message.author.username}, você possui **${usermoons}** moons.`)

} else {

    let membermoons = await db.fetch(`moons_${usermon.id}`)

    let membubebed = new Discord.RichEmbed()
    .setAuthor(usermon.displayName)
    .setThumbnail(usermon.user.avatarURL)
    .setColor("RANDOM")
    .addField(`<:certo:580518832611786753> Possui`, `${membermoons} moons`)

    message.channel.send(membubebed)
}
}

module.exports.command = {
    name: 'moons',
    description: 'Numero de moons que você tem',
    category: "economia",
    usage: 's!moons',
    enabled: true
}