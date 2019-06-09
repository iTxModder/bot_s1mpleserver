const Discord = require("discord.js");
//👨 Masculino 👩 Feminino 🌈 LGBT
exports.run = (bot, message, args) => {
  if(!message.member.roles.some(r => r.name === "👨 Masculino") || !message.member.roles.some(r => r.name === "👩 Feminino") || !message.member.roles.some(r => r.name === "🌈 LGBT")) {
    let suggestmessage = args.join(" ")//.slice(22);
    let suggestchannel = message.guild.channels.find(`name`, "💡 • sugestões");

    if (!suggestchannel) {
        return message.reply("<:errado:580518832939204628> **|** Não detetei o canal de sugestões!")
    }

    if (!suggestmessage) {
        return message.reply("<:errado:580518832939204628> **|** Por favor sugira algo!")
    }

    let embed = new Discord.RichEmbed()
        .addField("**SUGESTÃO**", `${suggestmessage}`)
        .setFooter(`Sugestão de ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react(bot.emojis.get('576519013174345738')).then(r => msg.react(bot.emojis.get('576519060909457408')))
    });


    message.reply(`Sugestão enviada.`)
    return;
  } else {
    message.reply('Por favor registre-se em #🐦 • registro para usar este comando.')
  }
}

module.exports.command = {
    name: 'sugerir',
    aliases: ['suggest'],
    description: 'Sugere algo',
    usage: 'sugerir <sugestão>',
    category: "outros",
    enabled: true
}