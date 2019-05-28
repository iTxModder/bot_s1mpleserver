const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  let targetMember = message.mentions.members.first();
  
  let cooldown = 18000000
  let lastrep = await db.fetch(`lastrep_${message.author.id}`)
if(lastrep !== null && cooldown - (Date.now() - lastrep) > 0) {
    let timeObj = ms(cooldown - (Date.now() - lastrep));

    message.channel.send(`<:errado:580518832939204628> **|** Você já deu seu rep. Você precisa esperar **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s**`)

} else { 
  if (targetMember = message.author.id) {
    
  } else {
      if (!targetMember) {
        message.channel.send(new Discord.RichEmbed()
            .setTitle(`<:errado:580518832939204628> **|** Usuário não encontrado no servidor **${message.guild.name}.**`)
            .setColor("#FF0000"));
      } else {
        db.add(`rep_${targetMember.id}`, 1)
        db.set(`lastrep_${message.author.id}`, Date.now());
        message.channel.send(`<:certo:580518832611786753> **|** Você deu 1 de rep para **${targetMember}**.`)
      }
    }
  }
}

module.exports.command = {
    name: 'rep',
    aliases: ["reputation"],
    description: 'Dê rep a um usuário',
    category: "leveling",
    usage: 's!rep <usuário>',
    enabled: true
}