const Discord = require("discord.js")
const db = require('quick.db')
module.exports.run = async (bot, message, args) => {
  
let Jacksonid = '311558677851144193' //bot.users.find(user => user.id == "311558677851144193"); 
let Brunoid = '392053413741068288'
let Darkenid = '472720369346936842'
let Mattezid = '370723033565888523'
let kazumaid = '475343118741405696'
console.log(Jacksonid)

let autor = message.author.username
let staffchannel = message.guild.channels.find(`name`, "📕┃s1mple-pedidos");

let vagasstaff = await db.fetch(`vagasstaff_staffcmd`)
console.log(vagasstaff)
let vagasstaffcont = await db.fetch(`vagasstaff_control`)
console.log(vagasstaffcont)
//if(vagasstaffcont = 0) {
//  await db.set(`vagasstaff_staffcmd`, 'Fechadas')
//let vagasstaff = 'Fechadas'}

let embed = new Discord.RichEmbed()
  .setAuthor('Staff')
  .setColor('#5500cd')
  .setDescription("**S1mple Staff** <:Staff:552356390841090058>\n <:Staff:552356390841090058> <@311558677851144193>\n <:Staff:552356390841090058> <@392053413741068288>\n <:Staff:552356390841090058> <@472720369346936842>\n<:Staff:552356390841090058> <@475343118741405696>\n<:Staff:552356390841090058> <@360100077785579540>\n<:Staff:552356390841090058> <@370723033565888523>\n<:Staff:552356390841090058> <@!375072900052549637>\n \n **Trainee** <:HypeSquad:558713688715165696>\n <:HypeSquad:558713688715165696> <@407246168301633539>\n <:HypeSquad:558713688715165696> <@!323144159903088642>\n <:HypeSquad:558713688715165696> <@!353743931294482432> ")
  .addField('Vagas para staffs:', `${vagasstaff}`)

  if(!bot.owners.includes(message.author.id)) {
        if(args[0] == 'aderir') {
          let vagasstaffcont = await db.fetch(`vagasstaff_control`)
          console.log(vagasstaffcont)
        if(vagasstaffcont > 0) {
        let vagasstaffat = await db.subtract(`vagasstaff_control`, 1)
        let vagasstaff = await db.set(`vagasstaff_staffcmd`, `Abertas - ${vagasstaffat} `)
        let embed = new Discord.RichEmbed()
        .addField("**PEDIDO**", `Pedido de entrada para staff`)
        .setFooter(`Pedido de ${message.author.tag}`)
        .setTimestamp()
        staffchannel.send(embed)
        } else {
          message.reply('Já não há vagas para a staff disponíveis. Por favor espera até que a staff disponibilize mais.')
        }
      } else return message.channel.send(embed)
}
  
  
  if(!args[0]) {
    message.channel.send(embed)
  } else {
  
  if(args[0] == 'conf') {
    if(args[1] == 'vagas') {
      if(!args[2]) {
      message.reply('Por favor usa `s!staff conf vagas true|false`')
      } else {
        if(args[2] == 'true') {
          const amount = parseInt(args[3]);
          if(isNaN(amount)) {
      message.reply('Por favor expecifica um número de vagas para abrir.')
      } else {
        if(amount < 0) {
          message.reply('Não podes expecificar um número de vagas negativo.')
        } else {
          let vagasstaff = await db.set(`vagasstaff_staffcmd`, `Abertas - ${amount} `)
          db.set(`vagasstaff_control`, amount)
          //db.set(`vagasstaff_control`, 1)
            console.log(vagasstaff)
        message.reply('Vagas para a staff definidas como `Abertas` ')
        }
      }
        
        } else {
          if(args[2] == 'false') {
            let vagasstaff = await db.set(`vagasstaff_staffcmd`, 'Fechadas')
            console.log(vagasstaff)
            message.reply('Vagas para a staff definidas como `Fechadas` ')
            }
          }
        }
      }
    }
  }
}

module.exports.command = {
    name: 'staff',
    description: 'Vê se os staffs estão online e vê se há vagas abertas para a staff',
    usage: 'staff',
    category: "outros",
    enabled: true
}