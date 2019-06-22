const Discord = require('discord.js')
const db = require('quick.db')
const Botconfig = require("../../botconfig.json");
//  "" "" ""

exports.run = async (bot, message, args) => {
  
  if(message.member.roles.some(r=>["🏅       Personas", "🏅       FSociety", "🥇       Central da Goiaba", "🥈       Uchiha", "🥉       Gold Thieves"].includes(r.name)) ) {
 if(message.member.roles.some(r=>["🏅       Personas"].includes(r.name)) ) {
   var club = message.guild.roles.find('name', "🏅       Personas")
 } else {
    if(message.member.roles.some(r=>["🏅       FSociety"].includes(r.name)) ) {
     var club = message.guild.roles.find('name', "🏅       FSociety")
 } else {
     if(message.member.roles.some(r=>["🥇       Central da Goiaba"].includes(r.name)) ) {
       var club = message.guild.roles.find('name', "🥇       Central da Goiaba")
     } else {
       if(message.member.roles.some(r=>["🥈       Uchiha"].includes(r.name)) ) {
         var club = message.guild.roles.find('name', "🥈       Uchiha")
     } else {
         if(message.member.roles.some(r=>["🥉       Gold Thieves"].includes(r.name)) ) {
           var club = message.guild.roles.find('name', "🥉       Gold Thieves")
         }
       }
     }
   }
 }
   
   if(message.content.includes('Personas')) {
   var clubchoosen = message.guild.roles.find('name', "🏅       Personas")
 } else {
    if(message.content.includes('FSociety')) {
     var clubchoosen = message.guild.roles.find('name', "🏅       FSociety")
 } else {
     if(message.content.includes('Central da Goiaba')) {
       var clubchoosen = message.guild.roles.find('name', "🥇       Central da Goiaba")
     } else {
       if(message.content.includes('Uchiha')) {
         var clubchoosen = message.guild.roles.find('name', "🥈       Uchiha")
     } else {
         if(message.content.includes('Gold Thieves')) {
           var clubchoosen = message.guild.roles.find('name', "🥉       Gold Thieves")
         }
       }
     }
   }
 }
  
  
  
  let clubvault = club.name;
      let vaultmoons = await db.fetch(`vaultmoons_${club}`)
      if (vaultmoons === null) await db.set(`vaultmoons_${club}`, 0);
  
  let vaultuser = message.mentions.members.first();


if(!vaultuser){
          const vaultembed = new Discord.RichEmbed()
    .setAuthor(`Cofre de ${clubvault}`)
    .setThumbnail(bot.avatarURL)
    .setColor("RANDOM")
    .addField(`O cofre do seu clube tem ${vaultmoons} moons guardadas.`, "-------------")
    
    message.channel.send(vaultembed)
      } else {
        let clubchoosen = []
        let otherclubvaultmoons = await db.fetch(`vaultmoons_${clubchoosen}`)
        if (otherclubvaultmoons === null) db.set(`vaultmoons_${clubchoosen}`, 0);
         
        if (otherclubvaultmoons > 0) {
        const vaultembed = new Discord.RichEmbed()
    .setAuthor(`Cofre de ${clubchoosen}`)
    .setThumbnail(bot.avatarURL)
    .setColor("RANDOM")
    .addField(`O cofre do club ***${clubchoosen}*** tem ${otherclubvaultmoons} moons guardadas.`, "-------------")
    message.channel.send(vaultembed)
      } else {
        message.reply(`
<:Alert:580520339705167872> Ocorreu um erro ao obter as moons do banco desse club. Por favor tente outra vez. <:Alert:580520339705167872> 
Se o problema persistir, por favor contate um dos devs.
Para saber quem são os devs, use ***s!botinfo***`)
      }
      }
    } else {
  message.reply('Tu não pertences a nenhum clube!')
}
      }
module.exports.command = {
    name: 'clubvault',
    aliases: ['cofreclub', 'vaultclub', 'clubcofre'],
    description: 'Mostra o dinheiro o teu clube tem no banco, ou mostra o dinheiro que outro blube tem no banco.',
    category: "economia",
    usage: '``clubvault``',
    enabled: true
}