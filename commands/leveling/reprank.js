const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(bot, message, args) => {
let usermon = message.mentions.members.first();

let userrep = await db.fetch(`rep_${message.author.id}`)

if(!usermon){
        message.channel.send(`:crystal_ball: | ${message.author.username}, você possui **${userrep}** de reputação.`)

} else {

    let memberrep = await db.fetch(`rep_${usermon.id}`)

    let membubebed = new Discord.RichEmbed()
    .setAuthor(usermon.displayName)
    .setThumbnail(usermon.user.avatarURL)
    .setColor("RANDOM")
    .addField(`Possui`, `${memberrep} de reputação`)

    message.channel.send(membubebed)
}
}

module.exports.command = {
    name: 'reprank',
    aliases: ["reputationrank", "replevel"],
    description: 'Veja a rep de um usuário',
    category: "leveling",
    usage: 'replevel <usuário>',
    enabled: true
}