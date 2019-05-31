const db = require('quick.db')
const Botconfig = require("../../botconfig.json");
//"318149637964038144","311558677851144193","392053413741068288"
const ownerID = ("472720369346936842")
const ownerID2 = ("318149637964038144")
const ownerID3 = ("311558677851144193")
const ownerID4 = ("392053413741068288")
exports.run = async(bot, message, args) => {
  const msgaut = message.author.username

    //if (message.author.id != ownerID | message.author.id != ownerID2 | message.author.id != ownerID3 | message.author.id != ownerID4 ) return message.channel.send("<:errado:580518832939204628> **|** Apenas o dono do bot pode fazer isso.");
if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Administrador")) {

    if (!message.mentions.members.first()) return message.reply("<:errado:580518832939204628> **|** Para quem você quer dar moons? :crystal_ball:?")
    
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember, ''))

        if(isNaN(amount)) return message.reply("<:errado:580518832939204628> **|** Quantas moons :crystal_ball: você quer dar?")

        let targetMoons = await db.fetch(`moons_${targetMember.id}`)

            if(targetMoons === null) targetMoons = 0
 
            db.add(`moons_${targetMember.id}`, amount)

            message.channel.send(`<:certo:580518832611786753> **|** Hey <@${targetMember.id}> você recebeu ${amount} :crystal_ball: moons  de <@${msgaut}>`)

  } else return message.channel.send("<:errado:580518832939204628> **|** Apenas o dono do bot pode fazer isso.")
}

module.exports.command = {
    name: 'dar',
    description: 'Comando para dar moons, apenas BotOwner',
    category: "admin",
    usage: 's!dar [moons] [user]',
    enabled: true
}