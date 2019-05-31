const Discord = require("discord.js");
const Botconfig = require("../../botconfig.json");

module.exports.run = async (bot, message, args, messages) => {
          let wrongembed = new Discord.RichEmbed()
        .setColor(0xED0C0C)
        .setAuthor(`ERRO`, 'https://i.imgur.com/obwiHcn.png')
        .setDescription(`<:errado:580518832939204628> **|** ${message.author}, Você não tem permissão para fazer isso.`);
  if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Administrador")) {
message.channel.send(`<a:loading:416475652922015746> **|** Reiniciando bot...`)
      bot.destroy().then(bot.login(Botconfig.token))
      message.reply(`<a:AcceptGif:569565878551838750> **|** O bot foi reiniciado com sucesso.`)
  } else {
    message.channel.send(wrongembed)
  }
}

module.exports.command = {
    name: 'restart',
    description: 'Reinicia o bot.',
    category: "admin",
    usage: ['s!restart'],
    enabled: true
}