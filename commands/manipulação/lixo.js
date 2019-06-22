var Discord = require('discord.js')
var Jimp = require("jimp")
module.exports = async (client, message, args)  => {
    let usuario = message.mentions.users.first() || client.users.get(args[0]) ||  message.author;
    
    Jimp.read("https://cdn.discordapp.com/attachments/464270386943623188/518807328053657610/Camada_2.png", function (erre, img) {
        Jimp.read("https://cdn.discordapp.com/attachments/463426370337374212/528957347549151244/unknown.png", function (erre, lixo) {
            Jimp.read(`${usuario.avatarURL}`).then(function (avatar) { 
                avatar.resize(33, 34)            
                img.resize(324, 132)
                img.composite(lixo, 0, 0)
                img.composite(avatar, 256, 55)
                img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                    message.channel.send(``, new Discord.Attachment(buffer, 'Lixeira.png')).catch(err => {
                        message.channel.stopTyping();
                        message.channel.send('`' + message.author.tag + '`, Parece que ocorreu um erro ao enviar essa imagem.');
                    });
                    message.channel.stopTyping();
                });
            });
        });
    });                                                                
}

 module.exports.command = {
    name: 'lixeira',
    description: 'Faz uma montagem da evolução da Lixeira do Windows',
    category: "manipulação",
    usage: 'lixeira',
    enabled: true
}