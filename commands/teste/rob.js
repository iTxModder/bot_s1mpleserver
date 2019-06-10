const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (client, message, args, config) => {


    let user = message.mentions.members.first()
    let targetuser = await db.fetch(`moons_${user.id}`) 
    let author = await db.fetch(`moons_${message.author.id}`) 
    
let cooldown = 60000

let lastrob = await db.fetch(`lastrob_${message.author.id}`)
if(lastrob !== null && cooldown - (Date.now() - lastrob) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastrob));

    message.channel.send(`🚔 **|** Você está escondido para aque a policia não o apanhe. Você precisa esperar **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s** `)

} else { 
  if (!args) return message.channel.send('<:No:580518832939204628> **|** Por favor use s!rob [user]')
    if (!user) {
        return message.channel.send('<:No:580518832939204628> **|** Você precisa de mencionar um usuário para roubar')
    }
    if (author < 250) { // if the authors balance is less than 250, return this.
        return message.channel.send('<:No:580518832939204628> **|** Você precisa de pelo menos de **250 Moons** para roubar alguém.')
    }

    if (targetuser = 0) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`<:No:580518832939204628> **|** ${user.user.username} não tem nada para roubar.`)
    } else {


    let random = await Math.floor(Math.random() * 200) + 1; // random number 200-1
      console.log(random)
if (random < targetuser) {
  
    let embed = new Discord.RichEmbed()
    .setDescription(`<:certo:580518832611786753> ${message.author} você roubou ${user} e fugiu com ${random} Moons!`)
    .setColor("ff0000")
    .setTimestamp()
    message.channel.send(embed)

    db.set(`lastrob_${message.author.id}`, Date.now());
    db.subtract(`moons_${user.id}`, random)
    db.add(`moons_${message.author.id}`, random)
  } else {
    message.channel.send(`<:No:580518832939204628> **|** ${user.user.username} não tem tanto dinheiro para roubar.`)
      }
    }
  }
}

module.exports.command = {
    name: 'rob',
    description: 'Roube alguém',
    category: "economia",
    arg: '``s!rob [user]``',
    enabled: true
}
