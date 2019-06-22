var Discord = require('discord.js')
var Jimp = require("jimp")
module.exports = async (client, message, args)  => {
    let usuario = message.mentions.users.first() || client.users.get(args[0]) ||  message.author;
    
    Jimp.read("https://cdn.discordapp.com/attachments/464270386943623188/518807328053657610/Camada_2.png", function (erre, img) {
    Jimp.read("https://cdn.discordapp.com/attachments/462750466195980308/544998151258505227/rip.png", function (erre, rip) {
    Jimp.read(`${usuario.avatarURL}`).then(function (avatar) { 
                avatar.resize(520, 520)            
                img.resize(324, 132)
                img.composite(rip, 520, 520)
                img.composite(avatar, 256, 55)
                img.getBuffer(Jimp.MIME_PNG, (erri, buffer) => {
                    message.channel.send(``, new Discord.Attachment(buffer, 'rip.png')).catch(err => {
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
    name: 'rip',
    description: 'Faz uma montagem da morte de algum usuário',
    category: "manipulação",
    usage: 'rip',
    enabled: true
}