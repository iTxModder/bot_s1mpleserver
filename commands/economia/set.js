const db = require('quick.db')
const Botconfig = require("../../botconfig.json");
const ownerID = Botconfig.ownerID
exports.run = async(bot, message, args) => {
  let msgauthor = message.author.id

 if(!bot.owners.includes(message.author.id)) return message.channel.send('<:zAlert:580520339705167872> **|** Apenas o dono do bot pode fazer isso! **|** <:zAlert:580520339705167872>');   

    if (!message.mentions.members.first()) return message.reply("<:zAlert:580520339705167872> **|** Para quem você quer setar moons? :crystal_ball:?")
    
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember, ''))

        if(isNaN(amount)) return message.reply("<:zAlert:580520339705167872> **|** Quantos moons você quer setar?")

        let targetMoons = await db.fetch(`moons_${targetMember.id}`)

            if(targetMoons === null) targetMoons = 0
 
            db.set(`moons_${targetMember.id}`, amount)

            message.channel.send(`<:certo:580518832611786753> **|** Hey <@${targetMember.id}> você recebeu ${amount} moons  de <@${msgauthor}>`)
}

module.exports.command = {
    name: 'set',
    description: 'Comando para setar moons, apenas BotOwner',
    category: "admin",
    usage: 'set [moons] [user]',
    enabled: true
}