const Discord = require('discord.js')
const db = require('quick.db')
const Botconfig = require("../../botconfig.json");

exports.run = async (bot, message, args, config) => {
  let uservault = message.author.username;
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
      let vaultmoons = await db.fetch(`vaultmoons_${club}`)
      if (vaultmoons === null) db.set(`vaultmoons_${club}`, 0);
  
  let moons = await db.fetch(`moons_${message.author.id}`)
  
  let amountletters = (args.join(' ').replace(uservault, ''))
  
  let amount = parseInt(args.join(' ').replace(uservault, ''))

  //if (amountletters === 'all') {
    //if (moons > 0) {
    //db.subtract(`moons_${message.author.id}`, moons)
    //db.add(`vaultmoons_${club}`, moons)
      
      //const vaultembed = new Discord.RichEmbed()
    //.setAuthor(`Cofre de ${club.name}`)
    //.setThumbnail(uservault.avatarURL)
    //.setColor("RANDOM")
    //.addField(`<:certo:580518832611786753> Depositadas ${moons} moons no banco.`, "-------------")
      // message.channel.send(vaultembed)
    //} else {
      //message.reply(`<a:economia:580518832792272916> Você não tem moons para depositar! <a:economia:580518832792272916>`)
    //}
  //} else {
        if(isNaN(amount)) return message.reply("<:errado:580518832939204628> **|** Por favor indique a quantidade de moons que quer depositar no banco.")
        if(amount < 0) return message.reply('<:errado:580518832939204628> **|** Você não pode depositar moons negativas.')
    if (amount > moons) { message.reply(`<:errado:580518832939204628> Você não pode depositar tanto dinheiro! <:errado:580518832939204628>`)
  } else {
  console.log(amount)
  db.subtract(`moons_${message.author.id}`, amount)
  db.add(`vaultmoons_${club}`, amount)
      
      const vaultembed = new Discord.RichEmbed()
    .setAuthor(`Cofre de ${club.name}`)
    .setThumbnail(uservault.avatarURL)
    .setColor("RANDOM")
    .addField(`<:certo:580518832611786753> Foram depositadas ${amount} moons no banco.`, "-------------")
    
    message.channel.send(vaultembed)
}
      }
module.exports.command = {
    name: 'clubpay',
    aliases: ['clubdeposit'],
    description: 'Deposita dinheiro no banco do teu club',
    category: "economia",
    usage: '`clubpay <quantia>',
    enabled: true
}