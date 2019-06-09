const Discord = require("discord.js");

module.exports.run = async (bot, message, args, messages) => {

  const deleteCount = parseInt(args[0], 10);
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Não.");
    if (!args[0] || args[0 == "help"]) return message.reply(`Por favor use: s!purge <número>"`);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("<:errado:580518832939204628> **|** Por favor especifique um número entre 2 e 100 para eliminar.");
   
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`<:errado:580518832939204628> **|** Não posso remover as mensagens pelo seguinte erro: ${error}`));
  
  let purgeEmbed = new Discord.RichEmbed()
    .setAuthor("♻️ Ação | Limpar Mensagens")
    .setColor("RANDOM")
    .addField("Executor", `<@${message.author.id}>`)
    .addField("Purga", `${args[0]}`)
    .addField("Deletadas", `${args[0]}`)
    .setFooter("S1mple Server", bot.user.displayAvatarURL);

    let purgeChannel = message.guild.channels.find(`name`, "📕┃s1mple bot");
    if(!purgeChannel) return message.channel.send("<:errado:580518832939204628> **|** Não encontrei o canal mod-logs.");

    purgeChannel.send(purgeEmbed);

  }

module.exports.command = {
    name: 'purge',
    description: 'Faz delete a certas mensagens.',
    category: "admin",
    usage: ['purge <número>'],
    enabled: true
}