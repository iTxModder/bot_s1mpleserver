const Discord = require('discord.js')
const db = require('quick.db')
const Botconfig = require("../../botconfig.json");

exports.run = async (client, message, args, config) => {
  let amountdep = parseInt(args.join(' ').replace(message.author.id, ''))
  let moonsqtem = await db.fetch(`moons_${message.author.id}`)
  
  console.log("1")
  
  if (!args) {
  const nooperation = new Discord.RichEmbed()
    .setAuthor(message.author.displayName)
    .setThumbnail(message.user.avatarURL)
    .setColor("RANDOM")
    .addField(`<:errado:580518832939204628> **|** Por favor use **s!vault** see|dep|with.`)
  message.channel.send(nooperation)
  } else {
  
  if (message.content.startsWith(Botconfig.prefix+'dep')) {
    console.log("2")
    if(isNaN(amountdep)) {    
    const depembednoamount = new Discord.RichEmbed()
    .setAuthor(message.author.displayName)
    .setThumbnail(message.user.avatarURL)
    .setColor("RANDOM")
    .addField(`<:errado:580518832939204628> **|** Por favor indique uma quantia para depositar.`)
    
    message.channel.send(depembednoamount)
    
    } else {
      console.log("3")
      if (moonsqtem > amountdep) {
      db.subtract(`moons_${message.author.id}`, amountdep)
      db.add(`vault_moons_${message.author.id}`, amountdep)
      
      let vaultmoons = await db.fetch(`vault_moons_${message.author.id}`)
      
      const depembedsuccess = new Discord.RichEmbed()
    .setAuthor(message.author.displayName)
    .setThumbnail(message.user.avatarURL)
    .setColor("RANDOM")
    .addField(`<a:economia:580518832792272916> **|** O seu cofre tem ${vaultmoons} moons guardadas.`)
    
    message.channel.send(depembedsuccess)
        } else {
          const depembednomoons = new Discord.RichEmbed()
    .setAuthor(message.author.displayName)
    .setThumbnail(message.user.avatarURL)
    .setColor("RANDOM")
    .addField(`<:errado:580518832939204628> **|** Você não tem moons suficientes para depositar.`)
        }
      }
    }
  }
}

module.exports.command = {
    name: 'vault',
    description: 'Deposite dinheiro no banco',
    category: "economia",
    usage: '``s!vault see|dep|with ([quantia]Só quando usado o ``dep`` ou o ``with``.)``',
    enabled: true
}