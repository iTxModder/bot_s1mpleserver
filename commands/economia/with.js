const Discord = require('discord.js')
const db = require('quick.db')
const Botconfig = require("../../botconfig.json");

exports.run = async (client, message, args, config) => {
  let uservault = message.author.username;
      let vaultmoons = await db.fetch(`vault_moons_${message.author.id}`)
      if (vaultmoons === null) db.set(`vault_moons_${message.author.id}`, 0);
  
  let moons = await db.fetch(`moons_${message.author.id}`)
  
  let amountletters = (args.join(' ').replace(uservault, ''))
  
  let amount = parseInt(args.join(' ').replace(uservault, ''))

  if (amountletters === 'all') {
    if (vaultmoons > 0) {
    db.add(`moons_${message.author.id}`, vaultmoons)
    db.subtract(`vault_moons_${message.author.id}`, vaultmoons)
      
      const vaultembed = new Discord.RichEmbed()
    .setAuthor(`Cofre de ${uservault}`)
    .setThumbnail(uservault.avatarURL)
    .setColor("RANDOM")
    .addField(`<:certo:580518832611786753> Retiradas ${vaultmoons} moons do banco.`, "-------------")
       message.channel.send(vaultembed)
    } else {
      message.reply(`<a:economia:580518832792272916> Você não tem moons para retirar! <a:economia:580518832792272916>`)
    }
  } else {
        if(isNaN(amount)) return message.reply("<:errado:580518832939204628> **|** Por favor indique a quantidade de moons que quer retirar do banco.")
        if(amount < 0) return message.reply('<:errado:580518832939204628> **|** Você não pode retirar moons negativas.')
    if (amount > vaultmoons) { message.reply(`<:errado:580518832939204628> Não podes retirar tanto dinheiro! <:errado:580518832939204628>`)
  } else {
  
  db.add(`moons_${message.author.id}`, amount)
  db.subtract(`vault_moons_${message.author.id}`, amount)
      
      const vaultembed = new Discord.RichEmbed()
    .setAuthor(`Cofre de ${uservault}`)
    .setThumbnail(uservault.avatarURL)
    .setColor("RANDOM")
    .addField(`<:certo:580518832611786753> Retiradas ${amount} moons do banco.`, "-------------")
    
    message.channel.send(vaultembed)
      
    }
  }
}
      

module.exports.command = {
    name: 'with',
    aliases: ['withdraw'],
    description: 'Retira dinheiro do banco',
    category: "economia",
    usage: '`s!with <quantia> | s!with all',
    enabled: true
}