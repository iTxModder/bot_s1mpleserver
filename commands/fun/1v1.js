const Discord = require('discord.js');


exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('Eval;').setDescription(message.author.username + ', você não pode usar este comando em uma mensagem direta.').setFooter('', client.user.avatarURL).setTimestamp()); }
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 2) return message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription(message.author.tag + ', Uso: >1vs1 <@usuário> <@usuário> .').setFooter('', client.user.avatarURL).setTimestamp());
    var sans = ["10'a","1'e","20'ye","30'a","2 ye"]
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
      message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('A guerra começou!').setFooter('Guerra do desconfortável.', client.user.avatarURL).setTimestamp())
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Pat Pat.').setFooter('A guerra dos profissionais.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Patuum!!').setFooter('A guerra dos profissionais.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Patuum!! está lutando.').setFooter('A guerra dos profissionais.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('A guerra está chegando.').setFooter('A guerra dos profissionais.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('A guerra acabou!').setFooter('A guerra dos profissionais.', client.user.avatarURL).setTimestamp()))
      .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle('1vs1').setDescription('Vencedor da Batalha: **' + user.tag+'** O que diabos você conseguiu? **'+ sonuc +'** E o homem desistiu.').setImage("https://media.giphy.com/media/3oEhmVCSmpW56nR6rm/giphy.gif").setFooter('1vs1 guerra concluída.', client.user.avatarURL).setTimestamp()))
        };

exports.command = {
    name: '1v1',
    permission: "Nenhuma",
    description: 'Luta com dois usuários que queira!',
    category: "fun",
    usage: ['1v1 <@usuário> <@usuário>'],
    enabled: true
}