const db = require('quick.db')
const ownerID = '318149637964038144'
exports.run = async(bot, message, args) => {

    if (message.author.id != ownerID) return message.channel.send("<:errado:580518832939204628> **|** Apenas o dono do bot pode fazer isso.");

    if (!message.mentions.members.first()) return message.reply("<:errado:580518832939204628> **|** Mencione o usuário que você quer retirar os moons.")
    
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember, ''))

        if(isNaN(amount)) return message.reply("<:errado:580518832939204628> **|** Quantos moons quer retirar do usuário?")

        let targetMoons = await db.fetch(`moons_${targetMember.id}`)

            if(targetMoons === null) targetMoons = 0
 
            db.subtract(`moons_${targetMember.id}`, amount)

            message.channel.send(`<:Ferc:559356192774684694> **Hey <@${targetMember.id}> <@${ownerID}> tirou ${amount} :crystal_ball: moons de você.**`)

}


module.exports.command = {
    name: 'remove',
    description: 'Comando para retirar moons de um usuário',
    category: "economia",
    usage: 's!remove [moons] [user]',
    enabled: true
}