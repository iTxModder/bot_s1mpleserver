const db = require('quick.db')
exports.run = async(bot, message, args) => {

    if (!message.mentions.members.first()) return message.reply("<:errado:580518832939204628> **|** Por favor, a quem quer pagar moons?")
    
    let targetMember = message.mentions.members.first(),
        amount = parseInt(args.join(' ').replace(targetMember, ''))

        if(isNaN(amount)) return message.reply("<:errado:580518832939204628> **|** Por favor indique a quantidade de moons que quer pagar.")
        if(amount < 0) return message.reply('<:errado:580518832939204628> **|** Você não pode pagar moons negativas.')

        let targetMoons = await db.fetch(`moons_${targetMember.id}`),
            selfmoons = await db.fetch(`moons_${message.author.id}`)

            if(targetMoons === null) targetMoons = 0
            if(selfmoons === null) selfmoons = 0

            if (amount > selfmoons) return message.reply("<:errado:580518832939204628> **|** Você não tem moons suficientes.")

            db.add(`moons_${targetMember.id}`, amount)
            db.subtract(`moons_${message.author.id}`, amount)

            message.channel.send(`<:certo:580518832611786753> **|** Você pagou ${amount} moons para o ${targetMember.user.tag}`)

}


module.exports.command = {
    name: 'pay',
    aliases: ['pagar'],
    description: 'Pague ou ofereça moons',
    category: "economia",
    arg: '``s!pay [moons] [user]``',
    enabled: true
}