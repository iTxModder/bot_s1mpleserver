const db = require('quick.db')
const ownerID = '318149637964038144'
exports.run = async(bot, message, args) => {

    if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Administrador")) {
 

    if (!message.mentions.members.first()) return message.reply("<:zAlert:580520339705167872> **|** Mencione o usuário que você quer retirar os moons.")
    
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember, ''))

        if(isNaN(amount)) return message.reply("<:zAlert:580520339705167872> **|** Quantos moons quer retirar do usuário?")

        let targetMoons = await db.fetch(`moons_${targetMember.id}`)

            if(targetMoons === null) targetMoons = 0
 
            db.subtract(`moons_${targetMember.id}`, amount)

            message.channel.send(`<:Ferc:559356192774684694> **Hey <@${targetMember.id}> <@${ownerID}> tirou ${amount} :crystal_ball: moons de você.**`)
    } return message.channel.send("<:zAlert:580520339705167872> **|** Apenas o dono do bot pode fazer isso.");
}


module.exports.command = {
    name: 'remove',
    description: 'Comando para retirar moons de um usuário',
    category: "economia",
    usage: 's!remove [moons] [user]',
    enabled: true
}