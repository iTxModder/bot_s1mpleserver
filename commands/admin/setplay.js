const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    let argcustom = args.join(" ");

    let specifyembed = new Discord.RichEmbed()
        .setColor(0xED0C0C)
        .setAuthor(`<:errado:580518832939204628> **|** Falha ao setar o jogo`, 'https://i.imgur.com/obwiHcn.png')
        .setDescription(`<:Ferc:559356192774684694> ${message.author}, Por favor especifique o jogo`);
        

    let setgamembed = new Discord.RichEmbed()
        .setColor(0x07DE47)
        .setAuthor(`<:certo:580518832611786753> Jogo setado com sucesso`, 'https://i.imgur.com/M6hqbcc.png')
        .setDescription(`<:Ferc:559356192774684694> ${client.user.username} está jogando \`${argcustom}\`.`)
        .setFooter(`<:Ferc:559356192774684694> Setado por ${message.author.username}.`, message.author.avatarURL);

    let wrongembed = new Discord.RichEmbed()
        .setColor(0xED0C0C)
        .setAuthor(`ERRO`, 'https://i.imgur.com/obwiHcn.png')
        .setDescription(`<:errado:580518832939204628> **|** ${message.author}, Você não tem permissão para fazer isso.`);

    
    

    if (!argcustom[0]) return message.channel.send(specifyembed)

  
if(message.member.roles.some(r => r.name === "Manager") || message.member.roles.some(r => r.name === "Fundador") || message.member.roles.some(r => r.name === "Administrador")) {
      client.user.setActivity(argcustom)
    console.log(`${client.user.username} Está jogando ${argcustom}.`)
    message.channel.send(setgamembed)

} else {
  message.channel.send(wrongembed)
}

};

module.exports.command = {
    name: 'setplay',
    description: 'seta o jogo do bot',
    category: "admin",
    usage: ['setplay <texto>'],
    enabled: true
}