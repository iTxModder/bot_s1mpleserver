const Discord = require('discord.js')
const db = require('quick.db')
const Botconfig = require("../../botconfig.json");

exports.run = async (client, message, args, config) => {
  let uservault = message.author.username;
      let vaultmoons = await db.fetch(`vault_moons_${message.author.id}`)
      if (vaultmoons === null) db.set(`vault_moons_${message.author.id}`, 0);
  
  let vaultuser = message.mentions.members.first();

let usermoons = await db.fetch(`moons_${message.author.id}`)

if(!vaultuser){
          const vaultembed = new Discord.RichEmbed()
    .setAuthor(`Cofre de ${uservault}`)
    .setThumbnail(uservault.avatarURL)
    .setColor("RANDOM")
    .addField(`O seu cofre tem ${vaultmoons} moons guardadas.`, "-------------")
    
    message.channel.send(vaultembed)
      } else {
        let membervaultmoons = await db.fetch(`vault_moons_${vaultuser.id}`)
        if (membervaultmoons === null) db.set(`vault_moons_${message.author.id}`, 0);
         
        if (membervaultmoons > 0) {
        const vaultembed = new Discord.RichEmbed()
    .setAuthor(`Cofre de ${vaultuser.displayName}`)
    .setThumbnail(vaultuser.avatarURL)
    .setColor("RANDOM")
    .addField(`O cofre de ${vaultuser.displayName} tem ${membervaultmoons} moons guardadas.`, "-------------")
    message.channel.send(vaultembed)
      } else {
        message.reply(`
<:Alert:580520339705167872> Ocorreu um erro ao obter as moons do banco desse usuário. Por favor tente outra vez. <:Alert:580520339705167872> 
Se o problema persistir, por favor contate um dos devs.
Para saber quem são os devs, use ***s!botinfo***`)
      }
      }
      }
module.exports.command = {
    name: 'vault',
    aliases: ['cofre'],
    description: 'Mostra o dinheiro que tens no banco, ou mostra o dinheiro que outro utilizador tem no banco.',
    category: "economia",
    usage: '``vault``',
    enabled: true
}