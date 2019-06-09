const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Funcionário") || message.member.roles.some(r => r.name === "Administrador" || message.member.roles.some(r => r.name === "Moderador"))) {
  
      //if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Não tens permissão para fazer isso.");
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);
  } else return message.reply("<:errado:580518832939204628> Você não tem permissão para fazer isso.");
}

module.exports.command = {
    name: 'say',
    description: 'Faz o bot dizer uma mensagem.',
    category: "outros",
    usage: 'say <mensagem>',
    enabled: true
}