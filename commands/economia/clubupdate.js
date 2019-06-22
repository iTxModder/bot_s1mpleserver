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
 
  let clubvault = club.name;
      let vaultmoons = await db.fetch(`vaultmoons_${club}`)
      if (vaultmoons === null) await db.set(`vaultmoons_${club}`, 0);
  
  let meta1 = (vaultmoons = 100000)
  let meta2 = (vaultmoons = 250000)
  let meta3 = (vaultmoons = 500000)
  let meta4 = (vaultmoons = 1000000)
  
  let prem1 = 'Cor customizada para o cargo do clube'
  let prem2 = 'Exibição do clube'
  let prem3 = 'Surpresa'
  let prem4 = 'Canal privado'
  
  let prem = await db.fetch(`prem_${club}`)
  let metatual = await db.fetch(`meta_${club}`)
  if (metatual == null) {let metatual = 'Nenhuma'}
  console.log(metatual)
  
  let proxmeta = await db.fetch(`proxmeta_${club}`)
  console.log(proxmeta)
  
  let clubid = club.id
  let membersWithRole = message.guild.roles.get(clubid).members;
  let infoembed = new Discord.RichEmbed()
  .setColor('#04da00')
  .setAuthor(`Upgrades do clube ${club.name}`)
  .setDescription(`Próxima meta: ${proxmeta}\n Prémio na próxima meta: ${prem}\n Boost Atual: ${metatual}`)
  if(vaultmoons = meta1) {
    await db.set(`meta_${club}`, meta1)
    await db.set(`proxmeta_${club}`, meta2)
    await db.set(`prem_${club}`, prem1)
  } else {
    if(vaultmoons = meta2) {
      await db.set(`meta_${club}`, meta2)
      await db.set(`proxmeta_${club}`, meta3)
      await db.set(`prem_${club}`, prem2)
    } else {
      if(vaultmoons = meta3) {
        await db.set(`meta_${club}`, meta3)
        await db.set(`proxmeta_${club}`, meta4)
        await db.set(`prem_${club}`, prem3)
      } else {
        if(vaultmoons = meta4) {
          await db.set(`meta_${club}`, meta4)
          await db.set(`proxmeta_${club}`, 'O clube já está na meta máxima!')
          await db.set(`prem_${club}`, prem4)
        } else {
          
        }
      }
    }
  }
  message.channel.send(infoembed)
}
module.exports.command = {
    name: 'clubupdate',
    aliases: ['clubrank'],
    description: 'Vê as vantagens dos updates do clube',
    category: "economia",
    usage: 'clubinfo',
    enabled: true
}