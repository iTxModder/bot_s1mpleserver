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
    if (moons > 0) {
    db.subtract(`moons_${message.author.id}`, moons)
    db.add(`vault_moons_${message.author.id}`, moons)
      
      const vaultembed = new Discord.RichEmbed()
    .setAuthor(`Cofre de ${uservault}`)
    .setThumbnail(uservault.avatarURL)
    .setColor("RANDOM")
    .addField(`<:certo:580518832611786753> Depositadas ${moons} moons no banco.`, "-------------")
       message.channel.send(vaultembed)
    } else {
      message.reply(`<a:economia:580518832792272916> Você não tem moons para depositar! <a:economia:580518832792272916>`)
    }
  } else {
        if(isNaN(amount)) return message.reply("<:errado:580518832939204628> **|** Por favor indique a quantidade de moons que quer depositar no banco.")
        if(amount < 0) return message.reply('<:errado:580518832939204628> **|** Você não pode depositar moons negativas.')
    if (amount > moons) { message.reply(`<:errado:580518832939204628> Você não pode depositar tanto dinheiro! <:errado:580518832939204628>`)
  } else {
  
  db.subtract(`moons_${message.author.id}`, amount)
  db.add(`vault_moons_${message.author.id}`, amount)
      
      const vaultembed = new Discord.RichEmbed()
    .setAuthor(`Cofre de ${uservault}`)
    .setThumbnail(uservault.avatarURL)
    .setColor("RANDOM")
    .addField(`<:certo:580518832611786753> Depositadas ${amount} moons no banco.`, "-------------")
    
    message.channel.send(vaultembed)
}
      }
}
module.exports.command = {
    name: 'dep',
    aliases: ['deposit'],
    description: 'Deposita dinheiro no banco',
    category: "economia",
    usage: '`s!dep <quantia> | s!dep all',
    enabled: true
}