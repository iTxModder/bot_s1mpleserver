const Discord = require('discord.js')
const db = require('quick.db')
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
  }
    console.log(club.name)
    console.log(club.id)
  let clubvault = club.name;
      let vaultmoons = await db.fetch(`vaultmoons_${club}`)
      if (vaultmoons === null) await db.set(`vaultmoons_${club}`, 0);
  
  let clubid = club.id
  let membersWithRole = message.guild.roles.get(clubid).members;
  let infoembed = new Discord.RichEmbed()
  .setColor('#04da00')
  .setAuthor(`Informação do clube ${club.name}`)
  .setDescription(`Membros: ${membersWithRole.size}\n Moons: ${vaultmoons} `)
  message.channel.send(infoembed)
}

module.exports.command = {
    name: 'clubinfo',
    aliases: ['clubinformação'],
    description: 'Vê a informação do clube',
    category: "economia",
    usage: '`clubinfo',
    enabled: true
}