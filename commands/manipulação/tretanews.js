const Discord = require('discord.js');
var Jimp = require("jimp");

module.exports = async (client, message, args, prefix)  => {  
  
        let embed = new Discord.RichEmbed()
        .setTitle(`Comando: ${prefix}tretanews`)
        .setDescription(`**Descrição:** Faz uma alteração de imagem muito legal! \n` +
        `**Como usar:** ${prefix}tretanews \`<mensagem>\` \n` +
        `**Exemplo:** ${prefix}tretanews Duka é pego a dar o cu!`)  
        .setColor("RANDOM")
if(message.content.split(' ').slice(1).join(' ').length < 1) {
        message.channel.send(embed)
    } else {
        if(message.content.split(' ').slice(1).join(' ').length > 80) {
            message.channel.send('Você ultrapassou o limite de 80 caracteres.')
        } else {
            if(message.guild.member(client.user).hasPermission('ATTACH_FILES')) {
                var authorMessage = message
                message.channel.send('Carregando sua imagem...').then(message => {
            Jimp.read(`https://cdn.discordapp.com/attachments/400739706393985034/532688398331150346/unknown.png`, function (err, image) {
            if (err) message.channel.send('Ocorreu um erro ao criar a imagem.')
            Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
            image.print(font, 15, 670, authorMessage.content.split(' ').slice(1).join(' '))
            var aguardeMessage = message
            image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
            message.channel.sendFile(buffer, 'tretanews.png', '🖼 | <@' + authorMessage.author.id + '>').then(message => {
                aguardeMessage.delete()
            })
            })
            })
            })})
            } else {
                message.channel.send('Eu preciso da permissão `ATTACH_FILES` para continuar com esse comando!')
            }
        }
    }
    }
 module.exports.command = {
    name: 'tretanews',
    description: 'Faz uma montagem de alguma notícia do "TRETANEWS"',
    category: "manipulação",
    usage: 'tretanews',
    enabled: true
}