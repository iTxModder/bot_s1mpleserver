const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  
  function formatTime(date, full) {
    let time = '';
    time += date.getDate() < 10 ? `0${date.getDate()}-` : `${date.getDate()}-`;
    const month = date.getMonth() + 1;
    time += month < 10 ? `0${month}-` : `${month}-`;
    time += `${date.getFullYear()}`;
    if (!full) return time;
    time += date.getHours() < 10 ? ` 0${date.getHours()}:` : ` ${date.getHours()}:`;
    time += date.getMinutes() < 10 ? `0${date.getMinutes()}:` : `${date.getMinutes()}:`;
    time += date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;
    return time;
  }
const embed = new Discord.RichEmbed();
  embed.addField('Nome', message.channel.name);
  embed.addField('Id', message.channel.id);
  embed.addField('Data de Criação', formatTime(message.channel.createdAt, true));
  message.channel.send(embed)
}

module.exports.command = {
    name: 'channelinfo',
    description: 'Mostra as especificações de um canal',
    category: "info",
    usage: 's!channelinfo',
    enabled: true
}